export function pngToWebp(url: string): string {
  return url.replace(/\.png(?=($|\?|#))/i, ".webp");
}

export function yattaHostConvert(url: string | undefined): string {
  // eslint-disable-next-line curly
  if (url === undefined) return "";
  try {
    const parsed = new URL(url);
    parsed.host = "sr.yatta.moe";
    return parsed.toString();
  } catch {
    return url;
  }
}
