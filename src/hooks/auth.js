import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();

  useEffect(() => {
    const handleStorage = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        history.push("/login");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [history]);
};
