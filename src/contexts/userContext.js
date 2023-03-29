import { createContext, useEffect, useState } from 'react';
import { Screen } from '../components/Screen';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(undefined);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('myceliumUserData');

    if (data) {
      setUserData(JSON.parse(data));
    } else {
      setUserData(undefined);
    }

    setHasLoaded(true);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>{hasLoaded ? children : <Screen />}</UserContext.Provider>
  );
}
