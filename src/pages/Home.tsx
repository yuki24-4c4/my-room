// pages/Home.tsx

import { Top, Introduction, Activities, Skill, Finally } from "../components/sections";

// Homeコンポーネントは、Homeページを表示します。
const Home = () => {
  return (
    <div>
    <Top />
    <Introduction />
    <Activities />
    <Skill />
    <Finally />
    </div>
  )
}

export default Home
