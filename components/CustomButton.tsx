"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles,
     handleclick}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleclick}
    >
        <span className={`flex-1`}>
            title
        </span>

    </button>
  )
}

export default CustomButton