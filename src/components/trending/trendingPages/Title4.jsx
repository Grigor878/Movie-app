import React, { useEffect } from 'react';
import { Trendingnow } from '../../../data';
import { BsPlayFill } from 'react-icons/bs';

function Title4() {

    const converted = function secondsToTime(duration) {
        const hours = Math.floor(duration / (60 * 60));
        const divisor_for_minutes = duration % (60 * 60);
        const minutes = Math.floor(divisor_for_minutes / 60);

        return hours + "h " + minutes + "m";
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='title4'>
            <div className='main_featured'>
                <h2>{Trendingnow[3].Category}</h2>

                <div className='nav-info'>
                    <p>{Trendingnow[3].ReleaseYear}</p>
                    <p>{Trendingnow[3].MpaRating}</p>
                    <p>{converted(Trendingnow[3].Duration)}</p>
                </div>

                <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <form action="">
                    <button className='btn' type='submit'><BsPlayFill />Play</button>
                    <button className='btn btn-blue' type='submit'>More Info</button>
                </form>
            </div>
        </div>
    )
}

export default Title4