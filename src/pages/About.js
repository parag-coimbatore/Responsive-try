import React from 'react'

function About() {
    return (
        <>
            <h1 className="text-center my-3 col mx-3">About Parag Coimbatore</h1>
            <div class="card mb-3" style={{maxWidth: '540px', margin: '10%', marginLeft: '30%', marginTop: '5%'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/images/img-6.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-center">About Me</h5>
                            <p class="card-text text-center">Hi, my name is Parag Coimbatore. This is a demo site</p>
                            <p class="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
