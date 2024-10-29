import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  cars: defineTable({
    brand: v.string(),
    logoId: v.id("_storage"),
    money: v.float64(),
    name: v.string(),
    imageIds: v.array(v.id("_storage"))
  }),
  image: defineTable({
    author: v.string(),
    body: v.id("_storage"),
    format: v.string(),
  }),
});