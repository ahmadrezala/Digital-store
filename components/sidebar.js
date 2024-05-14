import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="w-[300px]">
      <div className="w-[300px] fixed top-0 left-0 bg-[#141a29] h-[100vh]">
        <div className="w-full h-[90px] flex items-center text-[18px] capitalize">
          <div className="w-full flex justify-between px-[30px]">
            <span className="flex items-center text-white font-bold">
              <i className="bi bi-columns-gap mr-[8px] text-[20px]"></i>
              <span>dark dasher</span>
            </span>
            <span className="text-white flex items-center">
              <i className="bi bi-list"></i>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-[20px] pb-[40px] border-b-[1px] text-white">
          <div className="w-[80px] h-[80px] mb-[12px]">
            <Image
              className="w-full h-full object-cover rounded-[50%]"
              src="/img/64cfd6f858e01996be5eaee6_man's-grey-and-black-shirt-Square.jpg"
              width={80}
              height={80}
              alt=""
            />
          </div>
          <h3 className="text-[20px] font-bold">John Doe</h3>
          <h6 className="text-[14px] text-[#d7d7d8]">Sales Manager</h6>
        </div>

        <div className="mt-[40px]">
          <Link href="/admin_panel/brands">
            <div className="px-[40px] h-[56px] flex items-center text-white capitalize font-bold cursor-pointer">
              <i className="bi bi-apple mr-4"></i>brand{" "}
            </div>
          </Link>
          <Link href="/admin_panel/products">
            <div className="px-[40px] h-[56px] flex items-center text-white capitalize font-bold cursor-pointer">
              <i className="bi bi-cart mr-4"></i>product{" "}
            </div>
          </Link>
          <Link href="/admin_panel/attributes">
            <div className="px-[40px] h-[56px] flex items-center text-white capitalize font-bold cursor-pointer">
              <i className="bi bi-card-text mr-4"></i>attribute{" "}
            </div>
          </Link>
          <Link href="/admin_panel/categories">
            <div className="px-[40px] h-[56px] flex items-center text-white capitalize font-bold cursor-pointer">
              <i className="bi bi-tags mr-4"></i>category{" "}
            </div>
          </Link>
          <Link href="/admin_panel/banners">
            <div className="px-[40px] h-[56px] flex items-center text-white capitalize font-bold cursor-pointer">
              <i className="bi bi-back mr-4"></i>banner{" "}
            </div>
          </Link>
          <Link href="/admin_panel/banners">
            <div className="px-[40px] h-[56px] flex items-center text-white capitalize font-bold cursor-pointer">
              <i className="bi bi-question-circle mr-4"></i>faq{" "}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
