import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

// endpoint called in react, does modification such as store entry into convex DB
export const createFile = mutation({
  args: {
    name: v.string(),
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity)
      throw new ConvexError("You must be logged in to Upload file");
    await ctx.db.insert("files", {
      name: args.name,
      orgId: args.orgId,
    });
  },
});

// collect all entries stored inside a table
// then send them to the backend
export const getFiles = query({
  args: {
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];
    return ctx.db
      .query("files")
      .withIndex("by_orgId", (q) => q.eq("orgId", args.orgId))
      .collect();
  },
});
