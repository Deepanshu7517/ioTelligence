import { useEffect, useRef } from "react";

export default function Robot2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.86/build/spline-viewer.js";

    script.onload = () => {
      if (containerRef.current) {
        const viewer = document.createElement("spline-viewer");
        viewer.setAttribute(
          "url",
          "https://prod.spline.design/THkPDUBz5Gn3ubyO/scene.splinecode"
        );
        viewer.style.width = "100%";
        viewer.style.height = "100%";
        viewer.style.border = "none";
        containerRef.current.appendChild(viewer);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
