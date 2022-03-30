import React from 'react';
import { useQuery } from '@apollo/client';
import { MEETUPS } from '../utils/queries';
import MeetupsList from './MeetupsList';
import foodBackground from './assets/foodBackground.jpg';


const Home = () => {
    const { loading, data } = useQuery(MEETUPS);
    const meetups = data?.meetups || [];
    console.log(meetups);

    return (
        <main>
            <div>
                <img style={{ height: '300px', width: '500px', }} src={foodBackground} alt="background image of food" />
            </div>
            <br></br>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <MeetupsList meetups={meetups} title="meetups..." />
                )}
            </div>
        </main>
    )
};

export default Home;