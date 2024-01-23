import React from 'react'
import { useEffect } from 'react';

const UTC = ({date}) => {

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
       <span className='text-sm px-1 '>02:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>03:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>03:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>04:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>04:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>05:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>05:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>06:00AM</span>
      </label>
      </li>
      {/* 2nd row  */}
      <li>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>06:30AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>07:00AM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>07:30AM</span>
      </label>
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
      <li>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>01:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>02:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>02:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>03:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>03:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>04:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>04:30PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1 '>05:00PM</span>
      </label>
      <label className=' items-center px-3'>
        <input type="checkbox"  />
       <span className='text-sm px-1'>05:30PM</span>
      </label>
      </li>
      </ul>
   
  )
}

export default UTC
