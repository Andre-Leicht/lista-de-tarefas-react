import React from "react";
import { useParams } from 'react-router-dom';

import Button from './Button.css';

const TaskDetails = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
        <div className="back-button-container">
            <Button>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi pariatur soluta voluptatum porro saepe officia voluptatem dicta provident! Omnis, quisquam! Id rerum esse ratione delectus, nulla blanditiis aut aliquid deserunt?</p>
        </div>
        </>
    );
}

export default TaskDetails;