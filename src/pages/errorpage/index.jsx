import React from 'react'
import { Link } from 'react-router-dom'

function errorpage() {
  return (
    <div className='container'>
      <div className='flex py-12'>
        <Link to='/login'>Login &nbsp; / &nbsp;</Link> 
        <Link to='' className='text-[#DB4444]'>404 Error</Link>
      </div>
      <div className='flex flex-col items-center gap-y-5'>
        <h1 className='text-5xl font-medium'>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/login" className='bg-[#ea660b] text-base py-2 px-5 font-light rounded text-[#fff] mt-2'>Back to home page</Link>
      </div>
    </div>
  )
}

export default errorpage
