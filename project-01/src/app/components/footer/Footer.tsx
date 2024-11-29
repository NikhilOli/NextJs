import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p className="">
        &copy; {new Date().getFullYear()} Nikhil Oli. All rights reserved.
      </p>
      <div>
        <div className="social-links">
          <Link href="https://www.instagram.com/" target="_blank"><Image alt="Image" width={15} height={15} src="/1.png" /></Link>
          <Image alt="Image" width={15} height={15} src="/2.png" />
          <Image alt="Image" width={15} height={15} src="/3.png" />
          <Image alt="Image" width={15} height={15} src="/4.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
