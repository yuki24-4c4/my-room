// components/sections/Introduction.tsx

import BlogCard from './BlogCard';

type BlogItem = {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkTitle?: string;
};

const blogList: BlogItem[] = [
  {
    title: 'ブログ',
    description:
      '空想や創作を詰め込んだ、ちょっとだけ\n不思議な世界。\n小さな物語や言葉たちを、気ままに綴っています。',
    link: '/blog',
    linkTitle: 'ブログを読む',
  },
  {
    title: '日記',
    description: '日々の気づきや記録をまとめています。',
    link: '/diary',
    linkTitle: '日記を読む',
  },
  {
    title: '日記',
    description: '日々の気づきや記録をまとめています。',
    link: '/diary',
    linkTitle: '日記を読む',
  },
];

import ActivitiesBackGround from "../back/ActivitiesBackground"
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
