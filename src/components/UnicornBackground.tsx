"use client";

import { useEffect, useRef } from "react";

export function UnicornBackground() {
    const isInitialized = useRef(false);

    useEffect(() => {
        const loadUnicornScript = () => {
            // Ensure global object exists
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false } as any;
            }

            const src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

            // Check if script is already present
            let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;

            if (!script) {
                script = document.createElement("script");
                script.src = src;
                script.async = true;
                (document.head || document.body).appendChild(script);
            }

            // Handle initialization
            const init = () => {
                if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                    console.log("UnicornStudio: Initializing...");
                    window.UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                }
            };

            if (script.getAttribute("data-loaded") === "true") {
                init();
            } else {
                const originalOnLoad = script.onload;
                script.onload = (e) => {
                    script.setAttribute("data-loaded", "true");
                    if (typeof originalOnLoad === "function") originalOnLoad.call(script, e);
                    init();
                };
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(loadUnicornScript, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10 bg-black overflow-hidden">
            <div
                data-us-project="FixNvEwvWwbu3QX9qC3F"
                className="absolute w-full h-full left-0 top-0"
                style={{ opacity: 1 }}
            ></div>
        </div>
    );
}
