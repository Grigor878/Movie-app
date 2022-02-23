import React from 'react';
import './Main.scss';
import name from '../../assets/FeaturedTitleImage.png';
import { Featured } from '../../data';
import { BsPlayFill } from 'react-icons/bs';


function Main() {

    const converted = function secondsToTime(duration) {
        const hours = Math.floor(duration / (60 * 60));
        const divisor_for_minutes = duration % (60 * 60);
        const minutes = Math.floor(divisor_for_minutes / 60);

        return hours + "h " + minutes + "m";
    }


    return (
        <main>
            <div className='main_featured'>
                <h2>{Featured.Category}</h2>
                <img src={name} alt="movie-name" />

                <div className='nav-info'>
                    <p>{Featured.ReleaseYear}</p>
                    <p>{Featured.MpaRating}</p>
                    <p>{converted(Featured.Duration)}</p>
                </div>

                <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <form action="">
                    <button className='btn' type='submit'><BsPlayFill />Play</button>
                    <button className='btn btn-blue' type='submit'>More Info</button>
                </form>
            </div>
        </main>
    )
}

export default Main;
