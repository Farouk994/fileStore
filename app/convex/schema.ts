import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  files: defineTable({
    name: v.string(),
    // user: v.id("users"),
  }),
//   users: defineTable({
//     name: v.string(),
//     tokenIdentifier: v.string(),
//   })
//   .index("by_token", ["tokenIdentifier"]),
});