import useSWR from "swr";

import fetcher from "../lib/fetcher";

const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/watch/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};
export default useMovie;
