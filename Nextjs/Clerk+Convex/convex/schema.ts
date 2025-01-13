import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users Table
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    password: v.optional(v.string()),
  })
  .index("by_clerkId", ["clerkId"])
  .index("by_email", ["email"])
});