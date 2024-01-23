import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import IST from './IST';
import UTC from './UTC';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Homepage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [monday, setMonday] = useState(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000));
    const [tuesday, setTuesday] = useState(new Date());
    const [wednesday, setWednesday] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
    const [thursday, setThursday] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000 * 2));
    const [friday, setFriday] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000 * 3));

    const [timezone, setTimezone] = useState(20);
    const [change,setChange]= useState(true)

    const handleChange = (event) => {
      setTimezone(event.target.value);
      setChange(!change);
    };

    const handlePrevWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(newDate);
        
        const newMonday = new Date(currentDate);
        newMonday.setDate(currentDate.getDate() - 8);
        setMonday(newMonday);

        const newWednesday = new Date(currentDate);
        newWednesday.setDate(currentDate.getDate() - 6);
        setWednesday(newWednesday);

        const newThursday = new Date(currentDate);
        newThursday.setDate(currentDate.getDate() - 5);
        setThursday(newThursday);

        const newFriday = new Date(currentDate);
        newFriday.setDate(currentDate.getDate() - 4);
        setFriday(newFriday);

        const newTuesday = new Date(currentDate);
        newTuesday.setDate(currentDate.getDate() - 7);
        setTuesday(newTuesday);
      };

      const handleNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);

        const newMonday = new Date(currentDate);
        newMonday.setDate(currentDate.getDate() + 6);
        setMonday(newMonday);

        const newTuesday = new Date(currentDate);
        newTuesday.setDate(currentDate.getDate() + 7);
        setTuesday(newTuesday);

        const newWednesday = new Date(currentDate);
        newWednesday.setDate(currentDate.getDate() + 8);
        setWednesday(newWednesday);

        const newThursday = new Date(currentDate);
        newThursday.setDate(currentDate.getDate() + 9);
        setThursday(newThursday);

        const newFriday = new Date(currentDate);
        newFriday.setDate(currentDate.getDate() + 10);
        setFriday(newFriday);
        
      };

      const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };

      const formatDated = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
      };

const [newdata, setNewdata]= useState('');

useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('./file.json'); // Replace with the correct path
         const data= await response.json();
         setNewdata(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
}, []);



      

  return (
    <div className='w-full h-full'>

        {/* {data.map(data)} */}
    <div className='flex justify-between my-4 mx-2 px-4'>
        {/* left button  */}
   <button className='py-2 px-4 bg-blue-600 rounded-lg  text-white' onClick={handlePrevWeek}>
     Previous week
   </button>
   {/* date  */}
   <div className='font-bold'>
   {formatDate(currentDate)}
   </div>
   {/* right button  */}
   <button className='py-2 px-4 bg-blue-600 rounded-lg  text-white' onClick={handleNextWeek}>
    Next Week
   </button>
    </div>

{/* timezone  */}
<div className='px-4 pt-1 pb-4'>
    Timezone:
    {/* dropdown */}
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Timezone</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timezone}
          label="timezone"
          onChange={handleChange}
        >
          <MenuItem value={10} >UTC-0 (Coordinated Universal Time)</MenuItem>
          <MenuItem value={20} >IST (Indian Standard Time)</MenuItem>
        </Select>
      </FormControl>
    </Box>
</div>

{/* days  */}


<div className=' flex py-3'>
    <div className='w-1/12 bg-gray-300 flex-col text-center py-4 '>
<p>MON</p>
<p> {formatDated(monday)}</p>
    </div>
    <div className='w-11/12 text-center'>
        {change?<IST />:<UTC/>} 
    </div>
</div>

<div className=' flex py-3'>
    <div className='w-1/12 bg-gray-300 flex-col text-center py-1'>
<p>TUE</p>
<p>  {formatDated(tuesday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {change?<IST />:<UTC/>} 
    </div>
</div>

<div className=' flex py-3' >
    <div className='w-1/12 bg-gray-300 flex-col text-center py-4'>
<p>WED</p>
<p> {formatDated(wednesday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {change?<IST />:<UTC/>} 
    </div>
</div>

<div className=' flex py-3'>
    <div className='w-1/12 bg-gray-300 flex-col text-center py-4'>
<p>THUR</p>
<p> {formatDated(thursday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {change?<IST />:<UTC/>} 
    </div>
</div>

<div className=' flex py-3'>
    <div className='w-1/12 bg-gray-300 flex-col text-center py-4'>
<p>FRI</p>
<p> {formatDated(friday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {change?<IST />:<UTC/>} 
    </div>
</div>

    </div>
  )
}

export default Homepage
