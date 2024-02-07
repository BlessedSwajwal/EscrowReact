import { useEffect } from "react";
import CardContainer from "../components/CardContainer";
import MainPageContainer from "../components/MainPageContainer";
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { getUserType } from "../api/consumer";

function LandingPage() {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      getUserType == "consumer" ? navigate("/Consumer") : navigate("/Provider");
    }
  });
  return (
    <>
      <MainPageContainer />
      <CardContainer />
    </>
  );
}

export default LandingPage;
