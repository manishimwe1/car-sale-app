import { httpRouter } from "convex/server";
import { postMessage } from "./auth";
import { getUserIndb } from "./user";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

// auth.addHttpRoutes(http);

http.route({
  path: "/getMessagesByAuthor",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const email = new URL(request.url).searchParams.get("email");

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email parameter is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const user = await ctx.runQuery(internal.user.getUser, {
      email,
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
});

export default http;
