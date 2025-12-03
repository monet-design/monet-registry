/**
 * MCP 도구 등록
 */

export { searchComponentsSchema, handleSearchComponents } from "./search.js";
export { getComponentCodeSchema, handleGetComponentCode } from "./code.js";
export { getComponentDetailsSchema, handleGetComponentDetails } from "./details.js";
export { listCategoriesSchema, handleListCategories } from "./categories.js";
export { getRegistryStatsSchema, handleGetRegistryStats } from "./stats.js";

export const allTools = [
  { schema: "searchComponentsSchema", handler: "handleSearchComponents" },
  { schema: "getComponentCodeSchema", handler: "handleGetComponentCode" },
  { schema: "getComponentDetailsSchema", handler: "handleGetComponentDetails" },
  { schema: "listCategoriesSchema", handler: "handleListCategories" },
  { schema: "getRegistryStatsSchema", handler: "handleGetRegistryStats" },
];
