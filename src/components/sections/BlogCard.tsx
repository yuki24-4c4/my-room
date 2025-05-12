import React from 'react';

type BlogCardProps = {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkTitle?: string;
  className?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, link,linkTitle, className }) => {
  return (
    <div className={`blog-card ${className}`}>
      <h3 className="blog-card-tab">{title}</h3>
      <div className="blog-card-content">
        <div className="blog-card-image">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="image-placeholder" />
          )}
        </div>
        <div className="blog-card-text">
          {description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <a href={link} className="blog-card-button">
        {linkTitle} <span className="gear-icon">⚙</span>
      </a>
    </div>
  );
};

export default BlogCard;
