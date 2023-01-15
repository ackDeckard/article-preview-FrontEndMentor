"use client";
import Image from "next/image";

export default function UserFooter() {
  return (
    <div className="flex h-10 bg-white">
      <div className="">
        <Image
          src="/avatar-michelle.jpg"
          alt="user avatar"
          width="0"
          height="0"
          sizes="100vw"
          className="rounded-full w-10 h-10"
        />
      </div>
      <div className="text-sm ml-4">
        <p className=" font-bold text-veryDarkGrayishBlue">Michelle Appleton</p>
        <p className="font-light text-sm text-desaturatedDarkBlue">
          28 Jun 2020
        </p>
      </div>
    </div>
  );
}
