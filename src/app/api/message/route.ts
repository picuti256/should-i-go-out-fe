import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  text: string;
};

export async function POST(req: NextRequest, res: NextResponse<Data>) {
  const { message } = await req.json();
  try {
    const axiosConfig = {
      headers: { "Content-Type": "application/json" },
    };

    const response = await axios.post(
      "http://localhost:3030/chat",
      { message },
      axiosConfig
    );

    const data = response.data;
    console.log(data)
    console.log(data.planB);
    return NextResponse.json(data.planB);
  } catch (error) {
    console.error("Error forwarding message:", error);
    return NextResponse.json(
      { message: "Error getting the city status" },
      { status: 500 }
    );
  }
}
