import React from 'react';

type ActivitiesCardProps = {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkTitle?: string;
  className?: string;
};

const ActivitiesCard: React.FC<ActivitiesCardProps> = ({ title, description, image, link,linkTitle, className }) => {
  return (
    <div className={`activities-card ${className}`}>
      <h3 className="activities-card-tab">{title}</h3>
      <div className="activities-card-content">
        <div className="activities-card-image">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="image-placeholder" />
          )}
        </div>
        <div className="activities-card-text">
            <p>{description}</p>
        </div>
      </div>
      <a href={link} className="activities-card-button">
        {linkTitle} <span className="gear-icon">⚙</span>
      </a>
    </div>
  );
};

export default ActivitiesCard;
