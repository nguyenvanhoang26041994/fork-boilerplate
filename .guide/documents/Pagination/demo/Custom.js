import React, { useState, useCallback, useEffect } from 'react';
import { Pagination } from '@@/fork-ui/src/components/core';

const fetchPage = (callback) => {
  setTimeout(() => callback(), 1000);
};

const Demo = () => {
  const [{
    currentPage,
    startPage,
    endPage,
    isFirstPage,
    isLastPage,
    onChange,
    goPrev,
    goNext
  }] = Pagination.usePagination({
    total: 100,
    pageSize: 10,
    currentPage: 2,
  });

  const [isLoading, setLoading] = useState(true);

  const customOnChange = useCallback((page) => {
    setLoading(true);
    onChange(page);
    fetchPage(() => setLoading(false));
  }, [setLoading, onChange]);

  const customGoNext = useCallback(() => {
    setLoading(true);
    goNext();
    fetchPage(() => setLoading(false));
  }, [setLoading, goNext]);

  const customGoPrev = useCallback(() => {
    setLoading(true);
    goPrev();
    fetchPage(() => setLoading(false));
  }, [setLoading, goPrev]);

  useEffect(() => {
    fetchPage(() => setLoading(false));
  }, []);

  return (
    <Pagination>
      <Pagination.Prev
        rounded
        onClick={customGoPrev}
        disabled={isFirstPage}
      />
      {Pagination.loop(startPage, endPage, (page) => (
        <Pagination.Page
          key={page}
          rounded
          active={page === currentPage}
          loading={isLoading && page === currentPage}
          onClick={() => customOnChange(page)}
        >
          <a href="javascript:void(0);">{page}</a>
        </Pagination.Page>
      ))}
      <Pagination.Next
        rounded
        onClick={customGoNext}
        disabled={isLastPage}
      />
    </Pagination>
  );
};

export default Demo;
