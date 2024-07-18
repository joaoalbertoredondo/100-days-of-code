import React from "react";
import Head from "./components/Head";
import Header from "./components/Header";
import List from "./components/List";

function page() {
  return (
    <div className="bg-neutral-900 h-screen text-neutral-300">
      <Header />
      <List />
    </div>
  );
}

export default page;
