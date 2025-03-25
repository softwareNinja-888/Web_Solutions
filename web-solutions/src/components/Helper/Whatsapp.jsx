import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function Whatsapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Send us message on whatsapp"
      id="Whatsapp"
      onClick={scrollToTop}
      className={`cursor-pointer fixed lg:hidden bottom-5 right-5 p-3 rounded bg-white text-green-500 shadow-lg transition-opacity duration-300 z-50 ${ 
        isVisible ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      <FaWhatsapp size={26} />
    </button>
  );
};