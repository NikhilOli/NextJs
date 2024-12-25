import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

interface BtnProps {
    path: string;
    text: string;
    color?: string;
    className?: string;
  }

const Btn: React.FC<BtnProps> = ({path, text, color, className}) => {
  return (
    <Link href={path}>
      <Button className={`${color ? `bg-color` : `bg-white`} text-black w-max ${className}`}>{text}</Button>
    </Link>
  );
};

export default Btn;
