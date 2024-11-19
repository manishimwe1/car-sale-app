import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  cars: defineTable({
    brand: v.string(),
    logoId: v.id("_storage"),
    money: v.float64(),
    name: v.string(),
    imageIds: v.array(v.id("_storage")),
    typeOfCar: v.string(),
    numberOfViews: v.number(),
    KM_Done: v.number(),
  }),
  user: defineTable({
    firstname: v.optional(v.string()),
    lastname: v.optional(v.string()),
    email: v.string(),
    password: v.optional(v.string()),
    image: v.optional(v.string()),
    role: v.string(),
  }),
  views: defineTable({
    views: v.number(),
  }),
});
