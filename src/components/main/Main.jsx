import React from 'react';
import './Main.scss';
import name from '../../assets/FeaturedTitleImage.png';
import DataFeautured from '../../dataFeautured.json'
import { BsPlayFill } from 'react-icons/bs';
import converted from '../Convert'

function Main() {

    return (
        <main>
            <div className='main_featured'>
                <h2>{DataFeautured[0].Category}</h2>
                <img src={name} alt="movie-name" />

                <div className='nav-info'>
                    <p>{DataFeautured[0].ReleaseYear}</p>
                    <p>{DataFeautured[0].MpaRating}</p>
                    <p>{converted(DataFeautured[0].Duration)}</p>
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
