import React, { Suspense } from "react";

// import HeavyComponent from "./HeavyComponent";
const HeavyComponent = React.lazy(
  () => import("./HeavyComponent")
);  

export default function Contact() {
  console.log("Contact Component Rendered");
  return (
    <div>
      <h2>Contact Page</h2>
      <Suspense fallback={<div>Loading Heavy Component...</div>}>   
        <HeavyComponent /> 
      </Suspense>
    </div>
  );
    // return <h2>Contact Page</h2>;
}
