import * as React from 'react';
import axios from 'axios';
import {List} from '../types';

type Props = {
    setLists: (lists: never[]) => void
}

export const ListForm = ({setLists}: Props) => {
    const [title, setTitle] = React.useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.post('/lists', {
            title,
            taskOrder: []
        });
        console.log(response);
        // todo: replace with redux
        setLists(response.data.Lists);
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