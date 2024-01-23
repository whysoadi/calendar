import React from 'react'
import { useEffect } from 'react';

const IST = ({date}) => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch('./file.json'); // Replace with the correct path
    //           const data = await response.json();
    //           console.log(date===data[0].date)
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //       };
    //       fetchData();
    // }, []);

  return (
      <ul>
            <li>
    <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>08:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>08:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>09:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>09:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>10:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>10:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>11:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>11:30AM</span>
      </label>
      </li>
      {/* 2nd row  */}
      <li>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>12:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>12:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>01:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>01:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>02:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>02:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>03:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>03:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>04:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>04:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>05:00PM</span>
      </label>
      </li>
      <li>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>07:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>07:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>08:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>08:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>09:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>09:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>10:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>10:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>11:00PM</span>
      </label>
      </li>
      </ul>
   
  )
}

export default IST
