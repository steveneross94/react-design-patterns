import { useState, useEffect } from "react/cjs/react.development"
import axios from "axios"


export const useResource = resourceUrl => {
  const [resource, setResource] = useState(null);
  
  useEffect(() => {
    (async () => {
      const resp = await axios.get(resourceUrl)
      setResource(resp.data);
    })();
  }, [resourceUrl])

  return resource
}