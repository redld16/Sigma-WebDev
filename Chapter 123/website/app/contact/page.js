import React from "react";
import Script from "next/script";

const contact = () => {
  return (
    <div>
      <Script>
        {`
        alert("welcome to Contact Page")
        `}
      </Script>
      contact
    </div>
  );
};

export default contact;

export const metadata = {
  title: "Contact Facebook",
  description: "This is Contact Facebook",
};
