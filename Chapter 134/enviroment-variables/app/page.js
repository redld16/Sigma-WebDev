import Image from "next/image";

export default function Home() {
  console.log("the id is:" + process.env.NEXT_PUBLIC_ID);
  console.log("the secret is:" + process.env.NEXT_PUBLIC_SECRET);
  return (
    <div>
      this is homepage the id is {process.env.NEXT_PUBLIC_ID} and the secret is{" "}
      {process.env.SECRET} and name is {process.env.NAME}
    </div>
  );
}
