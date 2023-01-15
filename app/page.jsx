"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Image from "next/image";
import Spacer from "./components/spacer";
import UserFooter from "./components/UserFooter";
import MobileBar from "./components/MobileBar";
import DesktopBar from "./components/DesktopBar";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const btnColor = clicked ? "bg-desaturatedDarkBlue" : "bg-lightGrayishBlue";
  const arrowColor = clicked ? "mix-blend-screen" : null;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const footerColor =
    clicked && isTabletOrMobile ? "bg-veryDarkGrayishBlue" : "bg-white";

  function handleClick() {
    setClicked((prevState) => !prevState);
  }

  return (
    <main className="max-w-xs m-6 rounded-xl bg-white xl:grid xl:grid-cols-9 xl:max-w-3xl xl:h-72 xl:m-0  xl:pr-6">
      <div className="block xl:col-start-1 xl:col-span-4 ">
        <Image
          src="/drawers.jpg"
          alt="a green drawer"
          width="0"
          height="0"
          sizes="300px"
          className="w-[20rem] h-[13rem] xl:w-[18.25rem] xl:h-72 object-cover object-top xl:object-left rounded-t-xl xl:rounded-none xl:rounded-l-xl"
        />
      </div>

      <div className="p-7 w-full xl:col-start-5 xl:row-start-1 xl:col-span-5 xl:text-xl xl:p-0 xl:mt-10">
        <h2 className="font-bold text-veryDarkGrayishBlue ">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>

        <p className="pt-4 text-sm text-desaturatedDarkBlue xl:text-sm xl:mr-11 ">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>

      <div
        className={`${footerColor} h-16 flex items-center rounded-b-xl relative w-full p-8 xl:p-0 xl:col-start-5 xl:row-start-1 xl:col-span-5 xl:self-end xl:my-3`}
      >
        {isTabletOrMobile && !clicked && <UserFooter />}
        {!isTabletOrMobile ? <UserFooter /> : null}

        {isTabletOrMobile && clicked && <MobileBar />}
        {!isTabletOrMobile && clicked && <DesktopBar />}

        <Spacer />
        <button
          onClick={handleClick}
          className={`rounded-full w-9 h-9 ml-6 xl:m-6 } ${btnColor} flex
          items-center justify-center justify-self-end`}
        >
          <Image
            src="/icon-share.svg"
            width="24"
            height="0"
            sizes="100vw"
            alt=""
            className={`w-2/4 h-auto pb-1 ${arrowColor}  `}
          />
        </button>
      </div>
    </main>
  );
}
