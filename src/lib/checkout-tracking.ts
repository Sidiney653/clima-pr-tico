export function withCheckoutUtms(checkout: string, search: string): string {
  const url = new URL(checkout);
  for (const [key, value] of new URLSearchParams(search)) {
    if (key.toLowerCase().startsWith("utm_")) url.searchParams.set(key, value);
  }
  return url.toString();
}