import React from 'react'
import Navbar from '../components/header'
import { eventType, } from '../types/eventsType'
import { attendeeType } from '@/types/attendeesType'
import { auth,  db,  } from '../config/firebase'
import { doc, updateDoc,  } from 'firebase/firestore';
import {  arrayRemove } from "firebase/firestore";
import UseMyEvents from '../customhook/useMy_events'

export default function myevents( ) {

  const {


    myEvents, 
    title, settitle,
    date, setdate,
    time, settime,
    location, setlocation,
    description, setdescription,
    selectedItemId, 
    deletehandler,
    todoUpdateHandler,
    fieldhandler,


  } = UseMyEvents()




  const deleteAttendee = async (event: eventType, attendee: attendeeType) => {
    try {
      const eventRef = doc(db, "events", event.id);
      await updateDoc(eventRef, {
        attendees: arrayRemove(attendee)
      });
      console.log("Attendee removed successfully");
    } catch (error) {
      console.error("Error removing attendee: ", error);
    }
  };
  

  return (
    <>

      <Navbar />


      <div className='d-flex justify-content-center'>



        <h1 className="card-title fw-bolder mb-5 " style={{ textAlign: 'left', paddingTop: '10vh', fontSize: 'clamp(3rem, 3vw, 31rem)', }}>My events</h1>

      </div>


      {myEvents.map((item: eventType) => {
        // Only display the event if it belongs to the current user
        if (item.userID == auth.currentUser?.uid) {
          const isSelected = item.id === selectedItemId;

          return (
            <div className='d-flex col ' style={{ width: '100%', marginBottom: '5%', }} >






              <div className="card my-4  shadow" style={{ width: '100%' }}>


                <ul className="list-group list-group-flush">

                  <li className='d-flex justify-content-sm-between list-group-item ' style={{}}>
                    <p className=" " style={{ width: '60%', }}>Title:  {item.title}     </p>

                    {isSelected && (

                      <div>

                        <input type="text" onChange={(e) => settitle(e.target.value)} className="form-control p-2 m-2" placeholder="Title" style={{ width: '40vh', }} value={title} required />



                      </div>


                    )}

                  </li>

                  <li className='d-flex justify-content-sm-between list-group-item ' style={{}}>
                    <p className=" " style={{ width: '60%', }}>Date:  {item.date}     </p>

                    {isSelected && (

                      <div>

                        <input type="date" onChange={(e) => setdate(e.target.value)} className="form-control p-2 m-2" placeholder="Date" style={{ width: '40vh', }} value={date} required />


                      </div>


                    )}

                  </li>

                  <li className='d-flex justify-content-sm-between list-group-item ' style={{}}>
                    <p className=" " style={{ width: '60%', }}>Time:  {item.time}     </p>

                    {isSelected && (

                      <div>

                        <input type="time" onChange={(e) => settime(e.target.value)} className="form-control p-2 m-2" placeholder="Time" style={{ width: '40vh', }} value={time} required />



                      </div>


                    )}

                  </li>

                  <li className='d-flex justify-content-sm-between list-group-item ' style={{}}>
                    <p className=" " style={{ width: '60%', }}>Location:  {item.location}     </p>

                    {isSelected && (

                      <div>

                        <input type="text" onChange={(e) => setlocation(e.target.value)} className="form-control p-2 m-2" placeholder="Location" style={{ width: '40vh', }} value={location} required />


                      </div>


                    )}

                  </li>


                  <li className='d-flex justify-content-sm-between list-group-item ' style={{}}>
                    <p className=" " style={{ width: '60%', }}>Description:  {item.description}     </p>

                    {isSelected && (

                      <div>

                        <input type="text" onChange={(e) => setdescription(e.target.value)} className="form-control p-2 m-2" placeholder="Description" style={{ width: '40vh', }} value={description} required />


                      </div>


                    )}



                  </li>


                  <li className='d-flex justify-content-sm-between list-group-item ' style={{}}>
                    <p className=" " style={{ width: '60%', }}  >   Attendees:  {item.attendees.map((attendee:attendeeType) => (
                      <div className='d-flex   justify-content-sm-between mt-3' style={{ width:'15vw', }}>

                      <p key={attendee.id}>{attendee.name} </p>
                     

                      </div>
                     
                     


                    ))}   
                    
                  

              
                     </p>


                   


                  </li>



                </ul>







                <div className="card-body d-flex justify-content-sm-end  ">


                  {isSelected && (

                    <button className=' btn text-success  ' onClick={(e) => todoUpdateHandler(e, item)} style={{ width: '10vh', }} >ok</button>

                  )}

                  <button className=' btn text-success  ' onClick={() => fieldhandler(item)} style={{ width: '15vh', }} >Edit</button>


                  <button className='btn btn-danger  me-3' onClick={() => deletehandler(item)} style={{ width: '15vh', }} >cancel</button>







                </div>
              </div>


            </div>


          );


        }
        else {

          return;


        }
      })}

    </>
  )
}
