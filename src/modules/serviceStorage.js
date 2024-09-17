const getUserKey = () => localStorage.getItem('username') || 'defaultUser';

export const saveTasksToStorage = (tasks) => {
  const userKey = getUserKey();
  localStorage.setItem(`tasks_${userKey}`, JSON.stringify(tasks));
};

export const getTasksFromStorage = () => {
  const userKey = getUserKey();
  const tasks = localStorage.getItem(`tasks_${userKey}`);
  return tasks ? JSON.parse(tasks) : [];
};

