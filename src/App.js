import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
   let [name, setname] = useState('');
   let [bdate, birthdate] = useState('');
   let [today, curentdate] = useState(getDefaultTodayDate());
 
   useEffect(() => {
     curentdate(getDefaultTodayDate());
   }, []);
 
   function getDefaultTodayDate() {
     const now = new Date();
     const year = now.getFullYear();
     const month = String(now.getMonth() + 1).padStart(2, '0');
     const day = String(now.getDate()).padStart(2, '0');
     return `${year}-${month}-${day}`;
   }
 
   // State variable for age using the useState hook
   const [age, calage] = useState({
     years: 0,
     months: 0,
     days: 0,
     weeks: 0,
     hours: 0,
     minutes: 0,
     seconds: 0,
     milliseconds: 0,
   });
 
   // Function to calculate the age
   const agecal = () => {
     const brithdate = new Date(bdate);
     const nowDate = new Date(today);
 
     if (brithdate > nowDate) {
       alert("Date of birth needs to be earlier than the age at date.!");
     } else {
       const milliseconds = nowDate - brithdate;
       const seconds = Math.round(milliseconds / 1000);
       const minutes = Math.round(seconds / 60);
       const hours = Math.round(minutes / 60);
       const days = Math.round(hours / 24);
       const weeks = Math.round(days / 7);
       const months = Math.round(weeks / 4.33);
       const years = Math.round(months / 12);
 
       if (name === '') {
         alert("Enter Your name..!");
       } else {
         // Update the state with the calculated age
         calage({ years, months, days,weeks, hours, minutes, seconds, milliseconds });
       }
     }
   }
  return (
    <div className="App">
       <form>
          <div class="design">
           <h4> Your Name:-</h4><input type="text" name="" id="name" onChange={(e) => setname(e.target.value)}></input>
          </div>
          <div class="design">
            <h4>Date Of Birth:-</h4> <input type='date' value={bdate} name="" id="birthdate" onChange={(e) => birthdate(e.target.value)}></input>
          </div>
          <div class="design">
            <h4>Today Date:-</h4><input type="date" value={today} name="" id="cdate" onChange={(e) => curentdate(e.target.value)}></input>
          </div><br></br>
          <div class="btn">
            <input type="button" name="" value="Calculate Your Age" onClick={agecal} className='button'></input>
          </div><br></br>
          <p>Year  :-</p>
          <span>{age.years}</span>
          <p>Month  :-</p>
          <span>{age.months}</span>
          <p>Day  :-</p>
          <span>{age.days}</span>
          <p>Weeks  :-</p>
          <span>{age.weeks}</span>
          <p>Hours  :-</p>
          <span>{age.hours}</span>
          <p>Minutes  :-</p>
          <span>{age.minutes}</span>
          <p>Seconds  :-</p>
          <span>{age.seconds}</span>
          <p>Milliseconds  :-</p>
          <span>{age.milliseconds}</span>
      </form>
    </div>
  );
}
export default App;
