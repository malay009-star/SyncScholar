import React, { useState } from 'react';
import User from '../../assets/images/man.png'
import { useFormik } from 'formik'
import {useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Taskdetails = () => {
  const [profile, setProfile] = useState();
  const navigate = useNavigate()

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      amount: '',
      date: '',
      type: ''
    },
    validationSchema: Yup.object({
      amount: Yup.number().required('Budget is required'),
      date: Yup.string().required('Date is required'),
      type: Yup.string().required('choose a category'),
    }),
    onSubmit: (values, { resetForm }) => {
      navigate('/chat')
      resetForm();
    },
  })

  return (
    <div className='w-full'>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 md:fixed md:z-40 md:overflow-y-auto h-16 md:min-h-[88vh] mt-[12vh] bg-gray-200">
          <h3 className='font-semibold text-center mt-4 md:mt-6 text-[#232F3E]'>Add a task details</h3>
        </div>

        {/* Right side: Input field for typing messages */}
        <form onSubmit={handleSubmit} className='flex justify-center items-center w-full md:w-3/4 relative md:overflow-y-auto md:ml-[25%] md:mt-[13vh] py-5 px-8 mb-10 md:mb-0'>
          <div className='primary_shadow w-full md:w-3/4 px-8 pt-5 pb-10 rounded'>
            <h3 className='font-semibold text-lg'>Assignment</h3>
            <div className='mt-3'>
              <h5 className='text-sm font-semibold'>What is AI in computer Science</h5>
              <p className='w-full lg:w-3/4 text-sm'>Artificial intelligence is the science of making machines that can think like humans.</p>
            </div>
            <div className='flex items-center gap-5 mt-4'>
              {profile && (
                <label className='w-20 h-20' htmlFor='profile'>
                  <img src={profile} alt="user Preview" className="w-full h-[100%] rounded-[3rem]" />
                </label>
              )}
              {!profile && (
                <label className='w-20 h-20' htmlFor='profile'>
                  <img src={User} alt="user Preview" className="w-full h-[100%] rounded-[3rem]" />
                </label>
              )}
              <div>
                <input
                  type="file"
                  id="profile"
                  name="user"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className='hidden'
                />
                <label htmlFor="profile" className='text-sm bg-color px-[12px] py-[6px] text-[#ffffff] rounded cursor-pointer'>Choose file</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 mt-6 gap-4">
              <div className=''>
                <label htmlFor="amount" className='text-sm md:text-[15px]'>Expected Budget</label>
                <input
                  type="text"
                  id='amount'
                  name='amount'
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='border py-[6px] px-2 focus:outline-[#f90] rounded text-sm w-full'
                  placeholder='Enter a budget'
                />
                {errors.amount && touched.amount ? (<p className='text-[#DB4444] text-[12px]'>{errors.amount}</p>) : null}
              </div>

              <div className=''>
                <label htmlFor="deadline" className='text-sm md:text-[15px]'>Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  name='date'
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='bg-[#F5F5F5] text-sm rounded px-2 py-[7px] focus:outline-none w-full'
                />
                {errors.date && touched.date ? (<p className='text-[#DB4444] text-[12px]'>{errors.date}</p>) : null}
              </div>
            </div>

            <div className='mt-9 flex flex-wrap md:flex-nowrap items-center gap-2 w-full'>
              <label htmlFor="categories" className='text-sm md:text-[15px] w-full md:w-1/4'>Select categories</label>
              <select
                id='categories'
                name='type'
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                className='bg-[#F5F5F5] text-sm md:text-[15px] rounded px-2 py-[10px] focus:outline-none w-full md:w-3/4'
              >
                <option value="">Select a category</option> {/* Add a default option */}
                <option value="Django">Django</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Oop">Oop</option>
                <option value="Data Structure">Data Structure</option>
              </select>
              {errors.type && touched.type ? (<p className='text-[#DB4444] text-[12px]'>{errors.type}</p>) : null}
            </div>
            <button type='submit' className='text-sm md:text-[16px] font-medium text-[#ffffff] bg-color px-3 py-2 rounded mt-10'>Send Details</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Taskdetails;
