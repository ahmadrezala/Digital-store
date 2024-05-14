"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoding] = useState("");

  const handelFetch = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    if (res.ok) {
      setLoding(false);
      router.push("/");
    } else {
      setError(handleError(data.message));
      setError(null);
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
        <h1 className="text-[50px] mb-[32px]">Login</h1>
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
