export const fetchAIInfo = async () => {
  const response = await fetch('/api/ai-info');
  if (!response.ok) {
    throw new Error('Failed to fetch AI info');
  }
  return response.json();
};