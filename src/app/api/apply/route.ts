import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Distributor from "@/models/Distributor";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    const distributor = await Distributor.create(data);

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        distributor,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Error submitting application",
      },
      { status: 500 }
    );
  }
}
