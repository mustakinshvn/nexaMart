export const getApiBaseUrl = () => {
  return (
    process.env.BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL 
  );
};