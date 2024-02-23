"use client";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import Avatar from "./Avatar";
import Logo from "@/assets/Logo";
import Link from "./Link";

function Navbar() {
  const URL = "https://reqres.in/api/users/2";

  const { data, loading, error } = useFetch(URL);

  return (
    <>
      <nav className="flex flex-row justify-between items-center mt-6 px-[100px]">
        <ul className="flex flex-row justify-center items-center gap-4 text-black/80 text-xl font-medium">
          <li className="mr-10 items-center">
            <a href="#">
              <Logo />
            </a>
          </li>
          <li>
            <Link
              title="Collections"
              url="#"
            />
          </li>
          <li>
            <Link
              title="Men"
              url="#"
            />
          </li>
          <li>
            <Link
              title="Women"
              url="#"
            />
          </li>
          <li>
            <Link
              title="About"
              url="#"
            />
          </li>
          <li>
            <Link
              title="Contact"
              url="#"
            />
          </li>
        </ul>
        <ul className="flex flex-row justify-center items-center gap-8">
          <li className="hover:scale-105 transition hover:cursor-pointer">
            <Image
              src={"/icon-cart.svg"}
              width={30}
              height={30}
              alt="carrito"
            />
          </li>
          <li className="items-center">
            <Avatar
              data={data}
              loading={loading}
              error={error}
            />
          </li>
        </ul>
      </nav>
      <hr className="border-slate-400 mt-10 mb-10 w-5/6 mx-auto" />
    </>
  );
}

export default Navbar;
