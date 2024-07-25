import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

interface Props {
  theme?: "dark" | "light";
}

function BackPage({ theme = "light" }: Props) {
  return (
    <div className="fixed top-10 left-10">
      <Link
        href={"/"}
        className={`font-semibold hover:underline ${
          theme === "dark" ? "text-gray-100" : ''
        }`}
      >
        <ArrowLeftOutlined /> Back
      </Link>
    </div>
  );
}

export default BackPage;
