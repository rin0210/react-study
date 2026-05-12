# 💕 Todo List

React와 Supabase로 만든 할 일 관리 앱입니다.

## 기술 스택

- **React 19** - UI 구성
- **Vite** - 빌드 도구
- **Supabase** - 백엔드 데이터베이스 (PostgreSQL 기반 BaaS)

## 주요 기능

- 할 일 추가
- 할 일 완료 체크 (토글)
- 할 일 삭제
- Supabase를 통한 데이터 영속성 (새로고침해도 데이터 유지)
- 최신 등록순 정렬

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 Supabase 프로젝트 정보를 입력합니다.

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

> Supabase 대시보드 → 프로젝트 → Settings → API 에서 확인할 수 있습니다.

### 3. Supabase 테이블 생성

Supabase SQL Editor에서 아래 쿼리를 실행합니다.

```sql
create table todos (
  id uuid primary key default gen_random_uuid(),
  text text not null,
  completed boolean default false,
  created_at timestamp with time zone default now()
);
```

### 4. 개발 서버 실행

```bash
npm run dev
```

## 프로젝트 구조

```
src/
├── lib/
│   └── supabase.js   # Supabase 클라이언트 설정
├── App.jsx            # 메인 컴포넌트 (CRUD 로직)
├── App.css            # 스타일
└── main.jsx
```
