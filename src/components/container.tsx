import React from "react";
import Right from "./right";

export default function Container() {
  return (
    <div className="my-5 mr-5 ml-5 flex w-full flex-col items-center justify-center gap-10 lg:mt-5 lg:flex-row">
      <div className="hidden h-full w-1/2 rounded-3xl border border-[#96BEE7] bg-[#616161] lg:inline-flex"></div>
      <Right />
    </div>
  );
}
