// components/sections/Skill.tsx

import SkillCard from '../card/SkillCard';
import catHand from '../../assets/cat-hand.svg';

// スキルアイテムの型を定義
type SkillItem = {
  title: string;
  description: string;
  level: number;
  image?: string; // imageをオプションプロパティにする
};

// スキルカテゴリの型を定義
type SkillCategory = {
  category: string;
  items: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    category: '資格',
    items: [
      {
        title: 'ITパスポート',
        description: 'ITの基礎知識とビジネススキルを身につけていることを証明する国家資格です。',
        level: 0,
      },
      {
        title: '情報セキュリティ\nマネジメント',
        description: '情報セキュリティに関するリスク管理や対策能力を証明する国家資格です。',
        level: 0,
      },
      {
        title: '基本情報\n技術者試験',
        description: 'プログラミングやネットワークなど、IT技術者としての基礎力を証明する国家資格です。',
        level: 0,
      },
      {
        title: 'PowerPoint\nAssociate',
        description: 'PowerPointを活用した資料作成・プレゼンテーション能力を証明する国際資格です。',
        level: 0,
      },
    ],
  },
  {
    category: 'フロントエンド',
    items: [
      {
        title: 'HTML',
        description: '簡単なコーディングや調整ができる。',
        level: 2,
        image: '/skill_icon/html5.svg',
      },
      {
        title: 'CSS',
        description: '簡単なコーディングや調整ができる。',
        level: 2,
        image: '/skill_icon/css3.svg',
      },
      {
        title: 'JavaScript',
        description: '基本的な動的処理を実装できる。',
        level: 2,
        image: '/skill_icon/javascript.svg',
      },
      {
        title: 'TypeScript',
        description: '基本的な動的処理を実装できる。',
        level: 2,
        image: '/skill_icon/typescript.svg',
      },
      {
        title: 'Swift',
        description: '簡単なアプリを作成できる。',
        level: 2,
        image: '/skill_icon/swift.svg',
      },
    ],
  },
  {
    category: 'バックエンド',
    items: [
      {
        title: 'PHP',
        description: '簡単なAPIを作成できる。',
        level: 2,
        image: '/skill_icon/php.svg',
      },
      {
        title: 'Python',
        description: '簡単なAPIを作成できる。',
        level: 2,
        image: '/skill_icon/python.svg',
      },
    ],
  },
  {
  category: 'フレームワーク',
  items: [
    {
      title: 'React',
      description: '簡単なアプリを作成できる。',
      level: 2,
      image: '/skill_icon/react.svg',
    },
    {
      title: 'Flask',
      description: '簡単なAPIを作成できる。',
      level: 2,
      image: '/skill_icon/flask.svg',
    },
    {
      title: 'FastAPI',
      description: '簡単なAPIを作成できる。',
      level: 2,
      image: '/skill_icon/fastapi.svg',
    },
    {
      title: 'Node.js',
      description: '簡単なAPIを作成できる。',
      level: 2,
      image: '/skill_icon/nodejs.svg',
    },
  ],
  },
  {
    category: 'データベース',
    items: [
      {
        title: 'MySQL',
        description: '簡単なデータベースを作成できる。',
        level: 2,
        image: '/skill_icon/mysql.svg',
      },
      {
        title: 'SQLite',
        description: '簡単なデータベースを作成できる。',
        level: 2,
        image: '/skill_icon/sqlite.svg',
      }
    ],
  },
  {
    category: 'クラウド',
    items: [
      {
        title: 'AWS',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/aws.svg', 
  },
],
  },
  {
    category: 'インフラ',
    items: [
      {
        title: 'Docker',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/docker.svg',
      },
      
    ],
  },
  {
    category: 'OS',
    items: [
      {
        title: 'Windows',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/windows.svg',
      },
      {
        title: 'MacOS',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/macos.svg',
      },
      {
        title: 'Linux',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/linux.svg',
      },
    ],
  }, 
  {
    category: 'ツール',
    items: [
      {
        title: 'Git',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/git.svg',
      },
      {
        title: 'VSCode',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/vscode.svg',
      },
      {
        title: 'Figma',
        description: '簡単な操作ができる。',
        level: 2,
        image: '/skill_icon/figma.svg',
      },
    ],
  },
];

// Skillコンポーネントは、ページのSkill部分を表示します。
const Skill = () => {
  return (
    <section id="skill">
      <div className="section-title-wrapper">
        <h2 className="section-title">スキル・資格</h2>
        <h3>これまで学んできたスキルと取得してきた資格を紹介します！</h3>
      </div>

      {/* スキル説明 */}
      <div className="skill-description">
        <p>
            <img src={catHand} alt="cat hand" className="skill-icon" />
            
          は、スキルの習熟度を表しています。
        </p>
        <p>
          １つは、触ってみて基本的なことはできるようになった段階。
        </p>
        <p>
          ２つは、小さな制作や課題などで使ったことがあるレベルです。
        </p>
        <p>
          ３つは、複数の制作経験があり、人に説明できるレベルです。
        </p>
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
                image={skill.image} // imageプロパティを渡す
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skill
