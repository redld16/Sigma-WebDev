"use client";
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <div className="w-2/3 mx-auto my-12">
      <form
        ref={ref}
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
      >
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-white text-black"
          />
        </div>
        <div>
          <label htmlFor="add">address</label>
          <input
            type="text"
            id="add"
            name="add"
            className="bg-white text-black"
          />
        </div>
        <div>
          <button className="border border-white">submit</button>
        </div>
      </form>
    </div>
  );
}
