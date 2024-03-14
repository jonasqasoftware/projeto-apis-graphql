document.addEventListener('DOMContentLoaded', async () => {
  const taskList = document.getElementById('task-list');

  try {
      const response = await fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: '{ tasks { id, title, completed } }' })
      });

      const { data } = await response.json();
      const tasks = data.tasks;

      tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = `${task.title} - ${task.completed ? 'Completed' : 'Pending'}`;
          taskList.appendChild(li);
      });
  } catch (error) {
      console.error('Error fetching tasks:', error);
  }
});
