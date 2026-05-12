# React 프로젝트 시작 가이드

## Vite로 React 프로젝트 시작하기

VS코드 터미널에서 다음 단계를 따라 프로젝트를 생성하고 실행한다.

> 참고: [처음부터 React 앱 만들기](https://ko.react.dev/learn/build-a-react-app-from-scratch)
> 참고: [Create your first React project with Vite](https://scrimba.com/intro-to-vite-c03p6pbbdq/~0yhj)

### 1단계: 프로젝트 생성 명령어 실행

다음 명령어를 사용하여 프로젝트 생성을 시작한다.

```bash
npm create vite@latest
```

### 2단계: 프로젝트 설정 (대화형 프롬프트)

명령어를 실행하면 나타나는 질문에 화살표 키와 엔터를 이용해 다음과 같이 선택한다.

- Project name: 생성할 폴더 이름을 입력한다. (예: my-app)
- Select a framework: React를 선택한다.
- Select a variant: JavaScript를 선택한다.

### 3단계: 의존성 설치 및 개발 서버 실행

프로젝트 생성이 완료되면, 터미널의 안내에 따라 다음 명령어를 순서대로 실행한다.

```bash
# 1. 생성된 프로젝트 폴더로 이동
cd my-app

# 2. 필수 패키지(의존성) 설치
npm install

# 3. 개발 서버 시작
npm run dev
```

### 4단계: 결과 확인

개발 서버가 시작되면 터미널에 다음과 같은 메시지가 나타난다.

```plaintext
  VITE v6.x.x  ready in 315 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

웹 브라우저에서 http://localhost:5173으로 접속하여 Vite로 생성된 React 애플리케이션을 확인한다.

---

## 2. React Router 설치(추가)

프로젝트 환경 구축 후 페이지 이동 기능이 필요하다면 아래 명령어를 추가로 실행하여 설치한다.

```bash
npm install react-router
```

---

## 3. React Developer Tools 설치(추가)

> 참고: [React Developer Tools](https://react.dev/learn/react-developer-tools)

React 컴포넌트 구조, props/state 확인, 성능 문제 파악에 사용하는 브라우저 확장 프로그램이다.

### 브라우저 확장 프로그램 설치

사용 중인 브라우저에 맞게 설치한다.

- [Chrome 설치](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Firefox 설치](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Edge 설치](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

설치 후 `http://localhost:5173`에 접속하면 브라우저 개발자 도구(`F12`)에 **Components**, **Profiler** 탭이 새로 생긴다.

---

### Safari 또는 기타 브라우저

확장 프로그램을 지원하지 않는 브라우저는 아래 방법을 사용한다.

**1. 전역 패키지 설치 및 실행**

```bash
npm install -g react-devtools && react-devtools
```

**2. `index.html`의 `<head>` 최상단에 아래 스크립트 태그 추가**

```html
<script src="http://localhost:8097"></script>
```

추가 후 브라우저를 새로고침하면 개발자 도구와 연결된다.
