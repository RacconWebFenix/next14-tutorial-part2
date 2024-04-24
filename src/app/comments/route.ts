import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filtredComments = query
    ? comments.filter((c) => c.text.includes(query))
    : comments;
  return Response.json(filtredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newcomment);

  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "applications/json",
    },
    status: 201,
  });
}
