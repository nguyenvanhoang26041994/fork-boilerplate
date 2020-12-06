import React from 'react';
import { Pagination } from '@fork-ui/components/core';

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

  return (
    <Pagination>
      {!isFirstPage && <Pagination.Prev onClick={goPrev} />}
      {Pagination.loop(startPage, endPage, (page) => (
        <Pagination.Page
          key={page}
          active={page === currentPage}
          onClick={() => onChange(page)}
        >
          {page}
        </Pagination.Page>
      ))}
      {!isLastPage && <Pagination.Next onClick={goNext} />}
    </Pagination>
  );
};

export default Demo;
