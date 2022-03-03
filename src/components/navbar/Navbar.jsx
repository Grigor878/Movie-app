import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';
import searchIcon from '../../assets/icons/search.png';
import homeIcon from '../../assets/icons/home.png';
import tvIcon from '../../assets/icons/tv.png';
import movieIcon from '../../assets/icons/movie.png';
import genresIcon from '../../assets/icons/genres.png';
import laterIcon from '../../assets/icons/later.png';
import user from '../../assets/icons/user.png'

function Navbar() {
    return (
        <nav>
            <div className='nav_user'>
                <img src={user} alt="user-pic" />
                <h6>Daniel</h6>
            </div>

            <div className='nav_menu'>
                <NavLink activeStyle={{
                    background: "#272B47",
                    textDecoration: "none"
                }}
                    className='navlink'
                    to="/search"
                    exact>
                    <img src={searchIcon} alt="menu-icon" />
                    <p className="nav-p ">Search</p>
                </NavLink>

                <NavLink activeStyle={{
                    background: "#272B47",
                    textDecoration: "none"
                }}
                    className='navlink'
                    to="/"
                    exact>
                    <img src={homeIcon} alt="menu-icon" />
                    <p className="nav-p " >
                        Home
                    </p>
                </NavLink>

                <NavLink
                    activeStyle={{
                        background: "#272B47",
                        textDecoration: "none"
                    }}
                    className='navlink'
                    to="/tv-shows"
                    exact>
                    <img src={tvIcon} alt="menu-icon" />
                    <p className="nav-p " >
                       Shows
                    </p>
                </NavLink>

                <NavLink
                    activeStyle={{
                        background: "#272B47",
                        textDecoration: "none"
                    }}
                    className='navlink'
                    to="/trending-now"
                    exact>
                    <img src={movieIcon} alt="menu-icon" />
                    <p className="nav-p " >
                        Movies
                    </p>
                </NavLink>

                <NavLink
                    activeStyle={{
                        background: "#272B47",
                        textDecoration: "none"
                    }}
                    className='navlink'
                    to="/genres"
                    exact
                >
                    <img src={genresIcon} alt="menu-icon" />
                    <p className="nav-p ">
                        Genres
                    </p>
                </NavLink>

                <NavLink
                    activeStyle={{
                        background: "#272B47",
                        textDecoration: "none"
                    }}
                    className='navlink'
                    to="/watch-later"
                    exact>
                    <img src={laterIcon} alt="menu-icon" />
                    <p className="nav-p ">
                        Later
                    </p>
                </NavLink>
            </div>

            <div className='nav_links'>
                <Link className='link' to="/">Language</Link>
                <Link className='link' to="/">Help</Link>
                <Link className='link' to="/">Exit</Link>
            </div>
        </nav>
    )
}

export default Navbar