import React from 'react';
import Cleanner from '../../images/istockphoto-518593658-612x612-removebg-preview.png'

const Landing = () => {
    return (
        <>
        <div class="hero h-[600px] bg-accent">
        <div class="hero-content flex-col lg:flex-row">
          
          <div className='ml-10 sm:mr-0 mt-20 sm:mt-0'>
            <p className='text-xl' data-aos="fade-up-right"  data-aos-duration="3000"   data-aos-delay="200">Best Quality</p>
            <h1 class="text-5xl font-bold" data-aos="fade-up-right"  data-aos-duration="3000"   data-aos-delay="400">Professional Clenning Service!</h1>
            <p class="py-6 max-w-xl" data-aos="fade-up-right"  data-aos-duration="3000"   data-aos-delay="600">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary"data-aos="zoom-in"  data-aos-duration="3000"   data-aos-delay="14000">Get Started</button>
          </div>
          <div className='mb-6 sm:mb-0'data-aos="fade-up-left" data-aos-duration="3000">
          <img className='mr-3 sm:mr-o hidden sm:block' src={Cleanner} />
          </div>
        </div>
      </div>
      <div className='mt-[-50px] rounded-lg mx-auto bg-base-200 shadow-lg p-10 w-5/6 'data-aos="flip-left" data-aos-duration="3000"> 
      {/*   */}
        <h1 className='font-bold mb-6 text-primary'>Get Free Estimate</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2'>
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full " />
        </div>
        <button className='btn btn-primary mt-5'>Get a Quote</button>
      </div>
      </>
    );
};

export default Landing;