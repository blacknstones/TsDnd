import axios from 'axios';
import { useState, useEffect } from 'react';

export const TaskForm = () => {
    const [title, setTitle] = useState<string>("");
    

    const handleSubmit = () => {
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="new task..." value={title} onChange={e => setTitle(e.target.value)} required/>
                <input type="submit" value="Add"/>

                
            </form>
        </div>
    );
}