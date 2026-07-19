import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambledText({ text, delay = 600 }) {
    const [displayText, setDisplayText] = useState(() =>
        text
            .split("")
            .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
            .join("")
    );

    useEffect(() => {
        let isMounted = true;
        let timer = setTimeout(() => {
            let frame = 0;
            const totalFrames = 30;
            const interval = setInterval(() => {
                if (!isMounted) return;

                let allDone = true;
                const result = text
                    .split("")
                    .map((c, i) => {
                        if (c === " ") return " ";

                        // Determine when this character starts and finishes resolving
                        const charStartFrame = (i / text.length) * (totalFrames * 0.5);

                        if (frame >= charStartFrame + 8) {
                            return c; // Fully resolved
                        } else if (frame >= charStartFrame) {
                            allDone = false;
                            return chars[Math.floor(Math.random() * chars.length)]; // Scrambling
                        } else {
                            allDone = false;
                            return chars[Math.floor(Math.random() * chars.length)]; // Initial random
                        }
                    })
                    .join("");

                setDisplayText(result);
                frame++;

                if (allDone || frame >= totalFrames + 8) {
                    setDisplayText(text);
                    clearInterval(interval);
                }
            }, 40); // 40ms per frame updates (~25fps)

            return () => clearInterval(interval);
        }, delay);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, [text, delay]);

    return <span>{displayText}</span>;
}