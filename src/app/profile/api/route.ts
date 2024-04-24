import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const headersList = headers();

  console.log(requestHeaders.get("Authorization"));

  console.log(headersList.get("Authorization"));

  cookies().set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(theme);
  console.log(cookies().getAll());

  return new Response("<h1>Hello profile!</h1>", {
    headers: {
      "Content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
