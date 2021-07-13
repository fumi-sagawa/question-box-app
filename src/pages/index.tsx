import { NextPage } from 'next'
import { css } from '@emotion/react'

// 追加

const Home: NextPage = () => {
  return <div css={test}>Next.js Starter Kit</div>
}

export default Home

const test = css`
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
`
