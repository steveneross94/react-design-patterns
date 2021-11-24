import { useState, useEffect } from "react/cjs/react.development"
import axios from "axios"


export const useUser = userId => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`/users/${userId}`)
      setUser(resp.data);
    })();
  }, [userId])

  return user
}