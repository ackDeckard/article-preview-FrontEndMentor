"use client";
import Image from "next/image";
import React from "react";
import CreateLinks from "./CreateLinks";

function MobileBar() {
  return (
    <div className="flex gap-4 items-center text-grayishBlue">
      <p className="uppercase text-sm tracking-[.3rem]">share</p>
      <CreateLinks />
    </div>
  );
}

export default MobileBar;
