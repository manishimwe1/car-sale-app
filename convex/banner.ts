import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createBanner = mutation({
  args: {
    title: v.string(),
    subTitle: v.string(),
    image: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    const newBanner = await ctx.db.insert("banner", {
      title: args.title,
      subTitle: args.subTitle,
      image: args.image ?? undefined,
    });

    if (!newBanner)
      return new ConvexError("something went wrong in creating user!");
    return newBanner;
  },
});

export const getBanner = query({
  handler: async (ctx) => {
    const Banner = await ctx.db.query("banner").collect();

    if (!Banner) {
      throw new ConvexError("something went wrong in creating Banner!");
    }
    return Banner[0];
  },
});
