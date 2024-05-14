"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState();
  const [olds, setOlds] = useState([]);

  const params = useParams();
  let priceid = useRef(null);
  let quantityid = useRef(null);
  let valvar = useRef(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/home/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {});

    setOlds(JSON.parse(localStorage.getItem("objectcart")));
  }, []);

  const arrcart = [];

  olds &&
    olds.map((old) => {
      arrcart.push(old);
    });

  function handelCart() {
    const maxtotal = quantityid.current.getAttribute("max");
    const price = valvar.current.value.split(",")[0];
    const variation = valvar.current.value.split(",")[2];
    const imgcart = product.data.product.primary_image;
    const name = product.data.product.name;
    const objcart = {
      maxtotal: maxtotal,
      price: price,
      variation: variation,
      imgcart: imgcart,
      name: name,
    };
    arrcart.push(objcart);

    localStorage.setItem("objectcart", JSON.stringify([...arrcart]));

    console.log(localStorage.getItem("objectcart"));

    //  window.localStorage.setItem("objectcart", JSON.stringify(arrcart));
  }

  const handelvariation = (e) => {
    const arr = e.target.value.split(",");

    console.log(arr);
    quantityid.current.value = 1;
    quantityid.current.setAttribute("max", arr[1]);
    quantityid.current.disabled = false;

    priceid.current.innerHTML = "$ " + arr[0] + " USD";
  };

  // const product = await getPosts(params.id)

  // console.log(product);

  return (
    <>
      <section id="Product" className="flex flex-wrap justify-center mt-[5rem]">
        <div className="w-[88%] text-[18px] ">
          <div className="flex flex-wrap justify-between ">
            <div className="flex justify-between  items-end ">
              <a href="#">Products</a>
              <img className="px-3" src="/homeImg/slash.svg" />
              <a href="#">Technology</a>
              <img className="px-3" src="/homeImg/slash.svg" />
              <a href="#">Wireless Mouse</a>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 my-4"></div>
        </div>
        <div
          id="singleCard"
          className="w-[95%] lg:w-[86%] flex flex-wrap mt-14"
        >
          <div className="w-full lg:w-[50%] lg:ps-16 my-[5%] lg:order-2">
            <h1 className="text-4xl lg:text-5xl">
              {product && product.data.product.name}
            </h1>
            <p className="text-gray-500 text-xl py-5 lg:py-3">
              At eget tortor porta pharetra sagittis hendrerit sed maecenas et
              enim nibh amet augue amet malesuada risus pharetra tortor quis eu
              tincidunt tincidunt purus in interdum convallis.
            </p>
            <p className="text-2xl xl:my-3" ref={priceid}>
              $ {product && product.data.product.price} USD
            </p>
            <div className="flex justify-between py-7 lg:py-3">
              <input
                className="w-[10%] border-b-[1px] border-gray-600 outline-none text-lg pb-1"
                disabled
                type="number"
                placeholder="1"
                min={1}
                ref={quantityid}
              />
              <select
                className="w-[85%] border-b-[1px] border-gray-600 outline-none text-lg pb-1"
                ref={valvar}
                onChange={(e) => {
                  handelvariation(e);
                }}
              >
                {product &&
                  product.data.product.variations.map((variation) => {
                    return (
                      <option
                        key={variation.id}
                        value={[
                          variation.price,
                          variation.quantity,
                          variation.value,
                        ]}
                      >
                        {variation.value}
                      </option>
                    );
                  })}
              </select>
            </div>
            <button
              onClick={() => {
                handelCart();
              }}
              className="my-5 lg:my-2 xl:my-3 py-[20px] md:px-[82px] w-full lg:[width:fit-content]  text-xl bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.05)] duration-500 border-[1px] border-black"
            >
              Add to card
            </button>
            <div className="flex flex-wrap w-full my-5">
              {product &&
                product.data.attribute.map((att) => {
                  return (
                    <>
                      <div className="flex w-full py-4 lg:py-2">
                        <p className="text-lg w-[45%] font-semibold">
                          {att.attribute.name}
                        </p>
                        <p className="text-lg w-[50%] text-gray-500">
                          {att.value}
                        </p>
                      </div>

                      <div className="w-full h-[1px] bg-gray-200 my-3"></div>
                    </>
                  );
                })}
            </div>

            <div className="w-full h-[1px] bg-gray-200 my-10 lg:my-5 xl:my-16"></div>
            <div className="flex justify-between items-center ">
              <p className="md:text-[17px]">Accepted payment methods</p>
              <div className=" flex ">
                <img className="" src="homeImg/singlePage/paypal.svg" alt="" />
                <img
                  className="px-2"
                  src="homeImg/singlePage/stripe.svg"
                  alt=""
                />
                <img src="homeImg/singlePage/pay.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] my-10 lg:order-1 ">
            <img
              className="rounded-[50px] mb-8 h-[500px] object-cover bg-darkGray "
              src={`http://localhost:8000/storage/image/products/${
                product && product.data.product.primary_image
              }`}
              alt="Wireless Mouse"
            />
            <div className="flex">
              {product &&
                product.data.product.images.map((image) => {
                  // console.log(image);

                  return (
                    <img
                      className="rounded-[30px] object-cover mr-2 w-[23.5%]"
                      src={`http://localhost:8000/storage/image/products/${image.image}`}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="flex justify-center">
        <div className="w-[90%] my-10">
          <div className="w-full h-[.5px] bg-gray-300 "></div>

          <div className=" w-full  flex justify-between items-start my-20 ">
            <figure className="w-[20%] flex flex-wrap justify-center items-center text-center">
              <img
                className="bg-darkGray mx-3 rounded-[20px] mb-1"
                src="/homeImg/car.svg"
                alt=""
              />
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">Free Shopping</h3>
                <p className="text-gray-500 text-[14px]">Over $29.00 USD</p>
              </figcaption>
            </figure>

            <figure className="w-[23%] flex flex-wrap justify-center items-center text-center">
              <img
                className="bg-darkGray mx-3 rounded-[20px] mb-1"
                src="/homeImg/card.svg"
                alt=""
              />
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">Secure Payments</h3>
                <p className="text-gray-500 text-[14px]">
                  With credit and debit card
                </p>
              </figcaption>
            </figure>

            <figure className="w-[23%] flex flex-wrap justify-center items-center text-center">
              <div className="w-[86px] h-[86px] bg-darkGray mx-3 rounded-[20px] flex justify-center items-center">
                <img
                  className=" mb-1   w-[55px] h-[55px]"
                  src="/homeImg/verify.svg"
                  alt=""
                />
              </div>
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">30 days guarantee</h3>
                <p className="text-gray-500 text-[14px]">No question asked</p>
              </figcaption>
            </figure>

            <figure className="w-[23%] flex flex-wrap justify-center items-center text-center">
              <img
                className="bg-darkGray mx-3 rounded-[20px] mb-1"
                src="/homeImg/singlePage/leaf.svg"
                alt=""
              />
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">Sustainable materials</h3>
                <p className="text-gray-500 text-[14px]">100% sustainable</p>
              </figcaption>
            </figure>
          </div>

          <div className="w-full h-[.5px] bg-gray-300 "></div>
        </div>
      </section>

      <section
        id="Decription"
        className="flex flex-wrap justify-center mt-8 lg:my-20"
      >
        <div className="w-[90%] md:w-[65%] flex flex-wrap justify-center">
          <div className="text-[3.3vw] md:text-2xl py-3">
            <div className="flex flex-wrap justify-between ">
              <div className="flex justify-between  items-end ">
                <a href="#">Product decription</a>
                <img className="px-3" src="/homeImg/slash.svg" />
                <a href="#">Additional info</a>
                <img className="px-3" src="/homeImg/slash.svg" />
                <a href="#">Shipping</a>
              </div>
            </div>
          </div>
          <div className=" p-[5.5vw] bg-darkGray my-5 rounded-[40px]">
            <h3 className="text-[4.8vw] lg:text-4xl py-4">
              Product description
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
              arcu enim urna adipiscing praesent velit viverra sit semper lorem
              eu cursus vel hendrerit elementum morbi curabitur etiam nibh
              justo, lorem aliquet donec sed sit mi dignissim at ante massa
              mattis egestas.
            </p>
            <ul className="my-10 text-gray-500 ps-4 ">
              <li className="my-3">
                1. Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                auctor.
              </li>
              <li className="my-3">
                2. Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                potenti..
              </li>
              <li className="my-3">
                3. Mauris commodo quis imperdiet massa tincidunt nunc hendrerit
                pulvinar.
              </li>
              <li className="my-3">
                4. Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                potenti .
              </li>
            </ul>

            <h3 className="text-[3.8vw] lg:text-3xl py-3">Product materials</h3>
            <p className="text-gray-500 ">
              Vitae congue eu donec enim diam consequat ac felis ipsum dolor sit
              amet, consectetur adipiscing elit lobortis arcu enim urna
              adipiscing praesent velit viverra sit semper lorem eu cursus vel
              hendrerit elementum morbi curabitur etiam nibh justo, lorem
              aliquet donec sed sit mi dignissim at ante massa mattis egestas.
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-20"></div>
      </section>

      <section id="Related" className="overflow-hidden relative my-20 mb-30">
        <div className="flex flex-wrap justify-center">
          <div className="w-[90%] flex flex-wrap items-center justify-between my-5">
            <p className="w-full md:w-[50%] text-4xl flex justify-start ">
              Related products
            </p>
            <div className="w-full md:w-[50%] flex md:justify-end mt-2 md:mt-0">
              <div className=" flex group flex-wrap relative  [width:fit-content]  overflow-hidden py-2">
                <a className="text-xl " href="#">
                  Browse all products
                </a>
                <br />
                <span className="w-full h-[1.5px] bg-gray-300  absolute bottom-0"></span>
                <span className="w-full h-[1.5px] bg-gray-600  absolute bottom-0 duration-300 translate-x-[-200px] group-hover:translate-x-[0px]"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-between w-[90%] ">
            <figure className="w-full md:w-[48%] lg:w-[32%] relative mb-5">
              <img
                className="my-4 bg-darkGray rounded-[40px]"
                src="/homeImg/VR.jpg"
              />
              <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
                Technology
              </div>
              <figcaption className="">
                <h3 className="text-2xl pt-1">VR headset</h3>
                <p className="text-gray-500 py-3">
                  Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                  accusantium{" "}
                </p>
                <p className="text-xl pt-1">$49.99 USD</p>
              </figcaption>
            </figure>

            <figure className="w-full md:w-[48%] lg:w-[32%] relative mb-5">
              <img
                className="my-4 bg-darkGray rounded-[40px]"
                src="/homeImg/VR.jpg"
              />
              <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
                Technology
              </div>
              <figcaption className="">
                <h3 className="text-2xl pt-1">VR headset</h3>
                <p className="text-gray-500 py-3">
                  Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                  accusantium{" "}
                </p>
                <p className="text-xl pt-1">$49.99 USD</p>
              </figcaption>
            </figure>

            <figure className="w-full md:w-[48%] lg:w-[32%] relative mb-5">
              <img
                className="my-4 bg-darkGray rounded-[40px]"
                src="/homeImg/VR.jpg"
              />
              <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
                Technology
              </div>
              <figcaption className="">
                <h3 className="text-2xl pt-1">VR headset</h3>
                <p className="text-gray-500 py-3">
                  Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                  accusantium{" "}
                </p>
                <p className="text-xl pt-1">$49.99 USD</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
