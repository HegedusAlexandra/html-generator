import React from "react";
import clippy from "./clippy3.png";

export default function Clippy() {
  return (
    <div className="flex flex-col fixed top-0 right-6 w-[200px] h-[400px] m-[2vh] hover:translate-x-40 hover:-translate-y-40">
      <div className="flex flex-col justify-between bg-amber-100 w-[100%] h-[40%] rounded-lg border-[1px] border-solid border-black">
        <div className="w-[200px] p-2 overflow-wrap break-word text-[14px]">
          It looks like you trying to question my existence. 
          Should I question yours?
          Would you like help?
        </div>
        <div className="flex flex-row justify-between w-[100%] p-2">
          <button className="bg-amber-100 w-[30%]  rounded-sm border-[1px] border-solid border-slate-600 ">Yes</button>
          <button className="bg-amber-100 w-[30%]  rounded-sm border-[1px] border-solid border-slate-600 ">No</button>
        </div>
      </div>
      <div className="triangle-container">
        <div className="triangle-border"></div>
        <div className="triangle-background"></div>
      </div>
      <img src={clippy} className="w-[100%] h-[50%]" />
    </div>
  );
}
