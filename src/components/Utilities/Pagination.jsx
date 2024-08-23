import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  // MEMBUAT GO TO FIRST PAGE MASIH BELUM JADI

  return (
    <div className="text-primary flex flex-col justify-center items-center py-6 px-2">
      <div className="flex justify-center items-center gap-4 pb-2 text-xl">
        {page > 1 ? (
          <button className="transition-all hover:text-accent" onClick={handlePrevPage}>
            Prev
          </button>
        ) : null}
        <p>
          {page} of {lastPage}
        </p>
        {page < lastPage ? (
          <button className="transition-all hover:text-accent" onClick={handleNextPage}>
            Next
          </button>
        ) : null}
      </div>
      {/* // MEMBUAT GO TO FIRST PAGE BELUM BISA */}
      <div>
        {page === lastPage ? null : (
          <button className="transition-all hover:text-accent text-lg" onClick={handleLastPage}>
            Last Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
