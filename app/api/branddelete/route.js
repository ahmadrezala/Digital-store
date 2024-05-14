import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const token = cookies().get("token");

  const { id } = await req.json();
  console.log(id);

  const resApi = await fetch(`http://127.0.0.1:8000/api/brands/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });
  const data = await resApi.json();

  if (resApi.ok) {
    return NextResponse.json({ message: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ message: data }, { status: resApi.status });
  }
}
