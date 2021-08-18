import * as React from 'react';
import axios from 'axios';

export const ListForm = () => {
    const [title, setTitle] = React.useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.post('/create-list', {
            title,
            taskOrder: []
        });
        console.log(response);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="new List..." value={title} onChange={e => setTitle(e.target.value)} required/>
                <input type="submit" value="Add"/>

                
            </form>
        </div>
    );
}