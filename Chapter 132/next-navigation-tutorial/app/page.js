"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparams = useSearchParams();
  return (
    <div>
      hey this is Home page and the blog is {searchparams.get("blog")} and utm
      is {searchparams.get("utm_source")}
    </div>
  );
}
