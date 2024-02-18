import { useState } from "react";

export const useSearchParams: () => [
  searchParams: { [k: string]: string },
  handleSearchParams: (newSearchParams: { [key: string]: string }) => void
] = () => {
  const [params, setParams] = useState<{ [k: string]: string }>(
    Object.fromEntries([...new URLSearchParams(window.location.search)])
  );

  const handleSearchParams = (newSearchParams: { [key: string]: string }) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    Object.keys(newSearchParams).forEach((key) => {
      urlSearchParams.set(key, newSearchParams[key]);
    });
    setParams(Object.fromEntries([...urlSearchParams]));
    const newPathname = `${window.location.pathname}?${urlSearchParams}`;
    window.history.replaceState({}, "", newPathname);
  };
  return [params, handleSearchParams];
};
