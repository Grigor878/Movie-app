import React, { useState, useEffect } from "react";
import "./Feautured.scss";
import Data from "../../data.json";
import Main from "../main/Main";
import { BsPlayFill } from 'react-icons/bs';
import converted from '../Convert';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

const Feautured = () => {
  // sarqum enq titels = [] u sax titlenery mejy
  let titles = Data.map((el) => el.Title);
  let category = Data.map((el) => el.Category);
  let duration = Data.map((el) => el.Duration);
  let mpaRating = Data.map((el) => el.MpaRating);
  let releaseYear = Data.map((el) => el.ReleaseYear);

  const [myProfession, setMyProfession] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="section" >
      <div className="about">
        {myProfession || <Main />}

        {myProfession === titles[0] && (
          <div className='main_featured'>
            <h2>{category[0]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[0]}</p>
              <p>{mpaRating[0]}</p>
              <p>{converted(duration[0])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[1] && (
          <div className='main_featured'>
            <h2>{category[1]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[1]}</p>
              <p>{mpaRating[1]}</p>
              <p>{converted(duration[1])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[2] && (
          <div className='main_featured'>
            <h2>{category[2]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[2]}</p>
              <p>{mpaRating[2]}</p>
              <p>{converted(duration[2])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[3] && (
          <div className='main_featured'>
            <h2>{category[3]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[3]}</p>
              <p>{mpaRating[3]}</p>
              <p>{converted(duration[3])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[4] && (
          <div className='main_featured'>
            <h2>{category[4]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[4]}</p>
              <p>{mpaRating[4]}</p>
              <p>{converted(duration[4])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[5] && (
          <div className='main_featured'>
            <h2>{category[5]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[5]}</p>
              <p>{mpaRating[5]}</p>
              <p>{converted(duration[5])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[6] && (
          <div className='main_featured'>
            <h2>{category[6]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[6]}</p>
              <p>{mpaRating[6]}</p>
              <p>{converted(duration[6])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}

        {myProfession === titles[7] && (
          <div className='main_featured'>
            <h2>{category[7]}</h2>

            <div className='nav-info'>
              <p>{releaseYear[7]}</p>
              <p>{mpaRating[7]}</p>
              <p>{converted(duration[7])}</p>
            </div>

            <p className='nav-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <form>
              <button className='btn' type='submit'><BsPlayFill />Play</button>
              <button className='btn btn-blue' type='submit'>More Info</button>
            </form>
          </div>
        )}
      </div>

      <div className="btns">
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper"
        >
          {Data.filter((el) => el.isVisible === true).map((img) => (
            <SwiperSlide >
              <button
                className="btn-film"
                type="button"
                key={img.Id}
                onClick={() => setMyProfession(img.Title)}
              >
                <img src={require(`/src/assets/${img.CoverImage}`)} alt={img.TitleImage} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feautured;
