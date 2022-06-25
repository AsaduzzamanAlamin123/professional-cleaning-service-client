import React from 'react';

const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-primary'>
            <div class="card w-96 bg-base-100 shadow-xl " data-aos="fade-up"
     data-aos-duration="3000">
        <div class="card-body">
          <h2 class="text-3xl text-center text-primary">Log In!!!</h2>
          <form action="" >
          <input  type="text" placeholder="Enter Email" class="input input-bordered input-warning w-full max-w-xs mb-5" />
          <input type="password" placeholder="Password" class="input input-bordered input-warning w-full max-w-xs" />
          <div class="card-actions justify-start">
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <br />
          
            
          </div>
          <button className='btn btn-primary btn-wide w-full' type='submit'> Log In</button>
          </form>
          <div class="divider">OR</div>

          <button className='uppercase btn btn-wide btn-glass hover:btn-primary w-full'> CONTINUE WITH GOOGLE</button>
        </div>
      </div>
        </div>
    );
};

export default Login;