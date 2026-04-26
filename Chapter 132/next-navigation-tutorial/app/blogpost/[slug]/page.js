"use client";
import React from "react";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/about");
    }, 3000);
  }, []);

  return (
    <div>
      {params.slug}

      <button
        className="bg-sky-400 mx-10 push"
        onClick={() => {
          router.push("/about");
        }}
      >
        about
      </button>
    </div>
  );
};

export default page;
