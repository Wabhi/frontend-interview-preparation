import React from "react";
import useUsers from "../../hooks/useUsers";

export default function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <p style={{ padding: 20 }}>Loading users...</p>;
  }

  if (error) {
    return (
      <div style={{ padding: 20, color: "red" }}>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>User Names</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}