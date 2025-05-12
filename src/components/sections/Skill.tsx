// components/sections/Skill.tsx

import SkillCard from './SkillCard';

const skillCategories = [
  {
    category: '資格',
    items: [
      {
        title: '基本情報 技術者試験',
        description: 'ITの基礎知識を証明する国家資格。',
        level: 3,
      },
      {
        title: 'TOEIC 800点',
        description: '英語力を証明する資格。',
        level: 2,
      },
    ],
  },
  {
    category: 'フロントエンド',
    items: [
      {
        title: 'HTML/CSS',
        description: '簡単なコーディングや調整ができる。',
        level: 2,
      },
      {
        title: 'JavaScript',
        description: '基本的な動的処理を実装できる。',
        level: 3,
      },
      {
        title: 'JavaScript',
        description: '基本的な動的処理を実装できる。',
        level: 3,
      },
      {
        title: 'JavaScript',
        description: '基本的な動的処理を実装できる。',
        level: 3,
      },
      {
        title: 'JavaScript',
        description: '基本的な動的処理を実装できる。',
        level: 3,
      },
    ],
  },
  {
    category: 'バックエンド',
    items: [
      {
        title: 'Node.js',
        description: '簡単なAPIを作成できる。',
        level: 2,
      },
      {
        title: 'Express',
        description: '簡単なAPIを作成できる。',
        level: 2,
      },
      {
        title: 'MySQL',
        description: '基本的なデータベース操作ができる。',
        level: 2,
      },
    ],
  },
];
// Skillコンポーネントは、ページのSkill部分を表示します。
const Skill = () => {
  return (
    <section id="skill">
    {/* <SkillBackGround /> */}
    <div className="section-title-wrapper">
      <h2 className="section-title">スキル・資格</h2>
      <h3>これまで学んできたスキルと取得してきた資格を紹介します！</h3>
    </div>
    
    {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="skill-category-title">{category.category}</h3>
          <div className="skill-container">
            {category.items.map((skill, skillIndex) => (
              <SkillCard
                key={skillIndex}
                title={skill.title}
                description={skill.description}
                level={skill.level}
              />
            ))}
            </div>
  </div>
    ))}
    </section>

  )
}

export default Skill
