import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 bg-red-300 relative my-3">
      <Image
        className="mx-auto object-cover"
        fill={true}
        src="https://images.pexels.com/photos/31353934/pexels-photo-31353934.jpeg"
        alt=""
      />
    </div>
  );
}
