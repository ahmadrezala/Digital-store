const Home = () => {
  return (
    <>
      <section
        id="HeadTop "
        className=" flex flex-wrap items-center bg-white justify-center mb-20"
      >
        <div className="w-full flex flex-wrap bg-darkGray">
          <div className="w-full lg:w-[50%] py-20 px-[4vw] flex flex-wrap justify-center items-center lg:translate-y-[-40px]">
            <div className="">
              <h1 className="text-[6vw] lg:text-[4vw]">
                High-quality tech gadgets & accessories
              </h1>
              <p className="text-gray-500 py-4">
                Sem sit amet adipiscing ullamcorper adipiscing adipiscing dole
                convallis tincidunt senectus enim blandit elit egestas.
              </p>
              <div className="flex flex-wrap mt-3">
                <button className="me-5 py-[20px] px-[32px] bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
                  Browse products
                </button>
                <button className="py-[20px] px-[32px] bg-white text-black rounded-full hover:text-white hover:bg-black  hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
                  About us
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] ">
            {/* <div className="w-full h-full bg-headerPhone object-cover"></div>  */}
            <img src="homeImg/phone1080.jpg" />
          </div>
        </div>

        <div className="flex flex-wrap w-[90%] bg-[#0e0e0e] text-white rounded-[50px] overflow-hidden my-20">
          <div className="w-full md:w-[50%] p-12 md:pt-[7vw] md:ps-[7vw]  ">
            <h3 className="text-3xl">Why are we different?</h3>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit arcu mollis
              tortor velit facilisis diam vel posuere ullamcorper.
            </p>
            <button className="py-[17px] px-[40px] bg-white text-black rounded-full hover:text-white hover:bg-black  hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
              About us
            </button>
          </div>
          <div className="w-full md:w-[50%] flex items-end">
            <img
              className="object-cover"
              src="homeImg/charger.jpg"
              alt="charger"
            />
          </div>
        </div>
      </section>

      <section id="Featured" className="overflow-hidden relative my-20">
        <div className="flex flex-wrap justify-center">
          <div className="w-[90%] flex flex-wrap items-center justify-between my-5">
            <p className="w-full md:w-[50%] text-4xl flex justify-start ">
              Featured Products
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

        <div className="absolute z-[100] top-[50%] translate-y-[-50%] right-10 lg:right-20  w-[70px] h-[70px] bg-[#ffffffb8] hover:[transform:translateY(-50%)scale(1.2)] hover:bg-white duration-300 rounded-full flex justify-center items-center">
          <img className="" src="homeImg/right-arrow32px.png" />
        </div>

        <div className="absolute z-[100] top-[50%] translate-y-[-50%] left-10 lg:left-20  w-[70px] h-[70px] bg-[#ffffffb8] hover:[transform:translateY(-50%)scale(1.2)] hover:bg-white  duration-300 rounded-full flex justify-center items-center">
          <img
            className=" rotate-[-180deg]"
            src="homeImg/right-arrow32px.png"
          />
        </div>
        <div className="w-[3900px] flex justify-evenly  lg:ps-14 ">
          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>

          <figure className="w-[320px] relative">
            <img
              className="w-[320px] h-[300px] my-4 bg-darkGray rounded-[40px]"
              src="homeImg/VR.jpg"
            />
            <div className="py-3 px-5 bg-white rounded-[40px] absolute top-8 left-5 shadow-2xl">
              Technology
            </div>
            <figcaption className="">
              <h3 className="text-2xl">VR headset</h3>
              <p className="text-gray-500 py-1">
                Lorem ipsum dolor sit amet consecte Aliquam necessitatibus
                accusantium{" "}
              </p>
              <p className="text-xl">$49.99 USD</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="articles" className="flex lg:flex-wrap justify-center ">
        <div className="w-[90%]">
          <div className="flex flex-wrap justify-between my-16">
            <p className="text-4xl w-full lg:[width:fit-content]">
              Our articles and news
            </p>
            <button className="mt-5 lg:mt-0 py-[20px] px-[32px] bg-white text-black rounded-full hover:text-white hover:bg-black hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
              Browse all articles
            </button>
          </div>

          <div className="flex flex-wrap justify-between ">
            <article className="w-full md:w-[48%]">
              <img className="rounded-[50px]" src="homeImg/lapTop.jpg" />
              <h3 className="text-3xl lg:text-4xl mt-6">
                How to create the perfect work from home setup
              </h3>
              <p className="text-gray-500 my-6 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat expedita qui atque ea iste aperiam non numquam ipsa amet
                obcaecati.
              </p>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="flex justify-between my-6">
                <button className="py-[10px] px-[26px] bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
                  Ideas
                </button>
                <p className="text-gray-500 text-lg">August 31, 2022</p>
              </div>
            </article>
            <article className="w-full md:w-[48%]">
              <img className="rounded-[50px]" src="homeImg/lapTop.jpg" />
              <h3 className="text-3xl lg:text-4xl mt-6">
                How to create the perfect work from home setup
              </h3>
              <p className="text-gray-500 my-6 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat expedita qui atque ea iste aperiam non numquam ipsa amet
                obcaecati.
              </p>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="flex justify-between my-6">
                <button className="py-[10px] px-[26px] bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.1)] duration-500 border-[1px] border-black">
                  Ideas
                </button>
                <p className="text-gray-500 text-lg">August 31, 2022</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="flex lg:flex-wrap justify-center mb-32 "
      >
        <div className="w-[90%]">
          <div className="w-full h-[1px] bg-gray-300 my-32"></div>

          <div className=" w-full  flex justify-between items-start  ">
            <figure className="w-[32%] flex flex-wrap justify-center items-center text-center">
              <img
                className="bg-darkGray mx-3 rounded-[20px] mb-1"
                src="homeImg/car.svg"
                alt=""
              />
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">Free Shopping</h3>
                <p className="text-gray-500 text-[14px]">Over $29.00 USD</p>
              </figcaption>
            </figure>

            <figure className="w-[32%] flex flex-wrap justify-center items-center text-center">
              <img
                className="bg-darkGray mx-3 rounded-[20px] mb-1"
                src="homeImg/card.svg"
                alt=""
              />
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">Secure Payments</h3>
                <p className="text-gray-500 text-[14px]">
                  With credit and debit card
                </p>
              </figcaption>
            </figure>

            <figure className="w-[32%] flex flex-wrap justify-center items-center text-center">
              <div className="w-[86px] h-[86px] bg-darkGray mx-3 rounded-[20px] flex justify-center items-center">
                <img
                  className=" mb-1   w-[55px] h-[55px]"
                  src="homeImg/verify.svg"
                  alt=""
                />
              </div>
              <figcaption className="w-full text-center lg:[width:fit-content]">
                <h3 className="text-lg py-1">30 days guarantee</h3>
                <p className="text-gray-500 text-[14px]">No question asked</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
