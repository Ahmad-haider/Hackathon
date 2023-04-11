import 'bootstrap/dist/css/bootstrap.min.css';


const footer = () => {
    return (
        <main className='  text-white d-inline-flex ' style={{ width: '100%', background: 'black', }} >



            <div className="container ">

                <footer
                    className="text-center text-lg-start text-light"
                    style={{ color: 'white', }}
                >


                    <section className="">
                        <div className="container text-center text-md-start mt-6">

                            <div className="row mt-5">

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                  
                                    <p>
                                        <a href="#!" style={{ textDecoration: 'none', }} className="text-secondary">Who We Are</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-secondary" style={{ textDecoration: 'none', }}>Services</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-secondary" style={{ textDecoration: 'none', }}>Our Fresh Work</a>
                                    </p>

                                </div>

                                <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">

                                 
                                    <p>
                                        <a href="#!" className="text-secondary" style={{ textDecoration: 'none', }}>Blog</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-secondary" style={{ textDecoration: 'none', }}>Case Study</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-secondary" style={{ textDecoration: 'none', }}>Events</a>
                                    </p>

                                </div>



                                <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">


                                    
                                
                                    <p>
                                        <a href="#!" className="text-secondary " style={{ textDecoration: 'none', }}>Contact</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-secondary" style={{ textDecoration: 'none', }}>Careers</a>
                                    </p>


                                </div >

                                <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4  " style={{ paddingLeft: "11%", }}>

                                  


                                    <p>
                                        <a href="#!" className="text-primary-emphasis" style={{ textDecoration: 'none',  }}>Events@planning.com</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-primary-emphasis" style={{ textDecoration: 'none',  }}>Gallaery@planning .com</a>
                                    </p>


                                </div>


                            </div>

                        </div>
                    </section>





                </footer>

                <div
                    className="text-center pt-3  border-top border-2  border-secondary"
                    style={{ borderColor: "white", borderTop: "2px", }}
                >
                    <p className='text-light-50 '> © 2023 Sololearn</p>


                </div>
            </div>




        </main>
    )
}

export default footer