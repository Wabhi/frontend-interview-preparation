import { useState,useEffect } from "react";
function FetchMock({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div role="alert">Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
      <a>User: {user.username}</a>
    </div>
  );
}

export default FetchMock;