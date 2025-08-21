import { TextAssets } from "starrail.js";
import z from "zod";

export const textAssetsSchema = z
  .object<TextAssets>()
  .refine((value) => value instanceof TextAssets, {
    path: ["name"],
    error: "Not a TextAssets",
  });
