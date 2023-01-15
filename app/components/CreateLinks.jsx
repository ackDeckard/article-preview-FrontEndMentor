import Image from "next/image";
import Link from "next/link";
import React from "react";

function CreateLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#">
        <Image
          src="/icon-facebook.svg"
          width={0}
          height={0}
          alt="facebook icon"
          className="w-5 h-auto"
        />
      </Link>

      <Link href="#">
        <Image
          src="/icon-twitter.svg"
          width={0}
          height={0}
          alt="twitter icon"
          className="w-5 h-auto"
        />
      </Link>

      <Link href="#">
        <Image
          src="/icon-pinterest.svg"
          width={0}
          height={0}
          alt="pinterest icon"
          className="w-5 h-auto"
        />
      </Link>
    </div>
  );
}

export default CreateLinks;
