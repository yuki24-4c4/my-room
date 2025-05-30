// components/sections/Introduction.tsx

import BlogCard from '../card/ActivitiesCard';

type BlogItem = {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkTitle?: string;
};

const blogList: BlogItem[] = [
  {
    title: 'yukiのへや',
    description:
      'ポートフォリオサイトです。私のスキルや活動、これまでに作ったサービスを紹介しています。',

    link: '/blog',
    linkTitle: 'サイトに行く',
  },
  
];

// Activitiesコンポーネントは、ページのActivities部分を表示します。
const Activities = () => {
  return (
    <section id="activities">
      
    {/* <ActivitiesBackGround /> */}
    <div className="section-title-wrapper">
      <h2 className="section-title">活動紹介</h2>
      <h3>私の活動や、これまでに作ったサービスを紹介します！</h3>
    </div>

    <div>
      {blogList.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          link={blog.link}
          linkTitle={blog.linkTitle}
          className={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
    </section>
  )
}

export default Activities
