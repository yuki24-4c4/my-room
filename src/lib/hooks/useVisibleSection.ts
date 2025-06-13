// hooks/useVisibleSection.ts
import { useEffect, useState } from "react";

export const useVisibleSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const center = window.innerHeight;
        const scrollDirection = window.scrollY > lastScrollY ? "down" : "up"; // スクロール方向を判定
        setLastScrollY(window.scrollY);

        const closest = entries.reduce((a, b) => {
          if (scrollDirection === "down") {
            // 下方向スクロールの場合、セクションの上端を基準に判定
            return Math.abs(a.boundingClientRect.top - center) <
              Math.abs(b.boundingClientRect.top - center)
              ? a
              : b;
          } else {
            // 上方向スクロールの場合、セクションの下端を基準に判定
            return Math.abs(a.boundingClientRect.bottom - center) <
              Math.abs(b.boundingClientRect.bottom - center)
              ? a
              : b;
          }
        });

        if (closest.isIntersecting) {
          const newActiveSection = closest.target.id;
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 10%が画面内に入れば判定
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, activeSection, lastScrollY]);

  return activeSection;
};
