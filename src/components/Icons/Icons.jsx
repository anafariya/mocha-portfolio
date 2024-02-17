import React from "react";
import htmlLogo from "./html_logo.png";
import cssLogo from "./css_logo.png";
import jsLogo from "./js_logo.png";
import reactLogo from "./react_logo.png";
import nextjsLogo from "./nextjs_logo.png";
import threejsLogo from "./threejs_logo.jpg";
import tailwindLogo from "./tailwind_logo.png";
import tsLogo from "./ts_logo.png";
import mongodbLogo from "./mongodb_logo.png";
import postgresLogo from "./postgres_logo.png";
import { motion } from "framer-motion";

function Icons() {
  // Array of logo objects
  const logos = [
    { src: htmlLogo, alt: "HTML Logo" },
    { src: cssLogo, alt: "CSS Logo" },
    { src: jsLogo, alt: "JavaScript Logo" },
    { src: tsLogo, alt: "TypeScript Logo" },
    { src: tailwindLogo, alt: "Tailwind CSS Logo" },
    { src: reactLogo, alt: "React Logo" },
    { src: nextjsLogo, alt: "Next.js Logo" },
    { src: threejsLogo, alt: "Three.js Logo" },
    { src: mongodbLogo, alt: "MongoDB Logo" },
    { src: postgresLogo, alt: "PostgreSQL Logo" },
  ];

  return (
    <div className="logos flex gap-5 bg-white overflow-hidden">
      {/* Mapping over the logos array to generate img tags */}
      <motion.div
        className="flex gap-3"
        animate={{ x: ["100%", "-100%"] }} // Adjusted animation to cycle from 0% to 100%
        transition={{ ease: "linear", duration: 20,  loop: Infinity }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{ height: "6vw", paddingTop: "1px", borderRadius: "0.25rem" }}
          />
        ))}
         {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{ height: "6vw", paddingTop: "1px", borderRadius: "0.25rem" }}
          />
        ))}
      
      </motion.div>
    </div>
  );
}

export default Icons;
