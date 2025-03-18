// app/api/apply/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { distributorshipApplicationSchema } from "../../../lib/schema"; // Adjust the import path as needed
import { Resend } from "resend";
import { DistributorshipEmailTemplate } from "../../components/email-template";
import { ReactElement } from "react"; // Adjust the import path as needed

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = distributorshipApplicationSchema.parse(json);
    const { name, email } = data;

    // Retrieve sender and recipient values from environment variables
    const from = process.env.EMAIL_FROM || "Cirro <distributorship@cirro.com>";
    const to = process.env.EMAIL_TO ? [process.env.EMAIL_TO] : [email];

    // Generate the email content using the React email template component
    const emailContent = DistributorshipEmailTemplate({
      firstName: name,
      companyName: "Cirro",
    }) as ReactElement;

    // Send the email via Resend
    const response = await resend.emails.send({
      from,
      to,
      subject: "Your Distributorship Application",
      react: emailContent,
    });

    return NextResponse.json({
      message: "Application submitted successfully",
      data: response,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
