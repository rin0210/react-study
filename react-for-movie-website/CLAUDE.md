# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 개발 서버 실행 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행
npm run preview  # 빌드 결과물 미리보기
```

## Architecture

React + Vite 기반 영화 정보 웹사이트. 외부 API에서 영화 데이터를 fetch하고, react-router로 페이지를 전환한다.

**라우팅 구조 (`App.jsx`)**
- `/` → `routes/Home.jsx` — 영화 목록 (API fetch + `Movie` 컴포넌트 렌더링)
- `/movie/:id` → `routes/Detail.jsx` — 영화 상세 (URL param으로 API 재호출)

**외부 API**
- `https://movies-api.accel.li/api/v2/list_movies.json` — 영화 목록
- `https://movies-api.accel.li/api/v2/movie_details.json?movie_id={id}` — 영화 상세

**컴포넌트**
- `components/Movie.jsx` — 영화 카드 (cover image, title Link, summary, genres)

## 파일 관례

- 컴포넌트 파일은 `.jsx` 유지 (`.js`로 바꾸지 않음)
- 라우트 단위 페이지는 `src/routes/`, 재사용 컴포넌트는 `src/components/`
- `src/App_org.jsx`, `src/main_org.jsx`, `src/AppDemo.jsx`, `src/AppCoins.jsx`, `src/AppTodo.jsx`는 학습용 참고 파일 — 삭제하지 말 것

## 진행 중인 작업

찜 목록 + 리뷰 CRUD 기능 추가 예정:
- `localStorage`로 데이터 영속화
- React Context로 전역 찜 목록 상태 관리
- `/watchlist` 라우트 신규 추가
