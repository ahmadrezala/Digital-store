"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoding] = useState("");

  const router = useRouter();
  const handelFetch = async () => {
    //    console.log('ss');
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        c_password: c_password,
      }),
    });
    const data = await res.json();

    if (res.ok) {
      setLoding(false);
      router.push("/");
    } else {
      setLoding(false);
    }
  };

  return (
    <section className=" w-full flex justify-center pt-[112px] pb-[152px]">
      <div className="py-[90px] rounded-[56px] flex px-[54px] flex-col items-center  justify-center w-[610px] bg-[#f0f0f0]">
        <img
          className="w-[64px] h-[84px] flex mb-[32px]"
          src="/homeImg/63163f5f14a36787a684d266_password-protected-icon-shopper-webflow-ecommerce-template.svg"
          alt=""
        />
        <h1 className="text-[50px] mb-[32px]">Sign Up</h1>
        <div className="w-[100%] mb-[24px]">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
          />
        </div>
        <div className="w-[100%] mb-[24px]">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email address"
            className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
          />
        </div>
        <div className="w-[100%] mb-[24px]">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Password"
            className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
          />
        </div>
        <div className="w-[100%] mb-[24px]">
          <input
            onChange={(e) => {
              setC_password(e.target.value);
            }}
            type="text"
            placeholder="C_password"
            className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
          />
        </div>

        <button
          onClick={() => {
            handelFetch();
          }}
          className="my-5 lg:my-2 xl:my-3 py-[20px] md:px-[82px] w-full text-xl bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.05)] duration-500 border-[1px] border-black"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Login;
