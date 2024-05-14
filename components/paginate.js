import ReactPaginate from "react-paginate";

export default function Pagination({ count, countpage }) {
  console.log(count);

  function handlePageClick(data) {
    fetch(`http://127.0.0.1:8000/api/brands?page=${data.selected + 1}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <>
      <ReactPaginate
        previousLabel={<i className="bi bi-chevron-left"></i>}
        nextLabel={<i className="bi bi-chevron-right"></i>}
        breakLabel={"..."}
        pageCount={countpage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={
          "isolate inline-flex -space-x-px rounded-md shadow-sm"
        }
        pageClassName={
          "relative inline-flex items-center text-sm font-semibold text-white hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        }
        pageLinkClassName={
          "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
        }
        previousClassName={
          "relative page-linkprev page-link inline-flex items-center rounded-l-md px-2  text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        }
        previousLinkClassName={
          "relative page-linkprev page-link inline-flex items-center rounded-l-md  text-white  focus:z-20 focus:outline-offset-0"
        }
        nextClassName={
          "relative inline-flex items-center rounded-r-md px-2  text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:z-20 focus:outline-offset-0"
        }
        nextLinkClassName={
          "relative inline-flex items-center rounded-r-md  text-white  focus:z-20 focus:outline-offset-0"
        }
        breakClassName={
          "relative inline-flex items-center rounded-r-md px-2  text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        }
        breakLinkClassName={
          "relative inline-flex items-center rounded-r-md px-2  text-white ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
        }
        activeClassName={"active"}
      />
    </>
  );
}
