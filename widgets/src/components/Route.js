import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLoccationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLoccationChange);

        return () => {
            window.removeEventListener('popstate', onLoccationChange)
        };
    }, []);

    return currentPath === path ? children : null;
}

export default Route;