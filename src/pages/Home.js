import React, {Component} from 'react';

import Contact from './Contact';


class Home extends React.Component{ 
    render(){
        return(
            <div >
                <div class="wrapper h-100">



{/* <!-- Hero --> */}
<div class="jumbotron jumbotron-fluid bg-primary text-secondary font-weight__500 hero mb-0">
    {/* <!-- Empty Space --> */}
    <div class="sm-space"></div>
    {/* <!--/ End Empty Space --> */}
    <div class="container hero-inner">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6 mr-lg-auto">
                <div class="text-center text-lg-left">
                    <h1 class="xxxl-font-size font-weight__900 text-black">
                    Groceries. Delivered online. 
                </h1>
                    <div class="md-space"></div>
                    <p class="lead base-plus-font-size text-black">
                        Let's go shopping at home?      
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <img src="assets/images/undraw_deliveries_131a.svg" class="img-fluid" alt="Hero Image"/>
            </div>
        </div>
    </div>
</div>
{/* <!--/ End Hero --> */}

<a name="A"></a>
{/* <!-- Pricing --> */}
<section class="pricing section bg-black">
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 pricing-wrap box box-shadow my-3 my-lg-0 bg-darker-gray">
                        <div class="pricing-inner text-center p-5 p-md-3 p-xl-5">
                            <h3 class="pricing-inner__title lg-font-size text-aliceblue">Earn upto</h3>
                            {/* <!-- Empty Space --> */}
                            <div class="md-space"></div>
                            {/* <!--/ End Empty Space --> */}
                                <span class="price__amount d-inline-block text-aliceblue ">₹7000</span> <span class="d-inline-block"> 
                                    <span class="price__currency xl-font-size d-block font-weight__900">
                                    </span> <span class="price__time sm-font-size text-aliceblue">per month</span></span>
                            <div class="pricing-inner__price price">
                            </div>
                            <div class="pricing-inner__info  text-aliceblue "><span>with added benefits</span></div>
                            {/* <!-- Empty Space --> */}
                            <div class="md-space"></div>
                            {/* <!--/ End Empty Space --> */}
                            <ul class="pricing-inner__list list-unstyled sm-font-size text-aliceblue">
                                <li><span class="text-success"><i class="fa fa-check"></i></span> Work when you want, at your convenience.</li>
                                <li><span><i class="text-success fa fa-check"></i></span> Earn as you roam the city.</li>
                                <li><span><i class="text-success fa fa-check"></i></span> Grab your keys, it's time to make some money.</li>
                            </ul>
                            {/* <div class="col text-center mt-md-5">
                                <a onClick scrollTo href="SCROLL AAJA" class="btn btn-lg btn-secondary px-5">I'm interested!</a>
                            </div> */}

                            {/* <Router>
                    <Link to="/Contact ">
                        <div  class="col text-center mt-md-5">
                        <button className="btn btn-lg btn-secondary px-5"> 
                            contactUs
                        </button> 
                        </div> 
                       
                    </Link>
                <Route path="/Contact" component={Contact} />
            </Router> */}
            
                                   </div>
                    </div>
                    <div class="d-none d-lg-block col-lg-5 ml-auto">
                        <img src="assets/images/undraw_Note_list_re_r4u9.svg" class="img-fluid" alt="Pricing Image"/>
                    </div>
                </div>
                {/* <!-- Empty Space --> */}
                <div class="md-space"></div>
                {/* <!--/ End Empty Space --> */}
                {/* <div class="row align-items-center">
                    <div class="col-10 mx-auto col-md-4">
                        <div class="pricing-extra my-3">
                            <div class="row align-items-center text-md-center text-lg-left">
                                <div class="col-3 text-center col-md-12 col-lg-4 px-0">
                                    <div class="icon-wrap text-white my-3">
                                        <i class="icon bg-secondary p-3 rounded-circle fas fa-sync"></i>
                                    </div>
                                </div>
                                <div class="col-9 col-md-12 col-lg-8">
                                    <h3 class="base-plus-font-size">
                                        Lorem ipsum
                                    </h3>
                                    <p class="lead sm-font-size text-gray mb-0">
                                        Praesent mollis, massa in auctor molestie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 mx-auto col-md-4">
                        <div class="pricing-extra my-3">
                            <div class="row align-items-center text-md-center text-lg-left">
                                <div class="col-3 col-md-12 text-center col-lg-4 px-0">
                                    <div class="icon-wrap text-white my-3">
                                        <i class="icon bg-secondary p-3 rounded-circle fas fa-credit-card"></i>
                                    </div>
                                </div>
                                <div class="col-9 col-md-12 col-lg-8">
                                    <h3 class="base-plus-font-size">
                                        Lorem ipsum
                                    </h3>
                                    <p class="lead sm-font-size text-gray mb-0">
                                        Praesent mollis, massa in auctor molestie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 mx-auto col-md-4">
                        <div class="pricing-extra my-3">
                            <div class="row align-items-center text-md-center text-lg-left">
                                <div class="col-3 col-md-12 text-center col-lg-4 px-0">
                                    <div class="icon-wrap text-white my-3">
                                        <i class="icon bg-secondary p-3 rounded-circle far fa-life-ring"></i>
                                    </div>
                                </div>
                                <div class="col-9 col-md-12 col-lg-8">
                                    <h3 class="base-plus-font-size">
                                        Lorem ipsum
                                    </h3>
                                    <p class="lead sm-font-size text-gray mb-0">
                                        Praesent mollis, massa in auctor molestie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        {/* <Contact/> */}
    </div>
</section>
{/* <!--/ End Pricing --> */}

<a name="B"></a>
{/* <!-- Features Grid --> */}
<div class="section feature-grid bg-blooboiz">
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto text-center text-white">
                <h2 class="font-weight__700">Join Schippid.</h2>
                <p class="lead text-white">We bring your groceries. Everything you ask for. <br></br>
                Yes, that's how simple it is.</p>
            </div>
        </div>
        {/* <!-- Enpty Space --> */}
        <div class="md-space"></div>
        {/* <!--/ End Empty Space --> */}
        <div class="row">
            <div class="col-12 mx-auto">
                <div class="row equal-height justify-content-center">
                    <div class="col-10 col-lg-4">
                        <div class="feature-grid box box-shadow box-shadow__hover bg-light-primary row">
                            <div class="mt-auto col">
                                <div class="row align-items-center">
                                    <div class="col-12 col-md-4 col-lg-12">
                                        <img src="assets/images/undraw_On_the_way_re_swjt.svg" alt="product image" class="img-fluid"/>
                                        {/* <!-- Enpty Space --> */}
                                        <div class="md-space"></div>
                                        {/* <!--/ End Empty Space --> */}
                                    </div>
                                    <div class="col-15 col-md-8 col-lg-12 text-center text-md-left text-lg-center text-dark-gray">
                                        <h3 class="font-weight__500">
                                            Super fast
                                        </h3>
                                        <p>
                                            Our workers work extra hard in these hard times
                                            to get your groceries on time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-lg-4">
                        <div class="feature-grid box box-shadow box-shadow__hover bg-light-primary row">
                            <div class="mt-auto col">
                                <div class="row align-items-center">
                                    <div class="col-12 col-md-4 col-lg-12">
                                        <img src="assets/images/undraw_make_it_rain_iwk4.svg" alt="product image" class="img-fluid"/>
                                        {/* <!-- Enpty Space --> */}
                                        <div class="md-space"></div>
                                        {/* <!--/ End Empty Space --> */}
                                    </div>
                                    <div class="col-12 col-md-8 col-lg-12 text-center text-md-left text-lg-center text-dark-gray">
                                        <h3 class="font-weight__500">
                                            Earn and Spend
                                        </h3>
                                        <p>
                                            Earn by shopping in stores,
                                            Spend by shopping in the app. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-lg-4">
                        <div class="feature-grid box box-shadow box-shadow__hover bg-light-primary row">
                            <div class="mt-auto col">
                                <div class="row align-items-center">
                                    <div class="col-12 col-md-4 col-lg-12">
                                        <img src="assets/images/undraw_message_sent_1030.svg" alt="product image" class="img-fluid"/>
                                        {/* <!-- Enpty Space --> */}
                                        <div class="md-space"></div>
                                        {/* <!--/ End Empty Space --> */}
                                    </div>
                                    <div class="col-12 col-md-8 col-lg-12 text-center text-md-left text-lg-center text-dark-gray">
                                        <h3 class="font-weight__500">
                                            Stay connected 
                                        </h3>
                                        <p>
                                            Get your order picked up and delivered
                                            in the blink of an eye
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--/ End Features Grid --> */}




<a name="C"></a>
<div id= "contactboiz" class = "contactboiz">

     
<Contact/>

</div>

</div>
</div>
        );
    }
}


export default Home;