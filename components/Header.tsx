import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4  text-shadow-lg md:flex">
          <li className="hederlink">Home</li>
          <li className="hederlink">Tv Shows</li>
          <li className="hederlink">Movies</li>
          <li className="hederlink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-5">
        <SearchIcon className=" hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 " />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
