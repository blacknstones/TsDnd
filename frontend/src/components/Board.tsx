import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { reorderTasks } from "../reorder";
import { TaskMap } from "../types";

export default function Board() {
   const [taskMap, setTasks] = useState<TaskMap>({
   });

    return (
        <div className="board">
            <DragDropContext
             onDragEnd={({ destination, source }) => {
                // // dropped outside the list
                if (!destination) {
                  return;
                }
        
                setTasks(reorderTasks(tasks, source, destination));
              }}
            >
                


                



            </DragDropContext>

        </div>
    );
} 

