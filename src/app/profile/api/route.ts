import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const headersList = headers();

  console.log(requestHeaders.get("Authorization"));

  console.log(headersList.get("Authorization"));
  return new Response("<h1>Hello profile!</h1>", {
    headers: {
      "Content-type": "text/html",
    },
  });
}
