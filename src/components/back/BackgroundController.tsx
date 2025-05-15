// components/BackgroundController.tsx
import { useVisibleSection } from "../../lib/hooks/useVisibleSection";
import IntroductionBack from "./IntroductionBack";
import ActivitiesBackground from "./ActivitiesBackground";
import SkillBackground from "./SkillBackground";
import FinallyBackground from "./FinallyBackground";

const BackgroundController = () => {
  const activeSection = useVisibleSection([
    "introduction",
    "activities",
    "skill",
    "finally",
  ]);

  return (
    <div className="background-controller">
      {/* 各背景コンポーネントを常にレンダリングし、表示・非表示を切り替える */}
      <div
        className={`background-layer ${
          activeSection === "introduction" ? "visible" : "hidden"
        }`}
      >
        <IntroductionBack />
      </div>
      <div
        className={`background-layer ${
          activeSection === "activities" ? "visible" : "hidden"
        }`}
      >
        <ActivitiesBackground />
      </div>
      <div
        className={`background-layer ${
          activeSection === "skill" ? "visible" : "hidden"
        }`}
      >
        <SkillBackground />
      </div>
      <div
        className={`background-layer ${
          activeSection === "finally" ? "visible" : "hidden"
        }`}
      >
        <FinallyBackground />
      </div>
    </div>
  );
};

export default BackgroundController;
