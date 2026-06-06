import { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const SCROLL_THRESHOLD = 300;

const ScrollNavigator = () => {
  const [showNavigator, setShowNavigator] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setShowNavigator(scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showNavigator) return null;

  return (
    <div className="scroll-navigator" aria-label="Scroll navigation">
      <button
        className="scroll-navigator__btn scroll-navigator__btn--up"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollNavigator;
