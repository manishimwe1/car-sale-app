import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createViews = mutation({
  args: {
    views: v.number(),
    carId: v.id("cars"),
  },
  handler: async (ctx, args) => {
    console.log(args.views);

    const newUser = await ctx.db.insert("views", {
      views: args.views,
      carId: args.carId,
    });

    if (!newUser)
      return new ConvexError("something went wrong in creating views!");
    return newUser;
  },
});
