export const getApiBaseUrl = () => {
  const base =
    process.env.BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.NEXT_PUBLIC_BASE_URL 

  // Helpful server-side warning when none of the expected env vars are set
  if (!process.env.BASE_URL && !process.env.NEXT_PUBLIC_API_URL && !process.env.NEXT_PUBLIC_BASE_URL) {
    if (typeof console !== "undefined" && process.env.NODE_ENV !== "production") {
      console.warn(
        "getApiBaseUrl: no environment variable set for BASE_URL / NEXT_PUBLIC_API_URL / NEXT_PUBLIC_BASE_URL — using default:",
        base
      );
    }
  }

  return base;
};