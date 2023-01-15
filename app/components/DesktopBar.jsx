"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CreateLinks from "./CreateLinks";
import UserFooter from "./UserFooter";

function DesktopBar() {
  return (
    <>
      {/* <UserFooter /> */}
      <div className="absolute -right-16 -top-16 isolate">
        <div className=" bg-veryDarkGrayishBlue rounded-lg">
          <div className="py-4 px-8 flex gap-4 items-center">
            <p className="uppercase text-sm tracking-[.3rem] text-grayishBlue">
              share
            </p>
            <CreateLinks />
          </div>
        </div>
        <div className="absolute bg-veryDarkGrayishBlue left-1/2 right-1/2 -bottom-2 h-4 w-4 rotate-45 -z-10" />
      </div>
    </>
  );
}

export default DesktopBar;
