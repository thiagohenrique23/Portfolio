import { Button } from "@mui/material";
import React from "react";
import { ErrorImage, ErrorPageContainer, TitleCard } from "./styled";
import error from "../../assets/error.png"
import { useNavigate } from "react-router-dom";
import { goToMain } from "../../routes/coordinator";

const ErrorPage = () => {

  const Navigate = useNavigate()

  return (
  <ErrorPageContainer>
    <TitleCard>Ops parece que aconteceu um erro na página</TitleCard>
    <ErrorImage src={error}/> 
    <Button onClick={() => goToMain(Navigate)}>Volte para página principal</Button>
  </ErrorPageContainer>
  )
}

export default ErrorPage