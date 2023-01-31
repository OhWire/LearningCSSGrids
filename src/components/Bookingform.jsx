import React from 'react'
import { ReactDOM } from 'react';
import { useState } from 'react';



const availableTimes = [
  {value: "17:00", text: "17:00"},
  {value: "18:00", text: "18:00"},
  {value: "19:00", text: "19:00"},
  {value: "20:00", text: "20:00"},
  {value: "21:00", text: "21:00"},
  {value: "22:00", text: "22:00"},
]

const Select = ({value, options, onChange}) => {
  return(
    <select value={value}  onChange={onChange}>
      {options.map(option => {
          return(<option key={option.value} value={option.value}>{option.text}</option>)
      })}
    </select>
  )
}

const Bookingform = () => {
  const[resdate, setResdate] = useState("");
  const[guests, setGuests] = useState("");
  
  const[restime, setRestime] = useState("17:00");


  const handleChange = e => setRestime(e.target.value);

  const handleSubmit = (e)  => {
    e.preventDefault();
    const data = {
      Reservation_Time: restime
    }
    const json = JSON.stringify(data);
    console.clear()
    console.log(json)
    setResdate("");
    console.log("Form submitted!");
  }



  return (
    <>
      <div className='BookingForm'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='Field'>
             

              <label htmlFor='res-date'>Choose Date</label>
                <input  id="res-date" type="date" placeholder='res-date' name='res-date' value={resdate} onChange={(e)=> setResdate(e.target.value)}></input>

              <label htmlFor='res-time'>Choose time:</label>
                <Select id="restime" placeholder="restime" name="restime" value={restime} options={availableTimes} onChange={handleChange} />


              <label htmlFor="guests">Number of Guests</label>
                <select id="guests" placeholder='guests' name='guests' value={guests} onChange={e => setGuests(e.target.value)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>

              <label htmlFor="occasion">Occasion</label>
                  <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </select>
            </div>
            <button type='submit'>Submit</button>
          </fieldset>
         
        </form>
      </div>
    </>
  )
}

export default Bookingform