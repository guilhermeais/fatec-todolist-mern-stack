const API_URL = process.env.REACT_APP_API_URL

export async function getAllTasks() {
  const response = await fetch(`${API_URL}/api/tasks`)
  return await response.json()
}

export async function createTask(data) {
  const response = await fetch(`${API_URL}/api/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: data }),
  })
  return await response.json()
}

export async function deleteTask(taskId) {
  const response = await fetch(`${API_URL}/api/task/${taskId}`, {
    method: 'DELETE',
  })
  return await response.json()
}

export async function editTask(data) {
  const response = await fetch(`${API_URL}/api/task`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: data }),
  })
  return await response.json()
}

export async function fetchSettings() {
  const response = await fetch(`${API_URL}/api/settings`)
  return await response.json()
}
