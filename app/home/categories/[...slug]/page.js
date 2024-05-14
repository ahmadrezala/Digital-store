import Link from "next/link";

const getPosts = async (slug) => {
  const data = await fetch(
    `http://127.0.0.1:8000/api/categories-products/${slug}`,
    { cache: "no-store" }
  );

  if (data.ok) {
    const posts = await data.json();
    return posts;
  }
};

const Productcategory = async ({ params }) => {
  const products = await getPosts(params.slug);

  console.log(params.slug);

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
        className=" flex flex-wrap justify-center items-center mb-10 bg-white"
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

            <div className="w-full h-[1px] bg-gray-400 my-3"></div>
          </div>

          <div className="flex flex-wrap justify-between my-20">
            {products &&
              products.data.products.map((product) => {
                return (
                  <Link
                    className="w-full md:w-[48%] lg:w-[48%] my-8 mb-28"
                    href={`http://localhost:3000/home/products/${product.id}`}
                    id="0"
                  >
                    <figure className="w-full h-[100%]">
                      <img
                        className="rounded-[50px] h-full object-cover  mb-5 bg-darkGray "
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
    </>
  );
};

export default Productcategory;
