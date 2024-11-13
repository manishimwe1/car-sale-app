import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";

export const postMessage = httpAction(async (ctx, request) => {
  const { author, body } = await request.json();
  console.log(body, "ths its body");

  await ctx.runQuery(internal.user.getUser, {
    email: body,
  });

  return new Response(null, {
    status: 200,
  });
});
