import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';
import { reorderTasks } from '../utils/reorder';
import { TaskMap } from '../types';
import { List } from './List';
import { ListForm } from './ListForm';

export const Board = () => {
  const [lists, setLists] = useState([]);
  const [taskMap, setTaskMap] = useState<TaskMap>({});


  useEffect(() => {
  console.log(lists);
  // setTaskMap();
  }, [lists]);


  return (
    <div className='board'>
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          // // dropped outside the list
          if (!destination) {
            return;
          }

          setTaskMap(reorderTasks(taskMap, source, destination));
        }}>
        <div>
          {Object.entries(taskMap).map(([key, value]) => (
            <List key={key} listId={key} listType='CARD' tasks={value} />
          ))}
        </div>
      </DragDropContext>
      <ListForm setLists={setLists}/>
    </div>
  );
};
