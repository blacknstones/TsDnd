import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderTasks } from "../reorder";
import { TaskMap } from "../types";
import { List } from "./List";

export const Board:React.FC = () => {
  const [lists, setLists] = useState([]);
  const [taskMap, setTasks] = useState({});

  return (
    <div className="board">
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          // // dropped outside the list
          if (!destination) {
            return;
          }

          setTasks(reorderTasks(taskMap, source, destination));
        }}
      >
        <div>
          {Object.entries(taskMap).map((key, value) => (
            <List 
                internalScroll 
                key={key} 
                listId={key}   
                listType="CARD" 
                tasks={value} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
