const About = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-[120px] mb-[72px]">
        <h1 className="w-[50%] text-center text-[50px] mb-[16px] capitalize">
          About our products
        </h1>
        <p className="w-[50%] text-center text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit montes id odio
          feugiat dignissim aliquet quam viverra nulla sed mauris tortor tempor
          elit sapien egestas curabitur non dictum feugiat.
        </p>
      </section>

      <section className="flex justify-between relative">
        <div className="w-[14%] mr-[18px]">
          <img
            className="mb-[18px] rounded-[40px]"
            src="/homeImg/about/630e8904cd34edcefd4140ee_power-bank-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
          <img
            className="rounded-[40px]"
            src="/homeImg/about/630e8904c7afbc0b09bda492_tablet-keyboard-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
        </div>
        <div className="w-[14%] mr-[18px] mt-[80px]">
          <img
            className="mb-[18px] rounded-[40px]"
            src="/homeImg/about/630e890440b482bfc9616325_airpods-case-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
          <img
            className="rounded-[40px]"
            src="/homeImg/about/630e8904dcd2d77484564fc5_drone-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
        </div>
        <div className="w-[14%] mr-[18px]">
          <img
            className="mb-[18px] rounded-[40px]"
            src="/homeImg/about/630e890526a4091e9841e137_wireless-mouse-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
          <img
            className="rounded-[40px]"
            src="/homeImg/about/630e8904c7afbc0b09bda492_tablet-keyboard-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
        </div>
        <div className="w-[14%] mr-[18px] mt-[80px]">
          <img
            className="mb-[18px] rounded-[40px]"
            src="/homeImg/about/630e8be53a62608d2da6e669_headphones-2-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
          <img
            className="rounded-[40px]"
            src="/homeImg/about/630e89051791dd8643258a1a_earphones-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
        </div>
        <div className="w-[14%] mr-[18px]">
          <img
            className="mb-[18px] rounded-[40px]"
            src="/homeImg/about/630e8905d2ae2963dcfe3b9e_water-bottle-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
          <img
            className="rounded-[40px]"
            src="/homeImg/about/630e8905455170097a097499_smart-speaker-product-image-large-shopper-webflow-ecommerce-template (1).jpg"
            alt=""
          />
        </div>
        <div className="w-[14%] mt-[80px]">
          <img
            className="mb-[18px] rounded-[40px]"
            src="/homeImg/about/630e8be53a62608d2da6e669_headphones-2-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
          <img
            className="rounded-[40px]"
            src="/homeImg/about/630e8904c7afbc0b09bda492_tablet-keyboard-product-image-large-shopper-webflow-ecommerce-template.jpg"
            alt=""
          />
        </div>

        <div className="absolute bottom-0 w-full h-[60%] left-0 bg-gradient-to-t from-[rgb(255,255,255)]"></div>
      </section>

      <section className="flex w-full pt-[68px] pb-[160px]">
        <div className="flex w-full px-24 justify-between">
          <div className="flex flex-col items-center">
            <span className="text-[68px]">2010</span>
            <span className="text-[20px]">Year founded</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[68px]">+50</span>
            <span className="text-[20px]">Collections</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[68px]">70K</span>
            <span className="text-[20px]">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[68px]">+250</span>
            <span className="text-[20px]">Products</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[68px]">+25</span>
            <span className="text-[20px]">Team members</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
