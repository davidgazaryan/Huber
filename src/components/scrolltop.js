import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('testing scroll') // Scroll to the top when the component mounts
    }, [location]);

    return null; // ScrollToTop component doesn't render anything
};

export default ScrollToTop;