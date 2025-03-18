// app/api/apply/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { distributorshipApplicationSchema } from "../../../lib/schema"; // Adjust the import path as needed
import { Resend } from "resend";
import { DistributorshipEmailTemplate } from "../../components/email-template"; // Your email template component
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: Request) {
  try {
    const json = await request.json();

    // Validate the incoming data using your Zod schema.
    const data = distributorshipApplicationSchema.parse(json);

    // Destructure the validated fields.
    const { name, email } = data; // you can extract other fields if needed

    // Generate the email using your React-based email template.
    const emailContent = DistributorshipEmailTemplate({
      firstName: name,
      companyName: "Cirro", // adjust if needed
    }) as ReactElement;

    // Send the email via Resend.
    const response = await resend.emails.send({
      from: "Cirro <distributorship@cirro.com>",
      to: [email],
      subject: "Your Distributorship Application",
      react: emailContent,
    });

    return NextResponse.json({
      message: "Application submitted successfully",
      data: response,
    });
  } catch (error) {
    // If the error is from Zod, it may indicate that one of the strings didn't match the expected pattern.
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
