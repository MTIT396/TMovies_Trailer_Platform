import { useSearchParams } from "next/navigation";

export const useQueryString = (): Record<string, string> => {
  const searchParams = useSearchParams();

  return Object.fromEntries(Array.from(searchParams.entries())) as Record<
    string,
    string
  >;
};
