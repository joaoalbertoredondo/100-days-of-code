import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

function BackPage() {
  return (
    <div className="fixed top-10 left-10">
      <Link href={"/"} className="font-semibold hover:underline">
        <ArrowLeftOutlined /> Back
      </Link>
    </div>
  );
}

export default BackPage;
