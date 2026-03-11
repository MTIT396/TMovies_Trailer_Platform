# 🎨 TMovies Trailer Platform - Client

Ứng dụng Frontend cho nền tảng xem trailer phim, được xây dựng với Next.js 15 và React 19.

## 📋 Tổng quan

Đây là giao diện người dùng cho nền tảng xem trailer phim với kho tàng phim đồ sộ, cung cấp trải nghiệm tìm kiếm và xem xem trailer phim mượt mà cho mọi người - những ai muốn ra rạp xem phim nhưng chưa có góc nhìn cụ thể.

## ✨ Tính năng & Mô tả ứng dụng

- **Tìm kiếm phim**: Tìm kiếm phim nhanh chóng
- **Đa dạng phim**: Xem Trailer phim ở mọi lĩnh vực, thể loại , quốc gia, TVShows, ...
- **Xem Trailer phim trích xuất từ Youtube**: xem Trailer mượt mà được trích xuất từ Youtube.
- **Giao diện đẹp mắt**: giao diện được thiết kế với sự đa dạng, màu sắc linh động.

## 🛠️ Công nghệ sử dụng

| Thành phần           | Công nghệ                      |
| -------------------- | ------------------------------ |
| **Framework**        | Next.js 15.5 (App Router)      |
| **Ngôn ngữ**         | TypeScript 5                   |
| **UI Library**       | React 19                       |
| **Styling**          | Tailwind CSS 4                 |
| **State Management** | Zustand 5                      |
| **Data Fetching**    | TanStack Query (React Query) 5 |
| **HTTP Client**      | Axios                          |
| **Icons**            | Lucide React                   |

## 📁 Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── genre/              # Chi tiết phim theo thể loại
│   ├── movie/              # Chi tiết phim
│   ├── nation/             # Chi tiết phim theo quốc gia
│   ├── search/             # Tìm kiếm phim
├── components/             # React components
│   ├── ui/                 # Base UI components (Shadcn)
│   └── ...                 # Feature components
├── hooks/                  # Custom React hooks
├── services/               # API service functions
├── providers/              # Provider functions
├── store/                  # Zustand stores
├── types/                  # TypeScript types/interfaces
├── lib/                    # Utility functions
└── styles/                 # Global styles
```

## 🚀 Khởi chạy

### Yêu cầu

- Node.js 18+
- npm / yarn / pnpm / bun

### Cài đặt

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Cài đặt dependencies**

   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

3. **Cấu hình biến môi trường**

   ```bash
   cp .env.example .env.local
   ```

   Chỉnh sửa file `.env.local`:

   ```env
   NEXT_PUBLIC_TMDB_ACCESS_TOKEN=YOUR_TMDB_ACCESS_TOKEN
   ```

4. **Chạy development server**

   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```

5. **Mở trình duyệt** tại [http://localhost:3000](http://localhost:3000)

## 📜 Scripts

| Command                | Mô tả                                 |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Chạy development server với Turbopack |
| `npm run build`        | Build production                      |
| `npm run start`        | Chạy production server                |
| `npm run lint`         | Kiểm tra linting với ESLint           |
| `npm run prettier`     | Kiểm tra formatting                   |
| `npm run prettier:fix` | Tự động fix formatting                |

## ⚙️ Biến môi trường

| Biến                            | Mô tả            |
| ------------------------------- | ---------------- |
| `NEXT_PUBLIC_TMDB_ACCESS_TOKEN` | URL của TMDB API |

## 📱 Responsive Design

Giao diện được thiết kế responsive, hỗ trợ:

- 📱 Mobile (< 640px)
- 📱 Tablet (640px - 1024px)
- 💻 Desktop (> 1024px)

## 📊 State Management

- **Zustand** cho global state (user info, auth state)
- **TanStack Query** cho server state (caching, fetching)

## 🏗️ Kiến trúc

```
┌──────────────────────────────────────────────────────────┐
│                       Client                             │
│  ┌────────────────────────────────────────────────────┐  │
│  │                  Next.js App                       │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │  │
│  │  │  Pages   │  │Components│  │     Hooks        │  │  │
│  │  └────┬─────┘  └────┬─────┘  └────────┬─────────┘  │  │
│  │       │             │                  │           │  │
│  │       └─────────────┼──────────────────┘           │  │
│  │                     ▼                              │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │              Services (Axios)                │  │  │
│  │  └──────────────────────┬───────────────────────┘  │  │
│  └─────────────────────────┼──────────────────────────┘  │
│                            │                             │
└────────────────────────────┼─────────────────────────────┘
                             ▼
                    ┌─────────────────┐
                    │     TMDB API    |
                    │                 │
                    └─────────────────┘
```

## 🔧 Development Tools

- **ESLint** - Linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Turbopack** - Fast bundling

## 📄 License

Dự án được phát triển cho mục đích học tập và nghiên cứu.
