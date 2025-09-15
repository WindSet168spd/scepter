import z from "zod";

export const imageAssetSchema = z.object({
  url: z.string().min(1),
});

export type ImageAssetDto = z.infer<typeof imageAssetSchema>;
