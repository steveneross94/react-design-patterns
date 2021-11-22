import axios from "axios";
import React, { useState, useEffect } from "react";

export const withUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState();

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`)
        setUser(response.data)
      })();
    })

    return <Component {...props} user={user} />

  }
}