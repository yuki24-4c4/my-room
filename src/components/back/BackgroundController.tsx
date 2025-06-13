// components/BackgroundController.tsx
import React, { useState, useEffect } from "react";
import { useVisibleSection } from "../../lib/hooks/useVisibleSection";
import IntroductionBack from "./IntroductionBack";
import ActivitiesBackground from "./ActivitiesBackground";
import SkillBackground from "./SkillBackground";
import FinallyBackground from "./FinallyBackground";

const BackgroundController: React.FC = () => {
  const sectionIds = ["introduction", "activities", "skill", "finally"];
  const activeSection = useVisibleSection(sectionIds);
  const [currentBackground, setCurrentBackground] = useState<React.ReactNode>(null);
  const [fadeClass, setFadeClass] = useState<string>("fade-in");

  useEffect(() => {
    setFadeClass("fade-out");
    const timeout = setTimeout(() => {
      switch (activeSection) {
        case "introduction":
          setCurrentBackground(<IntroductionBack />);
          break;
        case "activities":
          setCurrentBackground(<ActivitiesBackground />);
          break;
        case "skill":
          setCurrentBackground(<SkillBackground />);
          break;
        case "finally":
          setCurrentBackground(<FinallyBackground />);
          break;
        default:
          setCurrentBackground(null);
      }
      setFadeClass("fade-in");
    }, 300); // フェードアウト後に背景を切り替え

    return () => clearTimeout(timeout);
  }, [activeSection]);

  return <div className={`background-container ${fadeClass}`}>{currentBackground}</div>;
};

export default BackgroundController;
