// src/components/UsersList.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  // Načíst uživatele z Firebase
  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  // Přepínání účasti
  const toggleAttendance = async (userId, currentStatus) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      attending: !currentStatus
    });

    setUsers(prev =>
      prev.map(user =>
        user.id === userId ? { ...user, attending: !currentStatus } : user
      )
    );
  };

  return (
    <div>
      <h2>Seznam účastníků</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <label>
              <input
                type="checkbox"
                checked={user.attending || false}
                onChange={() => toggleAttendance(user.id, user.attending)}
              />
              {user.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
