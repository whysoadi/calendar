import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import IST from './IST/IST';
import IST2 from './IST/IST2';
import IST3 from './IST/IST3';
import IST4 from './IST/IST4';
import IST5 from './IST/IST5';
import UTC from './UTC';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

var val1=false, val2=false, val3=false, val4=false, val5=false; 

const Homepage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [monday, setMonday] = useState(new Date());
    const [tuesday, setTuesday] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
    const [wednesday, setWednesday] = useState(new Date(currentDate.getTime() + 2* 24 * 60 * 60 * 1000));
    const [thursday, setThursday] = useState(new Date(currentDate.getTime() + 3* 24 * 60 * 60 * 1000));
    const [friday, setFriday] = useState(new Date(currentDate.getTime() + 4* 24 * 60 * 60 * 1000 ));
    const [centerdate, setCenterdate]= useState(new Date());

    const [ischecked, setIschecked]= useState(false);
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
        newMonday.setDate(currentDate.getDate() - 7);
        setMonday(newMonday);

        const newWednesday = new Date(currentDate);
        newWednesday.setDate(currentDate.getDate() - 5);
        setWednesday(newWednesday);

        const newThursday = new Date(currentDate);
        newThursday.setDate(currentDate.getDate() - 4);
        setThursday(newThursday);

        const newFriday = new Date(currentDate);
        newFriday.setDate(currentDate.getDate() - 3);
        setFriday(newFriday);

        const newTuesday = new Date(currentDate);
        newTuesday.setDate(currentDate.getDate() - 6);
        setTuesday(newTuesday);
      };

      const handleNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);

        const newMonday = new Date(currentDate);
        newMonday.setDate(currentDate.getDate() + 7);
        setMonday(newMonday);

        const newTuesday = new Date(currentDate);
        newTuesday.setDate(currentDate.getDate() + 8);
        setTuesday(newTuesday);

        const newWednesday = new Date(currentDate);
        newWednesday.setDate(currentDate.getDate() + 9);
        setWednesday(newWednesday);

        const newThursday = new Date(currentDate);
        newThursday.setDate(currentDate.getDate() + 10);
        setThursday(newThursday);

        const newFriday = new Date(currentDate);
        newFriday.setDate(currentDate.getDate() + 11);
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

const [newdata, setNewdata]= useState([]);

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

       
    <div className='flex justify-between my-4 lg:mx-2 mx-1 px-4'>
        {/* left button  */}
   <button className='py-2 lg:px-4 px-2 bg-blue-600 rounded-lg  text-white' onClick={handlePrevWeek}>
     Previous week
   </button>
   {/* date  */}
   <div className='font-bold mx-2'>
   {formatDate(centerdate)}
   </div>
   {/* right button  */}
   <button className='py-2 lg:px-4 px-2 bg-blue-600 rounded-lg  text-white' onClick={handleNextWeek}>
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
{/* <div>{newdata?.map((index, key)=>{
       return(
        <div key={key}>
        
      </div>
       )
})}</div> */}


<div className=' flex py-3'>
    <div className='lg:w-1/12 w-2/12 bg-gray-300 flex-col text-center py-4 '>
<p>MON</p>
<p> {formatDated(monday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {newdata?.map((index, key)=>{
       return(
        <div key={key}>
          {(formatDated(monday)==(index.date)) && (val1=true)}
      </div>
       )
})}
        {monday>=centerdate?(change?<>{val1? <IST date={formatDated(monday)}/>:<IST/> } </>:<UTC/>):'Past'} 
    </div>
    
</div>

<div className=' flex py-3'>
    <div className='lg:w-1/12 w-2/12 bg-gray-300 flex-col text-center py-4'>
<p>TUE</p>
<p>  {formatDated(tuesday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {newdata?.map((index, key)=>{
       return(
        <div key={key}>
          {val2=formatDated(tuesday)==(index.date)}
      </div>
       )
})}
        {tuesday>=centerdate?(change?<>{val2? <IST2 date={formatDated(tuesday)}/>:<IST2/> } </>:<UTC/>):'Past'} 
    </div>
</div>

<div className=' flex py-3' >
    <div className='lg:w-1/12 w-2/12 bg-gray-300 flex-col text-center py-4'>
<p>WED</p>
<p> {formatDated(wednesday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {newdata?.map((index, key)=>{
       return(
        <div key={key}>
          {(formatDated(wednesday)==(index.date)) && (val3=true)}
          {/* {console.log(val3)} */}
      </div>
       )
})}
        {wednesday>=centerdate?(change?<>{val3? <IST3 date={formatDated(wednesday)}/>:<IST3/> } </>:<UTC/>):'Past'} 
      
    </div>
</div>

<div className=' flex py-3'>
    <div className='lg:w-1/12 w-2/12 bg-gray-300 flex-col text-center py-4'>
<p>THUR</p>
<p> {formatDated(thursday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {newdata?.map((index, key)=>{
       return(
        <div key={key}>
          {formatDated(thursday)==(index.date)&&(val4=true)}
      </div>
       )
})}
        {thursday>=centerdate?(change?<>{val4? <IST4 date={formatDated(thursday)}/>:<IST4/> } </>:<UTC/>):'Past'}
    </div>
</div>

<div className=' flex py-3'>
    <div className='lg:w-1/12 w-2/12 bg-gray-300 flex-col text-center py-4'>
<p>FRI</p>
<p> {formatDated(friday)}</p>
    </div>
    <div className='w-11/12 text-center'>
    {newdata?.map((index, key)=>{
       return(
        <div key={key}>
          {(formatDated(friday)==(index.date)) && (val5=true)}
      </div>
       )
})}
        {friday>=centerdate?(change?<>{val5? <IST5 date={formatDated(friday)}/>:<IST5/> } </>:<UTC/>):'Past'} 
      
    </div>
</div>

    </div>
  )
}

export default Homepage
