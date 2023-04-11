import React from 'react'
import UseEventGallary from '../customhook/useEventGallary'
import { eventType } from '../types/eventsType'
import Navbar from '../components/header'



export default function eventsGallary() {




  const {
    Galllary,
    searchText,
     setsearchText,
    attendEventHandler
    } = UseEventGallary()


  

  return (
    <>


      <Navbar />




      <div className='d-flex justify-content-center mb-5 pb-5'>


        <h1 className="card-title fw-bolder" style={{ textAlign: 'left', paddingTop: '10vh', fontSize: 'clamp(3rem, 3vw, 31rem)' }}>Upcomming events</h1>

      </div>





      <div className="card mb-3" style={{ backgroundColor: '#fdf9ff', border: '0px', }} >
        <div className="row g-0">
          <div className="col-md-3 pt-5 ps-2 border-end border-secondary border-4 my-4">


            <h2 className='ms-4'>Categorize</h2>

            <input type="text" onChange={(e) => setsearchText(e.target.value)} className="form-control  p-2 m-4" placeholder="search" style={{ width: '20vw', }} value={searchText} required />


          </div>
          <div className="col-md-8">
            <div className="card-body">




              <div className='d-flex  row row-cols-1 row-cols-md-2 g-3' >





                {Galllary.filter((Galllary) => Galllary.title.includes(searchText)).map((item: eventType, index: number) => {

                  return (

                    <div className='d-flex col my-4' style={{ paddingLeft: '10%', }} >






                      <div className="card my-4  shadow" style={{ width: '30rem' }}>

                        <div className="card-body">
                          <h3 className="card-title mb-4">{item.title}</h3>
                          <p className="card-text">{item.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">

                          <li className="list-group-item">Date:  {item.date}</li>
                          <li className="list-group-item">Time:  {item.time}</li>
                          <li className="list-group-item">Location:  {item.location}</li>
                          <li className="list-group-item">Organizer:  {item.creator}</li>

                        </ul>
                        <div className="card-body">

                        <button className='btn btn-dark' onClick={(index) => attendEventHandler(item,index)} style={{ width: '50%', }}  key={index} > Attend</button>





                        </div>
                      </div>


                    </div>


                  )



                })}









              </div>

            </div>
          </div>
        </div>
      </div>





   




    </>
  )
}
