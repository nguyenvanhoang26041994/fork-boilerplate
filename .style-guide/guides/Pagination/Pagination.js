import React from 'react';
import { Pagination } from '@fork-ui/core';

export default () => {
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
    total: 300,
    pageSize: 10,
    currentPage: 2,
    max: 7,
  });

  return (
    <Pagination>
      <Pagination.Prev onClick={goPrev} disabled={isFirstPage} />
      {Pagination.loop(startPage, endPage, (page) => (
        <Pagination.Page
          key={page}
          active={page === currentPage}
          onClick={() => onChange(page)}
        >
          {page}
        </Pagination.Page>
      ))}
      <Pagination.Next onClick={goNext} disabled={isLastPage} />
    </Pagination>
  );
};
