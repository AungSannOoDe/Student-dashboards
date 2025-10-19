"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import useSWR from "swr";
import { debounce } from "lodash";
import { useSearchParams, useRouter } from "next/navigation";
import {
  convertSearchPramsToObject,
  extractSearchPramsObjectFromUrl,
} from "../../../utils/url";
import { fetchyear, yearApiUrl } from "@/services/subject";

const useYear = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef(null);
  
  // Memoize current params to avoid unnecessary recalculations
  const currentParams = useMemo(() => 
    convertSearchPramsToObject(searchParams), 
    [searchParams]
  );

  const [fetchUrl, setFetchUrl] = useState(() => 
    `${yearApiUrl}?${new URLSearchParams(currentParams).toString()}`
  );

  // Memoized URL update function
  const updateUrlParams = useCallback((newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(`${yearApiUrl}?${updatedSearch}`);
  }, [router]);

  // Initialize search input and URL
  useEffect(() => {
    const queries = new URLSearchParams(currentParams).toString();
    setFetchUrl(`${yearApiUrl}?${queries}`);
    
    if (searchRef.current) {
      searchRef.current.value = currentParams.q || "";
    }
  }, [currentParams]);

  // Fixed SWR usage - fetchUrl as key, fetchyear as fetcher
  const { data, isLoading, error, mutate } = useSWR(fetchUrl, fetchyear);

  // Memoized event handlers
  const handleSearchInput = useCallback(debounce((e) => {
    const q = e.target.value.trim();
    if (q) {
      updateUrlParams({
        ...currentParams,
        q,
        page: 1,
      });
    } else {
      // Remove q parameter when empty
      const { q: _, ...paramsWithoutQ } = currentParams;
      updateUrlParams(paramsWithoutQ);
    }
  }, 1000), [currentParams, updateUrlParams]);

  const clearSearchInput = useCallback(() => {
    if (searchRef.current) {
      searchRef.current.value = "";
    }
    const { q: _, ...paramsWithoutQ } = currentParams;
    updateUrlParams(paramsWithoutQ);
  }, [currentParams, updateUrlParams]);

  const handlePaginate = useCallback((url) => {
    const newParams = {
      ...extractSearchPramsObjectFromUrl(url),
    };
    updateUrlParams(newParams);
  }, [updateUrlParams]);

  const handleLimit = useCallback((e) => {
    const newParams = {
      ...currentParams,
      page: 1,
      limit: e.target.value,
    };
    updateUrlParams(newParams);
  }, [currentParams, updateUrlParams]);

  const handleSort = useCallback((sortData) => {
    const newParams = {
      ...currentParams,
      ...sortData,
    };
    updateUrlParams(newParams);
  }, [currentParams, updateUrlParams]);

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
    searchParams,
    mutate
  };
}

export default useYear;