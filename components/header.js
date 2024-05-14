"use client";

const Header = () => {
  const logout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };

  return (
    <div className=" h-[90px] bg-[#141a29] flex items-center justify-between pl-[30px] pr-[60px]">
      <form
        className="border-collapse  flex w-[360px] h-[36px] relative "
        action=""
      >
        <i className="bi bi-search text-white text-[14px] absolute top-[14%] left-[3%]"></i>
        <input
          className="bg-[#2c2c2c] w-full h-[100%] rounded-[.5rem]"
          type="text"
        />
      </form>

      <ul className="flex">
        <li>
          <a href="">
            <i className="bi bi-bell text-white"></i>
          </a>
        </li>
        <li>
          <a className="px-[15px]" href="">
            <i className="bi bi-cart4 text-white"></i>
          </a>
        </li>
        <li>
          <a className="px-[15px]" href="">
            <i className="bi bi-gear text-white"></i>
          </a>
        </li>
        <li>
          <div
            className="text-white capitalize cursor-pointer"
            onClick={() => {
              logout();
            }}
            href=""
          >
            log out
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
