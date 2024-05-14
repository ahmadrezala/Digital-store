"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [olds, setOlds] = useState([]);

  const cardshop = useRef(null);

  function handelClick() {
    cardshop.current.classList.toggle("hidden");
  }



  function handelRemove(name) {
    const news = olds.filter((old) => old.name !== name);

    localStorage.setItem("objectcart", JSON.stringify([...news]));

    console.log(news);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });

    setOlds(JSON.parse(localStorage.getItem("objectcart")));
  }, []);

  return (
    <section
      id="HeadTop "
      className=" flex flex-wrap items-center bg-white justify-center"
    >
      <header className="w-[85%] text-[18px] flex items-center justify-between my-5">
        <ul className="lg:flex hidden  ">
          <li className="list-none px-3 py-2">
            <Link href="http://localhost:3000/home">Home</Link>
          </li>
          <li className="list-none px-3 py-2">
            <Link href="http://localhost:3000/home/about">About</Link>
          </li>
          <li className="list-none px-3 py-2 group relative">
            <Link
              className="flex relative"
              href="http://localhost:3000/home/categories"
            >
              Categoires
            </Link>
            {/* <div className="absolute">
              <ul>
                <li>ss</li>
                <li>dd</li>
                <li>dd</li>
                <li>dd</li>
              </ul>

            </div> */}
          </li>
        </ul>
        <div className="text-[27px]  text-black font-semibold hover:text-hoverColor hover:[transform:scale(1.2)] duration-500">
          Commerce X
        </div>
        <div className=" w-[20%] flex justify-end items-end">
          <ul className="lg:flex hidden ">
            <li className="list-none px-3 py-2 ">
              <Link className="flex" href="http://localhost:3000/home/products">
                Products
              </Link>
              <ul>
                <li></li>
              </ul>
            </li>
            <li className="list-none px-3 py-2 ">
              <Link href="http://localhost:3000/home/contact">Contacts</Link>
            </li>
          </ul>

          <div className="flex relative">
            <span className="2xl:flex justify-center items-center hidden w-[15px] text-[12px] absolute top-[50%] left-[10%] h-[15px] rounded-[50%] bg-black text-white">
              {olds && olds.length}
            </span>

            <img
              onClick={() => {
                handelClick();
              }}
              className="px-3  py-2 cursor-pointer"
              src="/homeImg/bag.svg "
            />
          </div>

          <div className=" flex justify-end lg:hidden">
            <div
              id="hamBar"
              className="flex flex-wrap w-[55px] h-[45px]  text-white shadow-shadowInset p-2  items-center rounded-xl relative"
            >
              <div className="border-2 border-black bg-black w-[50%] justify-start h-[1px] duration-1000 "></div>
              <div className="border-2 border-black bg-black w-full h-[1px] duration-1000 "></div>
              <div className=" flex flex-wrap w-full justify-end duration-1000 ">
                <span className="border-2 border-black bg-black w-[50%] h-[1px]">
                  {" "}
                </span>
              </div>
            </div>
            <ul
              id="modalBar"
              className="w-full fixed z-[1000] flex border-t-[1px] border-b-[1px] border-gray-200 flex-wrap text-black py-2  px-4  bg-white top-0 right-0 duration-1000 opacity-0 invisible"
            >
              <li className="w-full py-2 px-3 text-lg  ">Home</li>
              <li className="w-full py-2 px-3 text-lg  ">About</li>
              <li className="w-full py-2 px-3 text-lg group ">
                Product
                <ul className="h-0 overflow-hidden  group-hover:h-[150px] duration-500">
                  <li className=" flex justify-between p-5">
                    <ul>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                    </ul>

                    <ul>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                    </ul>

                    <ul>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                    </ul>

                    <ul>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                      <li className="list-none">
                        <a href="">Home1</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="w-full py-2 px-3 text-lg  ">Page</li>
              <li className="w-full py-2 px-3 text-lg  ">Contact</li>
            </ul>
          </div>
        </div>
      </header>

      <div
        ref={cardshop}
        className="fixed bg-[rgba(0,0,0,0.8)]  z-40 w-full h-[100vh] justify-center items-center top-0 left-0 hidden"
      >
        <div className="w-[450px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white opacity-[1] rounded-[24px]">
          <div className="flex justify-between px-[24px] py-[22px]">
            <span className="text-[22px]">your cart</span>
            <i
              className="bi bi-x-lg text-black cursor-pointer"
              onClick={() => {
                handelClick();
              }}
            ></i>
          </div>

          {olds &&
            olds.map((old) => {
              return (
                <div className="px-[24px] py-[12px] flex">
                  <div>
                    <img
                      className="w-[60px]"
                      src={`http://localhost:8000/storage/image/products/${old.imgcart}`}
                      alt=""
                    />
                  </div>
                  <div className="mx-[16px] grow">
                    <div className="text-[18px] font-bold">{old.name}</div>
                    <div className="text-[#333]">$ {old.price} USD</div>
                    <div className="pl-[8px] text-[#333] mb-[8px]">
                      <span>{old.variation}</span>
                    </div>
                    <div
                      className="text-[#333] cursor-pointer"
                      onClick={() => {
                        handelRemove(old.name);
                      }}
                    >
                      remove
                    </div>
                  </div>
                  <div>
                    <input
                      className="w-[48px] p-0"
                      type="number"
                      min={1}
                      max={old.maxtotal}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              );
            })}

          <div className="flex justify-between px-[24px] py-[22px]">
            <span className="text-[20px]">Subtotal</span>
            <span className="text-black text-[20px] font-bold">
              $ 399.92 USD
            </span>
          </div>
          <div className="flex justify-between px-[24px] py-[22px]">
            <a
              className="bg-black w-full rounded-[96px] text-white text-center py-[24px] px-[36px] border-[1px] border-black hover:text-black hover:bg-white hover:[transform:scale(1.02)] duration-500"
              href=""
            >
              continue to checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
