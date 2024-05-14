"use client";

import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [faqs, setFaqs] = useState([]);

  const router = useRouter();

  const drop = useRef(null);

  async function handelClick(e) {
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
          title: "success!",
          text: "Your message has been sent.",
          icon: "success",
        });
        async function create() {
          const response = await fetch("http://127.0.0.1:8000/api/home/faqs", {
            method: "POST",
            body: JSON.stringify({
              fullname: fullname,
              subject: subject,
              phone: phone,
              email: email,
              message: message,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          const data = await response.json();
        }

        create();
        //   router.push('http://localhost:3000/admin_panel/brands')
      }
    });
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/home/faqs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setFaqs(data.data.faqs);

        setCount(data.data.meta.total);
        setCountpage(data.data.meta.last_page);

        console.log(faqs);
      })
      .catch((err) => {});
  }, []);

  function handelDrop(e) {
    console.log(e.target.children[2]);
    e.target.children[2].classList.toggle("hidden");
  }

  return (
    <main className="w-full  mt-[110px] flex flex-wrap  justify-center">
      <section className="flex justify-between w-[85%]">
        <div className="w-[48%]">
          <h1 className="text-[68px] mb-[24px] capitalize">
            Send us a <br /> message
          </h1>

          <p className="text-[20px] text-[#898989] mb-[64px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
            dolorol egestas morbi sem vulputate etiam facilisis pellentesque ut
            quis.
          </p>

          <h2 className="text-[28px] mb-[24px]">Visit us our showrooms</h2>

          <div className=" mb-[24px] text-[20px]" href="categories/Computers">
            Los Angeles, CA<i className="bi bi-arrow-right px-2"></i>
          </div>
          <div className="mb-[24px] text-[20px]" href="categories/Computers">
            New York, NY<i className="bi bi-arrow-right px-2"></i>
          </div>
        </div>

        <div className="w-[50%] min-h-[614px]">
          <div className="px-[48px] py-[100px] flex flex-wrap bg-[#f0f0f0] rounded-[40px]">
            <div className="w-[50%] mb-[24px]">
              <input
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                type="text"
                placeholder="Full name"
                className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
              />
            </div>
            <div className="w-[50%] mb-[24px]">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email address"
                className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
              />
            </div>
            <div className="w-[50%] mb-[24px]">
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Phone number"
                className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
              />
            </div>
            <div className="w-[50%] mb-[24px]">
              <input
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                type="text"
                placeholder="Subject"
                className="bg-[#f0f0f0] w-[85%] border-b-[1px] border-b-[#ccc] pb-[32px]"
              />
            </div>
            <div className="w-[100%] mb-[40px]">
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name=""
                id=""
                placeholder="message"
                className="w-full  border-b-[1px] border-b-[#ccc] bg-[#f0f0f0]"
                cols="30"
                rows="2"
              ></textarea>
            </div>
            <div className="w-full flex justify-between items-center ">
              <button
                onClick={(e) => {
                  handelClick(e);
                }}
                class="me-5 py-[20px] px-[32px] bg-black text-white rounded-full hover:text-black hover:bg-white hover:[transform:scale(1.1)] duration-500 border-[1px] border-black capitalize"
              >
                Send message
              </button>
              <div className="w-[35%] flex justify-evenly">
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[85%] flex justify-between mb-[80px] mt-[124px]">
        <div className="w-[30%] bg-[#f0f0f0]  flex justify-center items-center flex-col rounded-[40px] py-[80px] px-[32px]">
          <a className="flex flex-col items-center">
            <img
              className="mb-[48px]"
              src="/homeImg/630f792965fd9e21b902e7f9_chat-card-link-icon-shopper-webflow-ecommerce-template.svg"
              alt=""
            />
            <h2 className="mb-[10px] text-center text-[30px]">
              Send us an email
            </h2>
            <p className="mb-[32px] text-center text-[#5b5b5b]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              dolorol egestas morbi sem vulputate etiam.
            </p>
            <div className="text-[21px]">support@commerce.com</div>
          </a>
        </div>
        <div className="w-[30%] bg-[#f0f0f0]  flex justify-center items-center flex-col rounded-[40px] py-[80px] px-[32px]">
          <a className="flex flex-col items-center">
            <img
              className="mb-[48px]"
              src="/homeImg/630f792a9fdc65689d4407b9_phone-card-link-icon-shopper-webflow-ecommerce-template.svg"
              alt=""
            />
            <h2 className="mb-[10px] text-center text-[30px]">
              Send us an email
            </h2>
            <p className="mb-[32px] text-center text-[#5b5b5b]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              dolorol egestas morbi sem vulputate etiam.
            </p>
            <div className="text-[21px]">support@commerce.com</div>
          </a>
        </div>
        <div className="w-[30%] bg-[#f0f0f0]  flex justify-center items-center flex-col rounded-[40px] py-[80px] px-[32px]">
          <a className="flex flex-col items-center">
            <img
              className="mb-[48px]"
              src="/homeImg/630f792965fd9e21b902e7f9_chat-card-link-icon-shopper-webflow-ecommerce-template.svg"
              alt=""
            />
            <h2 className="mb-[10px] text-center text-[30px]">
              Send us an email
            </h2>
            <p className="mb-[32px] text-center text-[#5b5b5b]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              dolorol egestas morbi sem vulputate etiam.
            </p>
            <div className="text-[21px]">support@commerce.com</div>
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-center w-[85%] pt-[80px] border-t-[2px] mb-[160px]">
        <div className="flex flex-col items-center mb-[56px]">
          <h2 className="text-[55px] mb-[16px]">Frequently Asked Questions</h2>
          <p className="w-[80%] text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod
            facilisis integer nulla tempor incididunt ut labore
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq) => {
            return (
              <div
                className="py-[44px] px-[64px] border-[1px] rounded-[30px] flex flex-wrap justify-between"
                onClick={(e) => {
                  handelDrop(e);
                }}
              >
                <h3 className="text-[24px]">{faq.message}</h3>
                <div>
                  <i className="bi bi-plus text-[32px]"></i>
                </div>
                <p className="w-full mt-[8px] hidden">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Contact;
