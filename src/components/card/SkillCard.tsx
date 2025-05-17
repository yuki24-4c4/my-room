import React from 'react';
import gearIcon from '../../assets/gear.svg'; // SVGアイコンのインポート
import catHandIcon from '../../assets/cat-hand.svg'; // 新しいアイコンのインポート

type SkillCardProps = {
  title: string;
  description: string;
  image?: string;
  level: number;
  category?: string; // カテゴリを受け取れるようにする
};

const SkillCard: React.FC<SkillCardProps> = ({ title, description, image, level, category }) => {
  return (
    <div className="skill-card">
      <p className={`skill-card-title${category === '資格' ? ' skill-card-title--shikaku' : ''}`}>
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="skill-card-content">
        {/* 画像 or ダミー空白で高さを揃える */}
        {category !== '資格' && image && (
          <img
            src={image}
            alt={title}
            className="skill-card-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = gearIcon;
            }}
          />
        )}
        {/* 画像がない場合や資格カテゴリの場合は空白 */}
        {(category === '資格' || !image) && (
          <div style={{ height: 64, marginBottom: 12 }} />
        )}
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
