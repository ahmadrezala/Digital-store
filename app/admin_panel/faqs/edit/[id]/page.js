"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Faqedit = () => {
  const [fullname, setFullname] = useState("");
  const [subject, setSubject] = useState("");
  const [is_active, setIs_active] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [faq, setFaq] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState("");

  const params = useParams();
  // console.log(params.id)

  function handelSubmit(e) {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "created!",
          text: "Your file has been created.",
          icon: "success",
        });
        fetch(`http://127.0.0.1:8000/api/home/faqs/${faq.id}`, {
          method: "PUT",
          body: JSON.stringify({
            fullname: fullname,
            subject: subject,
            is_active: is_active,
            phone: phone,
            message: message,
            answer: answer,
            email: email,
            _method: "PUT",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err);
          });
        router.push("http://localhost:3000/admin_panel/faqs");
      }
    });

    // console.log(faqId)
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/home/faqs/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setFaq(data.data);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(faq);

  return (
    <div className="bg-black flex-col flex items-center">
      <div className="pt-[90px] w-[90%]">
        <h2 className="text-white text-[24px] font-bold capitalize">
          update faq
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
            handelSubmit(e);
          }}
        >
          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                fullname
              </label>
              <input
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                defaultValue={faq.fullname}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                email
              </label>
              <input
                defaultValue={faq.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                is_active
              </label>
              <input
                defaultValue={faq.is_active}
                onChange={(e) => {
                  setIs_active(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                phonenumber
              </label>
              <input
                defaultValue={faq.phonenumber}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between pt-[36px]">
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                subject
              </label>
              <input
                defaultValue={faq.subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
            <div className="w-[48%]">
              <label className="text-[#888]" htmlFor="">
                message
              </label>
              <input
                defaultValue={faq.message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="h-[48px] mt-[4px] w-full rounded-[30px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between pt-[36px]">
            <div className="w-[100%]">
              <label className="text-[#888]" htmlFor="">
                answer
              </label>
              <textarea
                defaultValue={faq.answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                rows={5}
                className="h-[100px] p-[10px] mt-[4px] w-full rounded-[30px]"
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

export default Faqedit;
