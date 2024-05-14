"use client";

import Swal from "sweetalert2";

const Branddelete = ({ id }) => {
  const handleDelete = (e) => {
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
        fetch("/api/branddelete", {
          method: "POST",
          body: JSON.stringify({
            id: id,
          }),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <>
      <i
        className="bi bi-trash3 text-red-800 ml-[6px] cursor-pointer"
        onClick={(e) => {
          handleDelete(e);
        }}
      ></i>
    </>
  );
};

export default Branddelete;
