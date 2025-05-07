import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
     <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}></button> */}
        <dialog id="my_modal_2" className="modal">
        
        <div className="modal-box">
        
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder="Enter your email" className="w-80 px-3 py-3 border rounded-md outline-none" />

            </div>
            {/* password */}
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="email" placeholder="Enter your password" className="w-80 px-3 py-3 border rounded-md outline-none" />
            </div>
            <div className='flex justify-around mt-4'> 
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Login</button>
                <p >Not Registered?{" "}<Link to ="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}</p>
            </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
     </div> 
  )
}

export default Login
