import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import BackPage from "../components/BackPage";

function page() {
  return (
    <div>
      <BackPage theme="dark" />
      <ImageCarousel />
    </div>
  );
}

export default page;
