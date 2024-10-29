

import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v,} from "convex/values";

// Create a new carInfo with the given text
export const createCar = mutation({
  args: { name: v.string(),
    money: v.number(),
    brand:v.string(),
    imageUrls:v.array(v.id("_storage")),
    logoID:v.id("_storage"),
 
},
  handler: async (ctx, args) => {
    const newCarId = await ctx.db.insert("cars", { 
        name: args.name,
        logoId:args.logoID,
        money: args.money,
        brand: args.brand,
        imageIds: args.imageUrls
    });
    return newCarId;
  },

});


export const getCar = query({
  handler: async (ctx) => {
    const newCarId = await ctx.db.query("cars").order("desc").collect();
    
    const images = await Promise.all(
      newCarId.map(async (message) => {
        const logoUrls = await ctx.storage.getUrl(message.logoId);
        const urls = await Promise.all(
          message.imageIds.map(async (storageId) => {
            return await ctx.storage.getUrl(storageId);
          })
        );
        return { ...message, urls,logoUrls };
      })
    );

    console.log(images, 'here');
    
    return images;
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
     