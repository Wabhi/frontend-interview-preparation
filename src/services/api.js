export const fetchUser = async (userId) => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

export const sendEmail = (to, subject, body) => {
  console.log(`Sending email to ${to}: ${subject}`);
  // Actual email sending logic
  return { sent: true, timestamp: Date.now() };
};

export const logger = {
  info: (message) => console.log(`INFO: ${message}`),
  error: (message) => console.error(`ERROR: ${message}`),
  warn: (message) => console.warn(`WARN: ${message}`),
};