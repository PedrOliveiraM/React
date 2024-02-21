import React from "react";
import Button from "./Button";
import "./TaskDetails.css";
import { useNavigate, useParams } from "react-router-dom";

const TaskDetails = () => {
  const navigate = useNavigate();

  const handleTaskGoBackClick = () => {
    console.log("Go back");
    navigate(`${"/"}`);
  };

  const params = useParams();

  return (
    <>
      <div className="button-container">
        <Button onClick={handleTaskGoBackClick}>Voltar</Button>
      </div>

      <div className="details-container">
        {/* Adicione um fallback para evitar erro se TaskTitle não estiver presente */}
        <h2>{params.TaskTitle || "Título não disponível"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam
          cum earum dignissimos consectetur facilis amet, labore quam unde.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
