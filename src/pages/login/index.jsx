import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


function SignIn() {
  const [stationType, setStationType] = useState('email')


  return (
    <div className="mt-[12vh]">
      <div className='container flex flex-col items-center py-5 pb-10'>
        <div className='w-full sm:w-[60%] lg:w-[41%] primary_shadow px-5 pt-4 pb-10 rounded-md' action="">
          <h3 className='text-[20px] sm:text-[23px] tracking-wider font-semibold'>Sign in</h3>
          <div className={`flex items-baseline gap-2 border hover:border-[#3388DD] p-3 mt-6 rounded ${stationType === 'email' ? 'border border-[#3388DD] bg-[#F0F9FF]' : ''}`} >
            <input
              type="radio"
              id='user'
              value="email"
              onChange={e => setStationType(e.target.value)}
              checked={"email" === stationType}
            />
            <label htmlFor='user'>
              <h5 className='text-sm font-semibold'>User</h5>
              <p className='text-[13px] dark-color'>Account owner that performs tasks requiring unrestricted access.</p>
            </label>
          </div>

          {/* check box 2 */}
          <div className={`flex items-baseline gap-2 border hover:border-[#3388DD] p-3 mt-3 rounded ${stationType === 'supervisor' ? 'border border-[#3388DD] bg-[#F0F9FF]' : ''}`} >
            <input
              type="radio"
              id='supervisor'
              value="supervisor"
              onChange={e => setStationType(e.target.value)}
              checked={"supervisor" === stationType}
            />
            <label htmlFor='supervisor'>
              <h5 className='text-sm font-semibold'>Supervisor</h5>
              <p className='text-[13px] dark-color'>User within an account that performs daily tasks. </p>
            </label>
          </div>

          {/* render id or email */}
          {stationType === 'email' ? <UserForm />
            : <SupervisorForm />
          }

          <div className='mt-2'>
            <Link to='' className='text-sm text-blue inline-block mt-2'>Forget password</Link><br />
          </div>
          <div class="flex items-center">
            <div class="border-t border-[#9ea4af] w-[30%] my-6"></div>
            <p class="text-center text-sm flex-grow">New to AWS?</p>
            <div class="border-t border-[#9ea4af] w-[30%]"></div>
          </div>
          <div className='text-center mt-2 w-full border border-[#858585] hover:border-black py-1'>
            <Link to='/signup' className='text-sm hover:text-black font-semibold tracking-wider'>Create a new account</Link>
          </div>
        </div>
        <div className='mt-10'>
          <p className='text-sm'>© 2024, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn





// user form
function UserForm() {
  const [rememberme, setRememberme] = useState(false);
  const navigate = useNavigate()

  const handleCheckbox = () => {
    setRememberme(!rememberme);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('An email address is required.'),
    password: Yup.string().min(6).required('please enter password'),
    rememberme: Yup.boolean().oneOf([true], 'Please check "Remember this account."')
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberme: false,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      navigate('/taskdetails')
      resetForm();
    },
  })

  useEffect(() => {
    setFieldValue('rememberme', rememberme);
  }, [rememberme, setFieldValue]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <label htmlFor="email" className='text-sm font-semibold'>Root user email address</label>
        <input className='text-sm italic-place py-[6px] p-2 inline-block border focus:outline-blue-400 w-full text-[#303030] mt-1'
          type='email'
          name='email'
          autoComplete='off'
          id='email'
          placeholder='username@gmail.com'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (<p className='text-[#DB4444] text-[12px]'>{errors.email}</p>) : null}
      </div>
      <div className='mt-2' htmlFor='password'>
        <label htmlFor="password" className='text-sm font-semibold'>Password</label>
        <input className='text-[14.5px] py-[6px] p-4 inline-block focus:outline-[#3388DD] border w-full text-[#000] mt-1'
          type='password'
          autoComplete='off'
          id='password'
          placeholder=''
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (<p className='text-[#DB4444] text-xs'>{errors.password}</p>) : null}
      </div>
      <div className='mt-2 flex gap-2'>
        <input
          checked={rememberme}
          onChange={handleCheckbox}
          type="checkbox"
          id='chekbtn'
          className='w-[11px]'
        />
        <label htmlFor="chekbtn" className='text-sm'>Remember this account</label>
      </div>
      {touched.rememberme && errors.rememberme && (
        <p className='text-[#DB4444] text-[12px]'>{errors.rememberme}</p>
      )}
      <button type='submit' className='text-sm text-center inline-block w-full py-[6px] rounded mt-4 font-semibold tracking-wider blue text-white'>Sign in</button>
    </form>

  )
}



// supervisor form
function SupervisorForm() {
  const [rememberAccount, setRememberAccount] = useState(false);
  const navigate = useNavigate()

  const handleCheckboxChange = () => {
    setRememberAccount(!rememberAccount);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      password: '',
      rememberAccount,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2).max(25).required('A account name is required.'),
      password: Yup.string().min(6).required('please enter password'),
      rememberAccount: Yup.boolean().oneOf([true], 'Please check "Remember this account."')
    }),
    onSubmit: (values, { resetForm }) => {
      navigate('/chat')
      resetForm()
      console.log(values.id)
    }
  })

  useEffect(() => {
    setFieldValue('rememberAccount', rememberAccount);
  }, [rememberAccount, setFieldValue]);

  return (
    <form onSubmit={handleSubmit}>
      <div className='mt-4'>
        <label htmlFor='name' className='text-sm font-semibold'>User Name</label>
        <input className='text-sm py-[6px] p-4 inline-block border focus:outline-[#3388DD] w-full text-[#303030] mt-1'
          type='text'
          name='name'
          autoComplete='off'
          id='name'
          placeholder=''
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (<p className='text-[#DB4444] text-[12px]'>{errors.name}</p>) : null}
      </div>
      <div className='mt-2' htmlFor='password'>
        <label htmlFor="password" className='text-sm font-semibold'>Password</label>
        <input className='text-[14.5px] py-[6px] p-4 inline-block focus:outline-[#3388DD] border w-full text-[#000] mt-1'
          type='password'
          autoComplete='off'
          id='password'
          placeholder=''
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (<p className='text-[#DB4444] text-xs'>{errors.password}</p>) : null}
      </div>
      <div className='mt-2 flex gap-2'>
        <input
          checked={rememberAccount}
          onChange={handleCheckboxChange}
          type="checkbox"
          id='chek'
          className='w-[11px]'
        />
        <label htmlFor="chek" className='text-sm'>Remember this account</label>
      </div>
      {touched.rememberAccount && errors.rememberAccount && (
        <p className='text-[#DB4444] text-[12px]'>{errors.rememberAccount}</p>
      )}
      <button type='submit' className='text-sm text-center inline-block w-full py-[6px] rounded mt-7 font-semibold tracking-wider blue text-white'>Sign in</button>
    </form>

  )
}