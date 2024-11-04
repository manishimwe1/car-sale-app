

import { Doc, Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { ConvexError, v,} from "convex/values";

// Create a new carInfo with the given text
export const createCar = mutation({
  args: { name: v.string(),
    money: v.number(),
    KM_Done: v.number(),
    brand:v.string(),
    imageUrls:v.array(v.id("_storage")),
    logoID:v.id("_storage"),
    typeOfCar:v.string()
 
},
  handler: async (ctx, args) => {
    const numberOfViews=0
    if(args.imageUrls.length === 0){
      return new Error('somethng went wrong')
    }
    const newCarId = await ctx.db.insert("cars", { 
        name: args.name,
        logoId:args.logoID,
        money: args.money,
        brand: args.brand,
        imageIds: args.imageUrls,
        typeOfCar:args.typeOfCar,
        numberOfViews,
        KM_Done:args.KM_Done
    });
    return newCarId;
  },

});


export const getCar = query({
  handler: async (ctx) => {
    const newCarId:Doc<'cars'>[] = await ctx.db.query("cars").order("desc").collect();
    
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
export const getSimilarCar = query({
  args:{id:v.id('cars')},
  handler: async (ctx,args) => {
    const newCarId = await ctx.db
  .query("cars")
  .filter((q) => q.neq(q.field("_id"), args.id))
  .collect();
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
export const getCarLessThanMoney = query({
  args:{money:v.number()},
  handler: async (ctx,args) => {
    const newCarId = await ctx.db
  .query("cars")
  .filter((q) => q.lte(q.field("money"), args.money)).order('asc')
  .collect();
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

export const getCarById = query({
  args:{
    id:v.id('cars'),
  },
  handler: async (ctx,args) => {
    const newCarId = await ctx.db.get(args.id);
  
    if(!newCarId) return console.log('semothing went wrong');
    const logoUrls = await ctx.storage.getUrl(newCarId.logoId);
    const images = await Promise.all(
      newCarId.imageIds.map(async (id) => {
        const urls = await ctx.storage.getUrl(id);
        return urls;
      })
    );
    // console.log(newCarId, 'here');
    
    return {...newCarId,images,logoUrls};
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
      