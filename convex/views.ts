import { ConvexError, v } from "convex/values";
import { internalQuery, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

export const getViewsForCar = internalQuery({
  args: {
    carId: v.id("cars"),
  },
  handler: async (ctx, args) => {
    const Views = await ctx.db
      .query("views")
      .filter((q) => q.lte(q.field("carId"), args.carId))
      .order("asc")
      .first();

    return Views;
  },
});

export const getViews = query({
  args: {
    carId: v.id("cars"),
  },
  handler: async (ctx, args) => {
    const Views = await ctx.db
      .query("views")
      .filter((q) => q.lte(q.field("carId"), args.carId))
      .order("asc")
      .first();

    return Views;
  },
});

export const createViews = mutation({
  args: {
    views: v.number(),
    carId: v.id("cars"),
  },
  handler: async (ctx, args) => {
    try {
      const existingViews = await ctx.runQuery(internal.views.getViewsForCar, {
        carId: args.carId,
      });

      if (existingViews) {
        const newViews = await ctx.db.patch(existingViews._id, {
          views: existingViews.views + args.views,
          carId: args.carId,
        });
      } else {
        const newViews = await ctx.db.insert("views", {
          views: args.views,
          carId: args.carId,
        });
      }
    } catch (error) {
      return new ConvexError("something went wrong in creating views!");
    }
  },
});
