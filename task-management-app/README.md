# ReactJs (Vite JS) Task Management App

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS. This application helps users organize their tasks with features like priority levels, status tracking, and a clean, intuitive interface.

![Task Management App](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## Features

- ✨ Create, update, and delete tasks
- 🎯 Set task priorities (Low, Medium, High)
- 📊 Track task status (Todo, In Progress, Completed)
- 💾 State management using React Context
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔍 TypeScript for type safety
- 🎉 Lucide React icons for a polished look

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)
- ESLint (for code quality)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd task-management-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # React components
│   ├── TaskForm.tsx  # Task creation form
│   └── TaskList.tsx  # Task list display
├── context/          # React Context
│   └── TaskContext.tsx
├── types/           # TypeScript types
├── App.tsx         # Main application component
└── main.tsx       # Application entry point
```

## Features in Detail

### Task Management
- Create new tasks with title, description, and priority
- Update task status (Todo, In Progress, Completed)
- Delete tasks
- Visual indicators for priority levels
- Status icons for better visibility

### User Interface
- Clean and modern design
- Responsive layout that works on all devices
- Intuitive task creation form
- Visual feedback for task status and priority
- Smooth animations and transitions