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
        level: 1,
      },
      {
        title: '情報セキュリティ\nマネジメント',
        description: '情報セキュリティに関するリスク管理や対策能力を証明する国家資格です。',
        level: 1,
      },
      {
        title: '基本情報技術者試験',
        description: 'プログラミングやネットワークなど、IT技術者としての基礎力を証明する国家資格です。',
        level: 2,
      },
      {
        title: 'PowerPoint\nAssociate',
        description: 'PowerPointを活用した資料作成・プレゼンテーション能力を証明する国際資格です。',
        level: 1,
      },
    ],
  },
  {
    category: 'フロントエンド',
    items: [
      {
        title: 'HTML',
        description: '基本的なタグを使って、色々作ったりしてます。',
        level: 2,
        image: './skill_icon/html5.svg',
      },
      {
        title: 'CSS',
        description: 'やりたいデザインを実装するために調べながら色々作ったりしてます。',
        level: 2,
        image: './skill_icon/css3.svg',
      },
      {
        title: 'JavaScript',
        description: '構文の書き方で混乱するが、調べながらだったらある程度実装できます。',
        level: 2,
        image: './skill_icon/javascript.svg',
      },
      {
        title: 'TypeScript',
        description: '最初、初めての静的型付け言語でエラーがいっぱい出て混乱してました。',
        level: 2,
        image: './skill_icon/typescript.svg',
      },
      {
        title: 'Swift',
        description: '参考書に載っているサンプルコードは出来ます。',
        level: 1,
        image: './skill_icon/swift.svg',
      },
    ],
  },
  {
    category: 'バックエンド',
    items: [
      {
        title: 'PHP',
        description: '授業で少しだけ触ったことがある。今後使う予定があるので、勉強中。',
        level: 1,
        image: './skill_icon/php.svg',
      },
      {
        title: 'Python',
        description: '初めて触った言語です。コンソールで使えるアプリを作ったりしました。',
        level: 3,
        image: './skill_icon/python.svg',
      },
    ],
  },
  {
  category: 'フレームワーク',
  items: [
    {
      title: 'React',
      description: 'このサイトを作成するために勉強しました。',
      level: 2,
      image: './skill_icon/react.svg',
    },
    {
      title: 'Flask',
      description: 'ちょっとしたアプリを作成したことがあります。',
      level: 2,
      image: './skill_icon/flask.svg',
    },
    {
      title: 'FastAPI',
      description: '授業で簡単なAPIを作成したことがあります。',
      level: 2,
      image: './skill_icon/fastapi.svg',
    },
    {
      title: 'Node.js',
      description: '学校の授業で簡単なアプリを作成したことがあります。',
      level: 2,
      image: './skill_icon/nodejs.svg',
    },
  ],
  },
  {
    category: 'データベース',
    items: [
      {
        title: 'MySQL',
        description: 'Pythonと連携して、日記アプリを作成したことがあります。',
        level: 2,
        image: './skill_icon/mysql.svg',
      },
      {
        title: 'SQLite',
        description: '授業でちょっと触ったっことがある程度です。',
        level: 1,
        image: './skill_icon/sqlite.svg',
      }
    ],
  },
  {
    category: 'クラウド',
    items: [
      {
        title: 'AWS',
        description: '授業で学んだ程度です。もっと理解が深まるように勉強中。',
        level: 1,
        image: './skill_icon/aws.svg', 
  },
],
  },
  {
    category: 'インフラ',
    items: [
      {
        title: 'Docker',
        description: '知識だけで、実際に触ったことはありません。知識もあまりない。',
        level: 1,
        image: './skill_icon/docker.svg',
      },
      
    ],
  },
  {
    category: 'OS',
    items: [
      {
        title: 'Windows',
        description: '主に趣味でゲームをするのに使ってます。',
        level: 2,
        image: './skill_icon/windows.svg',
      },
      {
        title: 'MacOS',
        description: '普段の開発環境として使用しています。',
        level: 2,
        image: './skill_icon/macos.svg',
      },
      {
        title: 'Linux',
        description: '授業で学びました。LinuCレベル1の取得に向けて勉強中。',
        level: 1,
        image: './skill_icon/linux.svg',
      },
    ],
  }, 
  {
    category: 'ツール',
    items: [
      {
        title: 'Discord',
        description: 'チームでのプロジェクトでよく使用してます。管理の仕方を勉強中。',
        level: 2,
        image: './skill_icon/discord.svg',
      },
      {
        title: 'Git',
        description: '主にGitHubを使用しています。GitLabでの開発経験もあります。',
        level: 2,
        image: './skill_icon/git.svg',
      },
      {
        title: 'VSCode',
        description: '拡張機能を使ってペットを飼うことで、モチベを上げています。可愛い。',
        level: 3,
        image: './skill_icon/vscode.svg',
      },
      {
        title: 'Figma',
        description: 'モックアップ作成などで使います。デザインもできるようになりたい。',
        level: 3,
        image: './skill_icon/figma.svg',
      },
      {
        title: 'Illustrator',
        description: '授業で少しだけ学びました。',
        level: 1,
        image: './skill_icon/illustrator.svg',
      },
      {
        title: 'Photoshop',
        description: '体験授業で教えたりしてます。作品作るのが好きです。',
        level: 2,
        image: './skill_icon/photoshop.svg',
      },
      {
        title: 'Premiere Pro',
        description: '体験授業で教えているたりしてます。動画編集の経験があります。',
        level: 2,
        image: './skill_icon/premierepro.svg',
      },
      {
        title: 'After Effects',
        description: '体験授業で教えたりしてます。アニメーションに興味があります。',
        level: 2,
        image: './skill_icon/aftereffects.svg',
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
          の数は、スキルの習熟度や資格の難易度（※私が感じた基準です）を表しています。
        </p>
        <p>
          1つ：少し触ったことがある、または基本的な知識があるレベルです。
        </p>
        <p>
          2つ：課題や小さな制作で使ったことがあり、調べながら実装できるレベルです。
        </p>
        <p>
          3つ：何度も使っていて、調べなくても使いこなせる・人に教えられるレベルです。
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
                image={skill.image}
                category={category.category}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skill
