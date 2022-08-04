import React from 'react'
import { getPagesArray } from '../../utils/pages';

const MyPagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pagination__wr">
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'pagination__btn pagination__btn--current' : 'pagination__btn'}>
          {p}
        </span>
      )}
    </div>
  )
}

export default MyPagination