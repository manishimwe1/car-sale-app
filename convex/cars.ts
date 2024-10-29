

import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v, VString, } from "convex/values";

// Create a new carInfo with the given text
export const createCar = mutation({
  args: { name: v.string(),
    money: v.number(),
    brand:v.string(),
    imageUrls:v.array(v.id("_storage"))
},
  handler: async (ctx, args) => {
    const newCarId = await ctx.db.insert("cars", { 
        name: args.name,
        
        money: args.money,
        brand: args.brand,
        imageIds: args.imageUrls
    });
    return newCarId;
  },

});
// async function getImageUls(fileId:Id<"_storage">){
//   const url = await ctx.storage.getUrl(args.storageId)
//   console.log(url);
  
//   return url
// }
export const getCar = query({
  handler: async (ctx) => {
    const newCarId = await ctx.db.query("cars").order("desc").collect();
    
    const images = await Promise.all(
      newCarId.map(async (message) => {
        const urls = await Promise.all(
          message.imageIds.map(async (storageId) => {
            return await ctx.storage.getUrl(storageId);
          })
        );
        return { ...message, urls };
      })
    );

    console.log(images, 'here');
    
    return images;
  },
});




export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const sendImage = query({
  args: { storageId: v.id("_storage")},
  handler: async (ctx, args) => {
    const results=await ctx.storage.getUrl(args.storageId)
    return results
  },

});     

export const list = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("cars").collect();
    return Promise.all(
      messages.map(async (message) => ({
        ...message,
        // If the message is an "image" its `body` is an `Id<"_storage">`
        ...(message.imageIds.map(async(storageId)=>(
          { url: await ctx.storage.getUrl(storageId) }
          
        )))
      })),
    );
  },
});     