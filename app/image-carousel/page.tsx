import React from "react";
import BackPage from "../components/BackPage";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";

function page() {
  return (
    <div>
      <BackPage theme="dark" />
      <ImageCarousel />
    </div>
  );
}

export default page;
