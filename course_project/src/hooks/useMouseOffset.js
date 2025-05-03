import { useState, useEffect } from "react";

export function useMouseOffset(sensitivity = 30) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e) => {
            const x = (0.5 - e.clientX / window.innerWidth) * sensitivity;
            const y = (0.5 - e.clientY / window.innerHeight) * sensitivity;
            setOffset({ x, y });
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, [sensitivity]);

    return offset;
}
