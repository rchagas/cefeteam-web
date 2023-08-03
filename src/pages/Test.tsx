import { useCallback, useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Test() {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get("users");
    setUsers(response.data);
  }, [setUsers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user["id"]}>
            <p>id: {user["id"]}</p>
            <p>nome: {user["name"]}</p>
            <p>tipo: {user["userType"]}</p>
          </div>
        );
      })}
    </div>
  );
}
