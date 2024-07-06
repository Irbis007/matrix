const API_BASE_URL = 'https://raw.githubusercontent.com';



export async function register(data) {
  const response = await fetch(`${API_BASE_URL}/api/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
     console.log(response, 'err')
  }
  return await response.json();
}
