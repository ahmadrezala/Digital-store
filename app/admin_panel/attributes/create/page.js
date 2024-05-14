"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Attributecreate = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  async function createattribute(e) {
    e.preventDefault();

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
        async function create() {
          const response = await fetch("http://127.0.0.1:8000/api/attributes", {
            method: "POST",
            body: JSON.stringify({
              name: name,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          const data = await response.json();
        }

        create();
        router.push("http://localhost:3000/admin_panel/attributes");
      }
    });
  }

  return (
    <div className="bg-black flex-col flex items-center">
      <div className="pt-[90px] w-[90%]">
        <h2 className="text-white text-[24px] font-bold capitalize">
          create attribute
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
            createattribute(e);
          }}
        >
          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" for="">
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

export default Attributecreate;
