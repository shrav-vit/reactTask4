import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.users))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <table border={1}>
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  );
}

export default App;