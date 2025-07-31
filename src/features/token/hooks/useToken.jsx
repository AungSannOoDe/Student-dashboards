"use client";

import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { debounce } from "lodash";
import { useSearchParams, useRouter } from "next/navigation";
import {
  convertSearchPramsToObject,
  extractSearchPramsObjectFromUrl,
} from "../../../utils/url";
import { fetchToken, tokenApiUrl } from "@/services/token";

const useToken = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef();
  const [fetchUrl, setFetchUrl] = useState(fetchToken);
  const updateUrlParams = (newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(`${tokenApiUrl}?${updatedSearch}`);
  };
  

  useEffect(() => {
    const currentParams = convertSearchPramsToObject(searchParams);
    const queries = new URLSearchParams(currentParams).toString();
    setFetchUrl(`${tokenApiUrl}?${queries}`);

    if (currentParams.q) {
      searchRef.current.value = currentParams.q;
    } else {
      searchRef.current.value = "";
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl,fetchToken);

  const handleSearchInput = debounce((e) => {
    const q = e.target.value;
    if (q) {
      updateUrlParams({
        ...convertSearchPramsToObject(searchParams),
        q,
        page: 1,
      });
    } else {
      updateUrlParams({});
    }
  }, 1000);

  const clearSearchInput = () => {
    searchRef.current.value = "";
    updateUrlParams({});
  };

  const handlePaginate = (url) => {
    const newParams = {
      ...extractSearchPramsObjectFromUrl(url),
    };
    updateUrlParams(newParams);
  };

  const handleLimit = (e) => {
    const newParams = {
      ...convertSearchPramsToObject(searchParams),
      page: 1,
      limit: e.target.value,
    };
    updateUrlParams(newParams);
  };

  const handleSort = (sortData) => {
    const newParams = {
      ...convertSearchPramsToObject(searchParams),
      ...sortData,
    };
    updateUrlParams(newParams);
  };

  return {
    searchRef,
    data,
    isLoading,
    error,
    handleSearchInput,
    clearSearchInput,
    handleSort,
    handlePaginate,
    handleLimit,
    updateUrlParams,
    searchParams
  };
};

export default useToken;