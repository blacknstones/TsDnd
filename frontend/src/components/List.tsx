import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Task } from "../types";
import { TaskCard } from "./TaskCard";
import { TaskForm} from "./TaskForm";

interface Props {
  tasks: Task[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export const List = ({ listId, listType, tasks }: Props) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="vertical"
      isCombineEnabled={false}
    >
      {(dropProvided) => (
        <div {...dropProvided.droppableProps}>
          <div ref={dropProvided.innerRef}>
            <TaskForm />
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(dragProvided) => (
                  <div
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                    ref={dragProvided.innerRef}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
