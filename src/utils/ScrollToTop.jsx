import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollContainer = document.querySelector(".openPageDiv");
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0}); // , behavior: "smooth" 
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
