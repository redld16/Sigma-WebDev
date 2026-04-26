import React from "react";

const login = () => {
  return (
    <div>
      Admin Login
      <p>feel free to login as admin</p>
    </div>
  );
};

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params;

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "hey facebook",
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function page({ params, searchParams }) {}
