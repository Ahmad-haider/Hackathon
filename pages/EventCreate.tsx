import React from 'react'
import Navbar from '../components/header'
import useCreateEvent from '../customhook/UseCreateEvent'





export default function eventCreate() {










  const {
    event,
    title,
    date,
    time,
    location,
    description,
    settitle,
    setevent,
    setdate,
    settime,
    setlocation,
    setdescription,
    addEventhandler

    } = useCreateEvent()



 

  return (
    <>



      <Navbar />


     



      <div className='d-flex justify-content-center mb-5 pb-5'>


        <h1 className="card-title fw-bolder" style={{ textAlign: 'left', paddingTop: '10vh', fontSize: 'clamp(3rem, 3vw, 31rem)' }}>Add your own event</h1>

      </div>


      <div className=' d-flex justify-content-center' style={{ backgroundColor: '#F2F5F7', }}>

        <form action="" className='' onSubmit={addEventhandler}>


          <input type="text" onChange={(e) => settitle(e.target.value)} className="form-control p-2 m-4" placeholder="Title" style={{ width: '40vh', }} value={title} required />

          <input type="date" onChange={(e) => setdate(e.target.value)} className="form-control  p-2 m-4" placeholder="Date" style={{ width: '40vh', }} value={date} required />

          <input type="time" onChange={(e) => settime(e.target.value)} className="form-control  p-2 m-4" placeholder="Time" style={{ width: '40vh', }} value={time} required />

          <input type="text" onChange={(e) => setlocation(e.target.value)} className="form-control  p-2 m-4" placeholder="Location" style={{ width: '40vh', }} value={location} required />

          <input type="text" onChange={(e) => setdescription(e.target.value)} className="form-control  p-2 m-4" placeholder="Description" style={{ width: '40vh', }} value={description} required />


          <button type='submit' onClick={addEventhandler} className='btn ms-4 px-3 mb-3' style={{ backgroundColor: '#8A17E8', color: 'white', }}>add</button>


        </form>



      </div>


    </>
  )
}




