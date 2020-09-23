import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import TategakiLi from '../components/TategakiLi'
import TategakiArea from '../components/TategakiStyle'
import TategakiUl from '../components/TategakiUl'

const Index = (): JSX.Element => (
  <main className={css(tw`grid justify-center items-center h-screen`)}>
    <TategakiArea>
      <TategakiUl>
        <TategakiLi>サーモンのオーブン焼き</TategakiLi>
        <TategakiLi>トマトパスタ</TategakiLi>
        <TategakiLi>チンゲンサイと素麺</TategakiLi>
        <TategakiLi>野菜炒め</TategakiLi>
      </TategakiUl>
    </TategakiArea>
  </main>
)

export default Index
