import React from 'react';
import Cleanner from '../../images/istockphoto-518593658-612x612-removebg-preview.png'

const Landing = () => {
    return (
        <>
        <div class="hero h-[600px] bg-accent">
        <div class="hero-content flex-col lg:flex-row">
          
          <div className='ml-10 sm:mr-0 mt-20 sm:mt-0'>
            <p className='text-xl'>Best Quality</p>
            <h1 class="text-5xl font-bold">Professional Clenning Service!</h1>
            <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className='mb-6 sm:mb-0'>
          <img className='mr-3 sm:mr-o ' src={Cleanner} />
          </div>
        </div>
      </div>
      <div className=' rounded-lg mx-auto mt-[-60px] shadow-lg p-10 w-5/6'>
        <h1>Get Free Estimate</h1>
        <div>
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
        </div>
      </div>
      </>
    );
};

export default Landing;