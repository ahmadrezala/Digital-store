"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import DropdownList from "react-widgets/DropdownList";
import { data } from "autoprefixer";
import { presets } from "react-widgets/esm/Filter";
import axios, { Axios } from "axios";

const Categoriescreate = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [brandpost, setBrandpost] = useState();
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [primeryimg, setPrimeryimg] = useState("");
  const [imgs, setimgs] = useState([]);
  const [categoryid, setCategoryid] = useState();
  const [valuevariation, setValuevariation] = useState([]);
  const [price, setPrice] = useState([]);
  const [productprice, setProductprice] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [sku, setSku] = useState([]);

  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const [attributecategory, setAttributeCategory] = useState([]);
  const [variationcatrgory, setVariationcategory] = useState([]);
  let [cz, setCz] = useState([]);

  const [attcategorypost, setAttcategorypost] = useState({});

  function handelImages(e) {
    let file = e.target.files;

    setimgs(file);
  }

  console.log(imgs);
  console.log(primeryimg);

  function handelsetAttcategorypost(e, id) {
    const value = e.target.value;

    const attid = id;

    setAttcategorypost({ ...attcategorypost, [attid]: value });

    console.log(attcategorypost);
  }

  function handelChange(value) {
    // console.log(value.id);
    setCategoryid(value.id);

    fetch(`http://127.0.0.1:8000/api/ctegory-attributes/${value.id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setAttributeCategory(data.data.attributes);
        setVariationcategory(data.data.variation);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
        setLoading(false);
      });
  }

  let arrcz = [];
  function plusinput() {
    arrcz = [];

    arrcz.push("a");

    setCz((oldArray) => [...cz, arrcz]);
  }

  function minusinput() {
    setCz([]);
  }

  let val = [];

  function handelValuevariation(e, i) {
    const value = e.target.value;

    const index = i;

    setValuevariation({ ...valuevariation, [index]: value });

    console.log(valuevariation);
  }

  function handelPrice(e, i) {
    const value = e.target.value;

    const index = i;

    setPrice({ ...price, [index]: value });

    console.log(price);
  }

  function handelQuantity(e, i) {
    const value = e.target.value;

    const index = i;

    setQuantity({ ...quantity, [index]: value });

    console.log(quantity);
  }

  function handelSku(e, i) {
    const value = e.target.value;

    const index = i;

    setSku({ ...sku, [index]: value });

    console.log(sku);
  }

  useEffect(() => {
    //    const getattributes = []
    //    const getattributesid =[]

    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.categoryall);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    fetch("http://127.0.0.1:8000/api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data.data.brandall);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  async function products(e) {
    e.preventDefault();

    const fData = new FormData();
    fData.append("primery_image", primeryimg);

    for (let i = 0; i < imgs.length; i++) {
      fData.append(`images[${i}]`, imgs[i]);
    }
    fData.append("name", name);
    fData.append("status", status);
    fData.append("slug", slug);
    fData.append("description", description);
    fData.append("product_price", productprice);
    fData.append("brand_id", brandpost);
    fData.append("category_id", categoryid);

    for (const att in attcategorypost) {
      fData.append(`attribute_id[${att}]`, attcategorypost[att]);
    }

    for (const att in valuevariation) {
      fData.append(`value_variation[${att}]`, valuevariation[att]);
    }

    for (const att in price) {
      fData.append(`price_variation[${att}]`, price[att]);
    }

    for (const att in quantity) {
      fData.append(`quantity_variation[${att}]`, quantity[att]);
    }

    for (const att in sku) {
      fData.append(`sku_variation[${att}]`, sku[att]);
    }

    console.log(fData);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "created!",
          text: "Your file has been created.",
          icon: "success",
        });

        axios
          .post("http://127.0.0.1:8000/api/products", fData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        router.push("http://localhost:3000/admin_panel/categories");
      }
    });
  }

  return (
    <div className="bg-black flex-col flex items-center h-auto">
      <div className="pt-[90px] w-[90%]">
        <h2 className="text-white text-[24px] font-bold capitalize">
          create categories
        </h2>
        <p className="text-[#888] w-[80%] text-[16px] mt-[7.5px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      <div className="w-[70%] bg-[#141a29] mt-[60px] p-[36px] rounded-[1.5rem]">
        <h3 className="text-white pb-[20px] text-[22px] font-bold">
          User Account
        </h3>
        <div className="pt-[30px] flex justify-between mb-[36px] border-t-2">
          <div className="flex items-center">
            <Image
              className="w-[80px] h-[80px] rounded-[50%]"
              src="/img/64ccf14b517838cac9de13b5_closeup-photography-of-woman-smiling-Square.jpg"
              width={80}
              height={80}
              alt=""
            />
            <div className="ml-[12px]">
              <h3 className="text-white text-[20px] font-semibold">
                Michelle Davis
              </h3>
              <h6 className="text-white text-[14px]">
                Profile Picture 360 x 360
              </h6>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href=""
              className="rounded-[100px] text-[12px] text-white border p-[12px]"
            >
              upload new
            </a>
          </div>
        </div>

        <div className="pt-[36px] border-t-2">
          <h3 className="text-white text-[20px] font-semibold">
            Personal Details
          </h3>
          <p className="text-[#888] mt-[7.5px]">
            Cras vel sem sit amet metus pretium pretium posuere vitae ligula.
          </p>
        </div>

        <form
          encType="multipart/form-data"
          action=""
          onSubmit={(e) => {
            products(e);
          }}
        >
          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                brands
              </label>
              <DropdownList
                className="mt-[4px] rounded-3xl"
                data={brands}
                //  value={attributesid}

                dataKey="id"
                textField="name"
                onChange={(e) => {
                  setBrandpost(e.id);
                }}
              />
              ;
            </div>
          </div>

          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                status
              </label>
              <input
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                slug
              </label>
              <input
                onChange={(e) => {
                  setSlug(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex pt-[36px]">
            <div className="w-[100%]">
              <label className="text-[#888]" htmlFor="">
                description
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                name=""
                id=""
                className="h-[100px] p-[10px] mt-[4px] w-full rounded-[30px]"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label
                className="block mb-2 text-sm font-medium text-white dark:text-white"
                htmlFor="file_input"
              >
                primery image
              </label>
              <input
                onChange={(e) => {
                  setPrimeryimg(e.target.files[0]);
                }}
                className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>

            <div className="w-[48%]">
              <label
                className="block mb-2 text-sm font-medium text-white dark:text-white"
                htmlFor="file_input"
              >
                images
              </label>
              <input
                onChange={(e) => {
                  handelImages(e);
                }}
                multiple
                className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
          </div>

          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                categories
              </label>
              <DropdownList
                className="mt-[4px] rounded-3xl"
                data={categories}
                //  value={attributesid}

                dataKey="id"
                textField="name"
                onChange={(value) => {
                  handelChange(value);
                }}
              />
              ;
            </div>

            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                product price
              </label>
              <input
                onChange={(e) => {
                  setProductprice(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between pt-[10px] border-t-[1px] mt-[36px]">
            {attributecategory &&
              attributecategory.map((val) => {
                return (
                  <div key={val.id} className="w-[48%] mt-[36px]">
                    <label className="text-[#888]" htmlFor="">
                      {val.name}
                    </label>
                    <input
                      onChange={(e) => {
                        handelsetAttcategorypost(e, val.id);
                      }}
                      className="h-[48px] mt-[4px] w-full rounded-[30px]"
                      type="text"
                    />
                  </div>
                );
              })}
          </div>

          <div className="text-[#888] mt-[36px] text-[20px]">
            {variationcatrgory ? variationcatrgory.name + " :" : ""}
          </div>

          <div className="flex flex-wrap justify-between pt-[10px] border-t-[1px] mt-[36px]">
            <div className="w-[100%] mt-[36px]">
              <i
                onClick={() => {
                  plusinput();
                }}
                className="bi bi-plus-lg text-white cursor-pointer"
              ></i>
              <i
                onClick={() => {
                  minusinput();
                }}
                className="bi bi-dash-lg text-white ml-3 cursor-pointer"
              ></i>
            </div>

            {cz &&
              cz.map((val, index) => {
                return (
                  <>
                    <div key={val.id} className="w-[48%] mt-[36px]">
                      <label className="text-[#888]" htmlFor="">
                        value
                      </label>
                      <input
                        onChange={(e) => {
                          handelValuevariation(e, index);
                        }}
                        className="h-[48px] mt-[4px] w-full rounded-[30px]"
                        type="text"
                      />
                    </div>
                    <div key={val.id} className="w-[48%] mt-[36px]">
                      <label className="text-[#888]" htmlFor="">
                        price
                      </label>
                      <input
                        onChange={(e) => {
                          handelPrice(e, index);
                        }}
                        className="h-[48px] mt-[4px] w-full rounded-[30px]"
                        type="text"
                      />
                    </div>
                    <div key={val.id} className="w-[48%] mt-[36px]">
                      <label className="text-[#888]" htmlFor="">
                        {" "}
                        quantity
                      </label>
                      <input
                        onChange={(e) => {
                          handelQuantity(e, index);
                        }}
                        className="h-[48px] mt-[4px] w-full rounded-[30px]"
                        type="text"
                      />
                    </div>
                    <div key={val.id} className="w-[48%] mt-[36px]">
                      <label className="text-[#888]" htmlFor="">
                        sku
                      </label>
                      <input
                        onChange={(e) => {
                          handelSku(e, index);
                        }}
                        className="h-[48px] mt-[4px] w-full rounded-[30px]"
                        type="text"
                      />
                    </div>
                  </>
                );
              })}
          </div>

          <div className="flex justify-between pt-[40px]">
            <div className="w-[48%]">
              <button
                className="bg-[#2c2c2c] rounded-[100px] text-white px-[30px] py-[18px]"
                type="submit"
              >
                save change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Categoriescreate;
