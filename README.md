# RealTime Collaborative Whiteboard

A real-time collaborative whiteboard app where multiple users can draw, sketch, and brainstorm together.

---

## Features

- **Real-time collaboration** — multiple users can draw on the same board simultaneously, with live cursor tracking and presence indicators
- **Drawing tools** — freehand pen, eraser, and shape tools (rectangle, circle, triangle, line, arrow, diamond, star)

- **Undo / Redo** — full history stack, also synced across collaborators
- **Pan & Zoom** — infinite canvas with pinch-to-zoom and spacebar-to-pan support
- **Board sharing** — share boards via a unique code; grant viewer or editor roles
- **Notifications** — access request system with in-app notifications
- **Persistence** — boards auto-save to MongoDB, including a thumbnail preview
- **Dark mode** — theme toggle baked in

---

## Tech Stack

**Frontend**

- React 19 + Vite
- Tailwind CSS + shadcn/ui
- Socket.io client
- Framer Motion

**Backend**

- Node.js + Express 5
- Socket.io
- MongoDB + Mongoose
- JWT authentication


---

## Project Structure

```
Whiteboard/
├── frontend/          # React app (Vite)
│   └── src/
│       ├── components/    # UI components (Canvas, Toolbar, BoardHeader, etc.)
│       ├── hooks/         # useCanvas, useCamera, useBoardSocket, useHistory, ...
│       ├── pages/         # Login, Home, WhiteboardPage, AccountSettings
│       ├── api/           # Axios API clients
│       └── utils/         # Shape recognizer, geometry helpers, constants
├── backend/           # Express + Socket.io server
│   ├── controllers/   # Auth, whiteboard, notification logic
│   ├── models/        # Mongoose schemas (User, Whiteboard, Notification)
│   ├── routes/        # REST endpoints
│   ├── socket/        # Socket event handlers
│   └── services/      # Token, password, share-code utilities

```

---

## Getting Started

### Prerequisites

- Node.js + npm (or pnpm)
- MongoDB instance

### Backend

```bash
cd backend
pnpm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
CLIENT_URL=http://localhost:5173
```

```bash
pnpm dev
```

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Create a `.env.local` pointing to your backend URL if needed.



---

## License

ISC
