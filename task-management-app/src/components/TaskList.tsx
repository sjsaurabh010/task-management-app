import React from 'react';
import { CheckCircle2, Clock, Edit2, Trash2 } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types';

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusIcons = {
  todo: Clock,
  'in-progress': Edit2,
  completed: CheckCircle2,
};

export function TaskList() {
  const { tasks, updateTask, deleteTask } = useTaskContext();

  const handleStatusChange = (task: Task, status: Task['status']) => {
    updateTask(task.id, { status });
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => {
        const StatusIcon = statusIcons[task.status];
        
        return (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                <p className="mt-1 text-gray-600">{task.description}</p>
                
                <div className="mt-4 flex items-center space-x-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                  
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task, e.target.value as Task['status'])}
                    className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <StatusIcon className="w-5 h-5 text-gray-400" />
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      
      {tasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tasks yet. Add one to get started!</p>
        </div>
      )}
    </div>
  );
}