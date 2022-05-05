# 1. 설치 및 폴더구조
```
npm install next react react-dom
```
`package.json`에 다음추가
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```
  
__폴더구조__
* `/public` - static 파일들
* `/pages` - 파일명으로 라우팅됨.


# 2. server side rendering 방법
페이지 파일에 `export async function getServerSideProps(context)`함수를 추가해준다.  
아래 예시는 next.js가 getStaticProps함수를 실행한 결과로 Index함수의 파라미터 값을 생성하여 대입해주는 상황이다.
```javascript   
import Link from 'next/link'

function Index({ stars }) {
  return (
    <div>
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Index
```

# 3. 추가로 알아볼것
[fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)