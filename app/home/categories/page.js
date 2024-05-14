// "use client";

import Link from "next/link";

const getCategories = async () => {
  // const data = await fetch('http://localhost:3001/posts', { cache: 'force-cache' })
  // const data = await fetch('http://127.0.0.1:8000/api/categories', { cache: 'no-store' })
  const data = await fetch("http://127.0.0.1:8000/api/categories", {
    next: { revalidate: 5 },
  });

  if (data.ok) {
    const categories = await data.json();
    return categories;
  } else {
    throw new Error(`Error, ${data.status}`);
  }
};

const Category = async () => {
  const categories = await getCategories();

  console.log(categories);

  return (
    <>
      <section className="w-full h-[80vh] bg-darkGray flex items-center justify-center relative">
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
        <div className="w-[90%] justify-between flex flex-wrap items-center my-10">
          {categories &&
            categories.data.categories.map((category) => {
              return (
                <div className="w-full md:w-[48%] bg-darkGray rounded-[50px] relative flex  my-4">
                  <div className=" ps-[7%] flex flex-wrap">
                    <div className=" w-[80%] translate-y-[80px]">
                      <h3 className="text-4xl lg:text-5xl">{category.name}</h3>
                      <p className="lg:text-xl text-gray-500  py-3 lg:py-5">
                        {category.description}
                      </p>

                      <div className="flex group flex-wrap relative  [width:fit-content] mb-5 overflow-hidden py-2">
                        <Link
                          className=" "
                          href={`categories/${category.slug}`}
                        >
                          Explore category
                          <i className="bi bi-arrow-right px-2"></i>
                        </Link>
                        <br />
                        <span className="w-full h-[1.5px] bg-gray-300  absolute bottom-0"></span>
                        <span className="w-full h-[1.5px] bg-gray-600  absolute bottom-0 duration-300 translate-x-[-200px] group-hover:translate-x-[0px]"></span>
                      </div>
                    </div>
                    <figure className=" flex justify-end">
                      <img
                        className="w-[80%] object-cover"
                        src={`http://localhost:8000/storage/image/categories/${category.image}`}
                      />
                    </figure>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Category;
