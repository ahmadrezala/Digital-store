"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Multiselect from "react-widgets/Multiselect";
import DropdownList from "react-widgets/DropdownList";

import axios from "axios";

const Categoriescreate = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [is_active, setIs_active] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [attributes, setAttributes] = useState([]);
  const [image, setImage] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [isfilter, setIsfilter] = useState([]);

  const [attpost, setAttpost] = useState([]);
  const [attfilterpost, setFilterpost] = useState([]);
  const [attvaritionpost, setVaritionpost] = useState([]);

  let ids = [];

  function handelChange(values) {
    // console.log(value);
    ids = [];

    let getattfilter = [];

    values.map((value) => {
      ids.push(value.id);
    });

    attributes.map((att) => {
      ids.map((id) => {
        // console.log(att.id)
        if (att.id == id) {
          getattfilter.push(att);
        }
      });
    });

    setAttpost(ids);
    setIsfilter(getattfilter);

    console.log(attpost);

    // (id)=>{id.map((i)=>{ids.push(i.id)}); console.log(ids)}
  }

  function handelChangefilter(values) {
    ids = [];

    values.map((value) => {
      ids.push(value.id);
    });
    setFilterpost(ids);
  }

  function handelChangevarition(value) {
    setVaritionpost(value.id);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/attributes")
      .then((res) => res.json())
      .then((data) => {
        setAttributes(data.data.attributeall);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  async function createcategories(e) {
    e.preventDefault();

    const fData = new FormData();

    fData.append("name", name);

    fData.append("slug", slug);
    fData.append("description", description);
    fData.append("is_active", is_active);

    fData.append("image", image);

    for (const att in attpost) {
      fData.append(`attribute_id[${att}]`, attpost[att]);
    }

    fData.append(`is_variation`, attvaritionpost);

    for (const att in attfilterpost) {
      fData.append(`is_filter[${att}]`, attfilterpost[att]);
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
          .post("http://127.0.0.1:8000/api/categories", fData)
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

  // console.log(ids)

  return (
    <div className="bg-black flex-col flex items-center h-[200vh]">
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
          action=""
          onSubmit={(e) => {
            createcategories(e);
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
                  setImage(e.target.files[0]);
                }}
                className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                is_active
              </label>
              <input
                onChange={(e) => {
                  setIs_active(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-between pt-[36px]">
            <div className="w-[100%]">
              <label className="text-[#888]" htmlFor="">
                description
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="h-[100px] p-[10px] mt-[4px] w-full rounded-[30px]"
                type="text"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                attributes
              </label>
              <Multiselect
                className="mt-[4px] rounded-3xl"
                data={attributes}
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
                attribute-filter
              </label>
              <Multiselect
                className="mt-[4px] rounded-3xl"
                data={isfilter}
                //  value={attributesid}

                dataKey="id"
                textField="name"
                onChange={(id) => {
                  handelChangefilter(id);
                }}
              />
              ;
            </div>
          </div>
          <div className="flex justify-between pt-[10px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                attribute-varition
              </label>
              <DropdownList
                className="mt-[4px] rounded-3xl"
                data={isfilter}
                //  value={attributesid}

                dataKey="id"
                textField="name"
                onChange={(e) => {
                  handelChangevarition(e);
                }}
              />
              ;
            </div>
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
