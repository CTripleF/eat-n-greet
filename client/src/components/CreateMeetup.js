import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { ADD_MEETUPS } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Auth from '../utils/auth';
import Home from './Home'

const auth = require('../utils/auth');


const CreateMeetup = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [username, setUsername] = useState('');
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // add image
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const [addMeetup, { error }] = useMutation(ADD_MEETUPS, {

        refetchQueries: [
            "meetups"
        ],
    })



    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);

        await addMeetup({
            variables: {
                title: title,
                body: body,
                username: username
            }
        })

        history.push('/');
        console.log(error);
    }

    if (!token) {
        return (<Home />)
    } else {
    return (
        <div className="create">
            <h2>Add a New Meetup</h2>
            <form onSubmit={handleSubmit}>
                <label>Meetup Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Meetup Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                {!isPending && <button>Add Meetup</button>}
                {isPending && <button disabled>Adding Meetup</button>}
            </form>
        </div>
    );
    }
}
// add form reset once data has been entered
// if failed/successful routes
export default CreateMeetup;