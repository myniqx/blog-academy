import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { message: "Method not allowed in development" },
      { status: 405 },
    );
  }

  try {
    const filePath = path.join(process.cwd(), "src/constants/blogs/blogs.json");
    const body = await req.json(); // req.body yerine bunu kullanın

    fs.writeFileSync(filePath, JSON.stringify(body, null, 2));

    return NextResponse.json(
      { message: "Blog başarıyla kaydedildi." },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Blog kaydedilemedi.", error },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    { message: "GET request not allowed" },
    { status: 405 },
  );
}
