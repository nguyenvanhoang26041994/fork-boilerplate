import React, { useState, useEffect } from 'react';
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

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPage(() => setLoading(false));
  }, [currentPage]);

  return (
    <Pagination>
      <Pagination.Prev
        rounded
        onClick={goPrev}
        disabled={isFirstPage}
      />
      {Pagination.loop(startPage, endPage, (page) => (
        <Pagination.Page
          key={page}
          rounded
          active={page === currentPage}
          loading={isLoading && page === currentPage}
          onClick={() => onChange(page)}
        >
          <a href="javascript:void(0);">{page}</a>
        </Pagination.Page>
      ))}
      <Pagination.Next
        rounded
        onClick={goNext}
        disabled={isLastPage}
      />
    </Pagination>
  );
};

export default Demo;
