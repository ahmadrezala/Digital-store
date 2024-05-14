"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [count, setCount] = useState("");
  const [countpage, setCountpage] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.data.meta.total);
        setCountpage(data.data.meta.last_page);

        setproducts(data.data.products);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function handlePageClick(data) {
    fetch(`http://127.0.0.1:8000/api/products?page=${data.selected + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.data.meta.total);
        setCountpage(data.data.meta.last_page);

        setproducts(data.data.products);

        // setError(null)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  function handelSearch() {
    fetch(`http://127.0.0.1:8000/api/home/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.products);

        setCount(data.data.meta.total);
        setCountpage(data.data.meta.last_page);

        setproducts(data.data.products);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <>
      <section className="w-full h-[80vh] bg-darkGray flex items-center justify-center relative mb-10">
        <img
          className="w-[26%] absolute bottom-0 right-0"
          src="/homeImg/63120fcc6da99d18b5cdac24_collection-1-hero-image-right-shopper-webflow-ecommerce-template.png"
          alt=""
        />
        <img
          className="w-[26%] absolute top-0 left-0"
          src="/homeImg/63120fcc8ebd85113092ca41_collection-1-hero-image-left-shopper-webflow-ecommerce-template.png"
          alt=""
        />

        <div className="w-[570px] flex flex-col items-center">
          <h1 className="text-[52px] text-[#0e0e0e] mb-[12px]">Collection 1</h1>
          <p className="text-[#5b5b5b] mb-[32px] text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi
            pellentesque cursus eget morbi sagittis sagittis.
          </p>
          <button className="me-5 py-[20px] px-[32px] bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
            Browse products
          </button>
        </div>
      </section>

      <section
        id="Product"
        className=" flex flex-wrap justify-center items-center bg-white"
      >
        <div className="w-[85%] text-[18px] ">
          <div className="flex flex-wrap justify-between ">
            <div className="flex justify-between w-[35%] items-end ">
              <a href="#">All</a>
              <img src="/homeImg/slash.svg" />
              <a href="#">Technology</a>
              <img src="/homeImg/slash.svg" />
              <a href="#">Gear</a>
              <img src="/homeImg/slash.svg" />
              <a href="#">Audio</a>
            </div>
            <div className="w-[40%] flex ">
              <input
                className="outline-none w-[80%]"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="Search for Product"
              />
              <i
                onClick={() => {
                  handelSearch();
                }}
                className="bi bi-search text-xl text-gray-400 cursor-pointer hover:[transform:scale(1.2)] duration-300"
              ></i>
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-3"></div>
          </div>

          <div className="flex flex-wrap justify-between my-20">
            {products &&
              products.map((product) => {
                return (
                  <Link
                    className="w-full md:w-[32%] h-[380px] my-8 mb-28"
                    href={`http://localhost:3000/home/products/${product.id}`}
                    id="0"
                  >
                    <figure className="w-full h-[100%]">
                      <img
                        className="rounded-[50px] w-full h-full object-cover  mb-5 bg-darkGray "
                        src={`http://localhost:8000/storage/image/products/${product.primary_image}`}
                        alt="Wireless Mouse"
                      />
                      <figcaption className="ps-4">
                        <h3 className="text-lg text-gray-500">TECHNOLOGY</h3>

                        <h3 className="text-2xl py-2 "> {product.name}</h3>

                        <p>$ {product.price}</p>
                      </figcaption>
                    </figure>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <div className="flex justify-center mb-10">
        <ReactPaginate
          previousLabel={<i className="bi bi-chevron-left text-black"></i>}
          nextLabel={<i className="bi bi-chevron-right text-black"></i>}
          breakLabel={"..."}
          pageCount={countpage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={
            "isolate inline-flex -space-x-px rounded-md shadow-sm"
          }
          pageClassName={
            "relative inline-flex items-center text-sm font-semibold text-white   focus:z-20 focus:outline-offset-0"
          }
          pageLinkClassName={
            "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          }
          previousClassName={
            "relative page-linkprev page-link inline-flex items-center rounded-l-md px-2  text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          }
          previousLinkClassName={
            "relative page-linkprev page-link inline-flex items-center rounded-l-md  text-white  focus:z-20 focus:outline-offset-0"
          }
          nextClassName={
            "relative inline-flex items-center rounded-r-md px-2  text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          }
          nextLinkClassName={
            "relative inline-flex items-center rounded-r-md  text-white  focus:z-20 focus:outline-offset-0"
          }
          breakClassName={
            "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
          }
          breakLinkClassName={
            "relative inline-flex items-center px-2 focus:z-20 focus:outline-offset-0"
          }
          activeClassName={"bg-[#cacaca]"}
        />
      </div>
    </>
  );
};

export default Products;
