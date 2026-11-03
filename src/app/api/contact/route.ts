import { NextResponse } from "next/server";

const SUPABASE_URL = "https://hwsescfdnkogoaxqplht.supabase.co";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-dinamica`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
