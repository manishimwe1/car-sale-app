import { ConvexError, v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createViews = internalMutation({
  args: {
    views: v.number(),
  },
  handler: async (ctx, args) => {
    console.log(args.views);

    const newUser = await ctx.db.insert("views", {
      views: args.views,
    });

    if (!newUser)
      return new ConvexError("something went wrong in creating views!");
    return newUser;
  },
});
