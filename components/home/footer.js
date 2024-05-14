const Footer = () => {
  return (
    <footer className="bg-black rounded-t-[60px] p-6 pt-16 lg:p-24  text-white">
      <div>
        <h3 className="text-4xl">Commerce X</h3>
        <p className="py-3 text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
          excepturi et porro illum eos?
        </p>
        <div className="flex justify-between w-[160px] text-[18px]">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <div className="w-full h-[1px] bg-gray-500 my-5"></div>
      </div>

      <div>
        <h3 className="text-xl w-full my-5">CONTACT US</h3>
        <div className="md:flex">
          <div className="flex items-start md:w-[50%]">
            <i className="bi bi-envelope text-3xl me-3 text-gray-300"></i>
            <div className="pt-[4px]">
              <p className="text-lg">Email</p>
              <p className="text-gray-500">contact@Commerce.com</p>
            </div>
          </div>
          <div className="flex items-start md:w-[50%] ">
            <i className="bi bi-phone text-3xl translate-x-[-4px] me-3 text-gray-300"></i>
            <div className="">
              <p className="text-lg">Phone</p>
              <p className="text-gray-500">(414) 687 - 5892</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl w-full my-10">PRODUCT</h3>
        <div className=" flex flex-wrap justify-evenly ">
          <div className="flex justify-center items-center w-[50%] md:w-[32%] mb-5">
            <img
              className="bg-white rounded-[20px] w-[90px] h-[90px] me-4"
              src="/homeImg/backPack.jpg"
              alt=""
            />
            <div className="pt-[4px]">
              <p className="text-lg">Backpack</p>
              <p className="text-gray-500">$ 39.99 USD</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[50%] md:w-[32%] mb-5">
            <img
              className="bg-white rounded-[20px] w-[90px] h-[90px] me-4"
              src="/homeImg/backPack.jpg"
              alt=""
            />
            <div className="pt-[4px]">
              <p className="text-lg">Backpack</p>
              <p className="text-gray-500">$ 39.99 USD</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[50%] md:w-[32%]  mb-5">
            <img
              className="bg-white rounded-[20px] w-[90px] h-[90px] me-4"
              src="/homeImg/backPack.jpg"
              alt=""
            />
            <div className="pt-[4px]">
              <p className="text-lg">Backpack</p>
              <p className="text-gray-500">$ 39.99 USD</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[50%] md:w-[32%] mb-5">
            <img
              className="bg-white rounded-[20px] w-[90px] h-[90px] me-4"
              src="/homeImg/backPack.jpg"
              alt=""
            />
            <div className="pt-[4px]">
              <p className="text-lg">Backpack</p>
              <p className="text-gray-500">$ 39.99 USD</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[50%] md:w-[32%] mb-5">
            <img
              className="bg-white rounded-[20px] w-[90px] h-[90px] me-4"
              src="/homeImg/backPack.jpg"
              alt=""
            />
            <div className="pt-[4px]">
              <p className="text-lg">Backpack</p>
              <p className="text-gray-500">$ 39.99 USD</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[50%] md:w-[32%] mb-5">
            <img
              className="bg-white rounded-[20px] w-[90px] h-[90px] me-4"
              src="/homeImg/backPack.jpg"
              alt=""
            />
            <div className="pt-[4px]">
              <p className="text-lg">Backpack</p>
              <p className="text-gray-500">$ 39.99 USD</p>
            </div>
          </div>
        </div>
      </div>

      {/* <nav>
        
             
              <ul className="">
                <li className="flex justify-between text-gray-500 w-[60%] mt-10">
                  <ul>
                    <li className="list-none text-xl text-white"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                  </ul>

                  <ul>
                    <li className="list-none text-xl text-white"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                  </ul>

                  <ul>
                    <li className="list-none text-xl text-white"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                    <li className="list-none"><a href="">Home1</a></li>
                  </ul>

                </li>
              </ul>
            
        </nav>  */}
    </footer>
  );
};

export default Footer;
