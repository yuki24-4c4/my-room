import React from 'react';

type SkillCardProps = {
  title: string;
  description: string;
  image?: string;
  level: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ title, description, image, level }) => {
    const pawIcon = '🐾'; // またはSVGに差し替え可能
  return (
    <div className="skill-card">
      <p className="skill-card-tab">{title}</p>
      <div className="skill-card-content">
        {image ? (
          <img src={image} alt={title} className="skill-card-image" />
        ) : (
          <div className="image-placeholder2" />
        )}
        <div className="skill-level">
          {Array.from({ length: level }, (_, i) => (
            <span key={i} className="paw-icon">{pawIcon}</span>
          ))}
        </div>
        <p className="skill-card-text">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
