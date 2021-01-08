import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

interface Props {
  tasks: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export const AuthorList: React.FC<Props> = ({ listId, listType, tasks }) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="vertical"
      isCombineEnabled={false}
    >
      {(dropProvided) => (
        <div {...dropProvided.droppableProps}>
          <div>
            <div>
              <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable 
                    key={task} 
                    draggableId={task} 
                    index={index}>
                    {(dragProvided) => (
                      <div
                        {...dragProvided.dragHandleProps}
                        {...dragProvided.draggableProps}
                        ref={dragProvided.innerRef}
                      >
                        <Task task={task}/>
                      </div>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};
