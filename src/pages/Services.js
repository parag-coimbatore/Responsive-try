import React from 'react'

function Services() {
    return (
        <>
            <h1  className="text-styles text-center"><u>Services from Parag Coimbatore</u></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col mx-3" style={{width: '23rem'}}> 
                    <div className="card">
                        <img src="/images/img-8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-center">Services1</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="http://localhost:3000/service1" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col mx-3" style={{width: '23rem'}}>
                    <div className="card">
                        <img src="/images/img-8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-center">Services2</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="http://localhost:3000/service2" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col mx-3" style={{width: '23rem'}}>
                    <div className="card">
                        <img src="/images/img-8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-center">Services3</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="http://localhost:3000/service3" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col mx-3" style={{width: '23rem'}}> 
                    <div className="card">
                        <img src="/images/img-8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Services4</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="http://localhost:3000/service4" className="btn btn-primary">Go somewhere</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col mx-3" style={{width: '23rem'}}>
                    <div className="card">
                        <img src="/images/img-8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Services3</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="http://localhost:3000/service3" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col mx-3" style={{width: '23rem'}}>
                    <div className="card">
                        <img src="/images/img-8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-center">Services6</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="http://localhost:3000/service6" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
