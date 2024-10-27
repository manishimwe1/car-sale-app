import { mutation, query } from "./_generated/server";
import { v, } from "convex/values";

// Create a new carInfo with the given text
export const createCar = mutation({
  args: { name: v.string(),
    money: v.number(),
    brand:v.string(),
    imageIds:v.array(v.id("_storage"))
},
  handler: async (ctx, args) => {
    const newCarId = await ctx.db.insert("cars", { 
        name: args.name,
        money: args.money,
        brand: args.brand,
        imageIds: args.imageIds
    });
    return newCarId;
  },
});
export const getCar = query({
  handler: async (ctx) => {
    const newCarId = (await ctx.db.query("cars").order("desc").collect());
    return newCarId;
  },
});


export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// export const sendImage = mutation({
//   args: { storageId: v.id("_storage"), author: v.string() },
//   handler: async (ctx, args) => {
//     await ctx.db.insert("image", {
//       body: args.storageId,
//       author: args.author,
//       format: "image",
//     });
//   },
// });