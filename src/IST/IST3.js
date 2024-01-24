import React, { useState } from 'react'
import { useEffect } from 'react';

var timeout = null;
var dated=null;
const IST3 = ({date}) => {


  const [apidata, setApidata]= useState([])
  const [usertime, setUsertime]= useState('')

  console.log(date)
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('./file.json'); // Replace with the correct path
              const data = await response.json();
              setApidata(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    }, []);

  return (
    
    <div>
         <div>
            {apidata?.map((index, key)=>{
                <div>
                {(index.date==date)? (timeout=(index.time)): null}
                {(index.date==date)? (dated=(index.date)) :null}
                </div>
            })}
         </div>

   
      <ul className='text-left px-12'>
            <li>
    <label className=' px-3'>
    <input type="checkbox" checked={timeout=="08:00AM" && (dated==date)} />
       <span className='text-sm px-1 '>08:00AM</span>

      </label>
     
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>08:30AM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>09:00AM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>09:30AM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>10:00AM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>10:30AM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>11:00AM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>11:30AM</span>
      </label>
      </li>
      {/* 2nd row  */}
      <li>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>12:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>12:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>01:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>01:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>02:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>02:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>03:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>03:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>04:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>04:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>05:00PM</span>
      </label>
      </li>
      <li>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>07:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>07:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>08:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>08:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>09:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>09:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>10:00PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>10:30PM</span>
      </label>
      <label className=' px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>11:00PM</span>
      </label>
      </li>
      </ul>
      </div>
   
  )
}

export default IST3
