import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      const isLoggedIn = localStorage.getItem("auth-token");
      if (!isLoggedIn) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  return isLoggedIn;
};
