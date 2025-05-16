// components/sections/Introduction.tsx


// Introductionコンポーネントは、ページのIntroduction部分を表示します。
const Introduction = () => {
  return (
    <section id="introduction">
      {/* <IntroductionBackGround /> */}
      <div id="introduction-content">
      <div className="section-title-wrapper">
        <h2 className="section-title">自己紹介</h2>
        <h3>初めまして！yukiと申します。</h3>
      </div>
      <p>
        私は、IT系の専門学校に通う学生です。<br /> 
        将来は「使っていて楽しい！」と心から思えるようなアプリケーションを作る、<br />
        フルスタックエンジニアを目指しています。<br />
        今は、自分のアイディアを形にするために、必要な技術を日々勉強中です。
      </p>
      <p>
        本や映画、ゲームなど、ストーリー性のある作品が大好きです。<br />
        ほかにも音楽や占い、ピアノやお絵描きも楽しんでいます。<br />
        空想や妄想が好きで、「ああなりたい」「こうだったらいいな」という想いが<br />
        たくさんあります。<br />
        その目標を少しずつ叶えるため、日々やるべきことに取り組んでいます。
      </p>
      </div>
    </section>
  )
}

export default Introduction
