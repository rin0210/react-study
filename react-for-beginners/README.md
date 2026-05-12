# React 스터디 노트 (기본 세팅 및 개념)

### 1. React JS 설치를 위한 CDN 링크

React를 설치 없이 HTML 파일에서 바로 사용하려면 `<script>` 태그를 이용해 아래 링크를 import 한다.

**배포용 (Production)** - _실제 서비스용으로 압축되어 속도가 빠름_

```html
<script src="[https://unpkg.com/react@17.0.2/umd/react.production.min.js](https://unpkg.com/react@17.0.2/umd/react.production.min.js)"></script>
<script src="[https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js](https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js)"></script>
```

**개발용 (Development)** - _에러 메시지 등 개발 시 유용한 정보 제공_

```html
<script src="[https://unpkg.com/react@17.0.2/umd/react.development.js](https://unpkg.com/react@17.0.2/umd/react.development.js)"></script>
<script src="[https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js](https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js)"></script>
```

---

### 2. Babel Import

React의 JSX 문법은 브라우저가 바로 이해할 수 없다. 이를 브라우저가 읽을 수 있는 일반 자바스크립트로 변환(컴파일)시키기 위해 Babel이 필요함.

```html
<script src="[https://unpkg.com/@babel/standalone@7.29.4/babel.min.js](https://unpkg.com/@babel/standalone@7.29.4/babel.min.js)"></script>
```

👉 **주의:** Babel을 사용할 때는 반드시 스크립트 타입을 명시해야 한다.
`<script type="text/babel">`

---

### 3. 컴포넌트(Component) 네이밍 규칙

직접 만든 커스텀 컴포넌트를 렌더링해서 다른 곳에서 사용하기 위해선, **반드시 첫 글자를 '대문자'로 시작**

- ⭕ **올바른 예:** `<Title />`, `<Button />`
- ❌ **틀린 예:** `<title />`, `<button />`
  _(소문자로 시작하면 React가 일반 HTML 태그로 착각하게 된다!)_
