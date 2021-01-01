import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Board() {
    const [lists, setLists] = useState({});
    const [tasks, setTasks] = useState([]);

    return (
        <div className="board">
            <DragDropContext>


                



            </DragDropContext>

        </div>
    );
} 

