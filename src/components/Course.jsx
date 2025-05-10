import React, { useState, useEffect } from 'react'
// import list from '../data/list.json';
import Cards from './Cards';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Course(){
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
        const response = await axios.get('http://localhost:5000/book');
        console.log(response.data);
        setBook(response.data);
      }catch(err){
        console.log(err);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-24 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We are delighted to get you <span className='text-pink-500'>Here !!</span></h1>
          <p className='mt-10 md:mt-6'>
            Lorem ipsum dolor sit amet consectetu adipisicing elit. Quo sunt maiores distinctio corrupti quibusdam ex numquam nihil laudantium, architecto eaque iste. Enim quo adipisci dolores hic exercitationem consequatur ea odit nam officiis incidunt optio corporis rerum, fugiat autem voluptas amet facere quibusdam reiciendis est illo nisi alias? Fugiat, odit facere.

          </p>
          <Link to="/" >
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>

          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
