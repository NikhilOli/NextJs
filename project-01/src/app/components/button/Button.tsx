import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

interface BtnProps {
    path: string;
    text: string;
  }

const Btn: React.FC<BtnProps> = ({path, text}) => {
  return (
    <Link href={path}>
      <Button className="bg-[#7B2CBF] w-max">{text}</Button>
    </Link>
  );
};

export default Btn;
