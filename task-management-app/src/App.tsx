import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <CheckSquare className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          </div>

          <div className="grid gap-8">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;