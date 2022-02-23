import React from "react";
import { NavLink } from 'react-router-dom';
import './Trending.scss';
import { Trendingnow } from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

function Trending() {
  return (
    <div className="tending">
      <h2>Trending Now</h2>
      <br/>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >

        <SwiperSlide >
          <NavLink to='/title1' exact>
            <img src={Trendingnow[0].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title2' exact>
            <img src={Trendingnow[1].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title3' exact>
            <img src={Trendingnow[2].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title4' exact>
            <img src={Trendingnow[3].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title5' exact>
            <img src={Trendingnow[4].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title6' exact>
            <img src={Trendingnow[5].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title7' exact>
            <img src={Trendingnow[6].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title8' exact>
            <img src={Trendingnow[7].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title1' exact>
            <img src={Trendingnow[0].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title2' exact>
            <img src={Trendingnow[1].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title3' exact>
            <img src={Trendingnow[2].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title4' exact>
            <img src={Trendingnow[3].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title5' exact>
            <img src={Trendingnow[4].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title6' exact>
            <img src={Trendingnow[5].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title7' exact>
            <img src={Trendingnow[6].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title8' exact>
            <img src={Trendingnow[7].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title7' exact>
            <img src={Trendingnow[6].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to='/title8' exact>
            <img src={Trendingnow[7].TitleImage} alt="Movie-img" />
          </NavLink>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Trending;