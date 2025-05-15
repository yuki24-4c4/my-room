import React from 'react';
import gearIcon from '../../assets/gear.svg'; // SVGアイコンのインポート
import catHandIcon from '../../assets/cat-hand.svg'; // 新しいアイコンのインポート

type SkillCardProps = {
  title: string;
  description: string;
  image?: string;
  level: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ title, description, image, level }) => {
  return (
    <div className="skill-card">
      <p className="skill-card-tab">
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="skill-card-content">
        <img
          src={image || gearIcon} 
          alt={title}
          className="skill-card-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = gearIcon; // 読み込みエラー時にデフォルト画像を表示
          }}
        />
        <div className="skill-level">
          {Array.from({ length: level }, (_, i) => (
            <img
              key={i}
              src={catHandIcon}
              alt="Cat Hand"
              className="paw-icon"
            />
          ))}
        </div>
        <p className="skill-card-text">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
