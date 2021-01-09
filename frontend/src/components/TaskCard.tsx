import * as React from "react";
import { Task } from "../types";

interface Props {
    task: Task;
}

export const TaskCard: React.FC<Props> = ({task}) => {

    const {
        id,
        title,
        description
    } = task;

    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );

}