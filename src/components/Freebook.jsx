import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../data/list.json';
import Cards from './Cards.jsx';
function Freebook (){
    const filterData = list.filter((data)=>data.category==="Free");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <>
          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10'>
            <h1 className='font-bold text-xl pb-2'>Free order books.</h1>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam quisquam dolore voluptatibus neque odio magnam aperiam fugit iste delectus!
            </p>
      
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </>
      );
      
}

export default Freebook
