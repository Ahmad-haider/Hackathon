import React from 'react'
import Navbar from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image';
import Head from 'next/head';
import MainImg from '../public/mainImg.ico'
import icon from '../public/icon.ico'
import icon1 from '../public/icon1.ico'
import icon2 from '../public/icon2.ico'
import icon3 from '../public/icon4.ico'
import OurStoryBg from '../public/storyBg.ico'
import Quote from '../public/Quote.ico'
import cover from '../public/Cover.ico'
import cover1 from '../public/Cover1.ico'
import cover2 from '../public/Cover2.ico'
import cover3 from '../public/Cover3.ico'
import Button from 'react-bootstrap/Button';


export default function index() {






 

 




 
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      

      <div>




        <div className="card mb-3" style={{ border: '0px', }} >
          <div className="row g-0">

            <div className="col-md-8 ">
              <div className="card-body pt-5 px-5 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>

                <div className=''>

                  <h1 className="card-title fw-bolder" style={{ textAlign: 'left', paddingTop: '10vh', fontSize: 'clamp(3rem, 5vw, 31rem)' }}>Organise your <br /> business expo.</h1>
                  <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>We help you to organise your business expo so that you can <br /> focus on delivering best of the expo.</p>


                  <Button variant="" className='    text-light rounded-3 fw-bold' style={{ backgroundColor: '#2493DF', padding: '0.5vw', fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', marginTop: '3vh', textAlign: 'center', width: '30vh  ', }} >Organise your Expo</Button>


                </div>
              </div>
            </div>
            <div className="col-md-4 col-9 pe-5 ">
              <Image src={MainImg} className="img-fluid rounded-start d-flex justify-content-center m-5 " alt="..."  />
            </div>
          </div>
        </div>
      </div>



      {/* second section */}



      <div style={{ backgroundColor: '#F4F5F7' }}>


        <div className="card " style={{ backgroundColor: '#F4F5F7', border: '0px', }} >
          <div className="row g-0 m-5" style={{ paddingTop: '10vh', paddingBottom: '10vh', }}>
            <div className="col-md-4 " >
              <div className='pb-5 mb-3 '>

                <h1 className="card-title fw-bolder" style={{ textAlign: 'left', paddingBottom: '', fontSize: 'clamp(3rem, 3vw, 31rem)' }}>Our 8 years of achievements</h1>

                <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 0.5vw, 1.5rem)' }}>With our super powers we have reached this</p>




              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex">

                <div className=' mb-5 pb-3 '>

                  <div className='d-flex mb-5 ' style={{ paddingRight: '10vw', }}>

                    <Image src={icon} alt='' />
                    <div>

                      <h3>100+</h3>
                      <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 0.5vw, 1.5rem)' }}>Events organised</p>
                    </div>

                  </div>





                  <div className='d-flex ' style={{ paddingRight: '15vw', }}>

                    <Image src={icon2} alt='' />
                    <div>

                      <h3>50+</h3>
                      <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 0.5vw, 1.5rem)' }}>Organization helped</p>
                    </div>

                  </div>





                </div>


                <div className=''>

                  <div className='d-flex mb-5 '>

                    <Image src={icon1} alt='' />
                    <div>

                      <h3>20 cross</h3>
                      <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 0.5vw, 1.5rem)' }}>peaople visits</p>
                    </div>

                  </div>







                  <div className='d-flex '>

                    <Image src={icon3} alt='' />
                    <div>

                      <h3>12</h3>
                      <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 0.5vw, 1.5rem)' }}>cities</p>
                    </div>


                  </div>



                </div>

              </div>
            </div>
          </div>
        </div>

      </div>



      {/* third section */}




      <div className="card " style={{ border: '0px', marginTop: '0px', }} >
        <div className="row g-0">
          <div className="col-md-4">
            <Image src={OurStoryBg} className="img-fluid rounded-start" alt="..." style={{ width: '1700px ', }} />
          </div>
          <div className="col-md-8">
            <div className="card-body pt-5 px-5 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>

              <div className='' style={{ width: '50vh', }}>


                <h1 className="card-title fw-bolder" style={{ textAlign: 'left', paddingBottom: '', fontSize: 'clamp(3rem, 3vw, 31rem)' }}>Our Story</h1>


                <p className="card-text fw-normal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', paddingBottom: '31%', }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>




              </div>
            </div>
          </div>
        </div>
      </div>


      {/* fourth section */}



      <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFE3AA', padding: '7%  ' }}>


        <div className='bg-white d-flex justify-content' style={{ width: '60vw', }}>


          <div>

            <Image src={Quote} className=" me-5" alt="..." style={{ maxWidth: '600%', height: 'auto', paddingTop: '1vw', }} />

          </div>

          <p className="card-text fw-normal " style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', padding: '3%', }}>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio.</p>
        </div>


      </div>


      {/* fifth section  */}



      <div className='' style={{paddingBottom:'7%',}} >

        <div style={{  paddingLeft: '10vw', }}>


          <h1 className="card-title fw-bolder pt-5" style={{ textAlign: 'left', marginRight: '20%', fontSize: 'clamp(3rem, 3vw, 31rem)', paddingBottom:'4vw', }}>From our blog</h1>

        </div>

        <div style={{ paddingRight: '10%', paddingLeft: '10%', }}>


          <div className="row row-cols-1 row-cols-md-4 g-4 " >
            <div className="col mb-5 ">
              <div className="card h-100" style={{ border: '0px', }}>
                <Image src={cover} className="card-img-top" alt="..." />
                <div className="card-body">

                  <p className="card-text fw-bold fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

              </div>
            </div>


            <div className="col mb-5">
              <div className="card h-100" style={{ border: '0px', }}>
                <Image src={cover1} className="card-img-top" alt="..." />
                <div className="card-body">

                <p className="card-text fw-bold fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100" style={{ border: '0px', }}>
                <Image src={cover2} className="card-img-top" alt="..." />
                <div className="card-body">

                <p className="card-text fw-bold fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

              </div>
            </div>



            <div className="col mb-5" >
              <div className="card h-100" style={{ border: '0px', }}>
                <Image src={cover3} className="card-img-top" alt="..." />
                <div className="card-body">

                <p className="card-text fw-bold fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

              </div>
            </div>

          </div>


        </div>



      </div>


      <Footer />

    </>

  )
}
