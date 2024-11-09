import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
        
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-12'>
                <div className='my-10 md:my-[7rem] md:mx-96 items-center'>
                    <h1 className='text-xl md:text-4xl font-semibold'>Contact Us</h1>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        {/* Name Field */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span><br />
                            <input type="text" placeholder='Enter your full name' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("name", { required: true })} /> <br />
                            {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        {/* Email Field */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type="email" placeholder='Email address' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("email", { required: true })} /> <br />
                            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>} 
                        </div>
                        {/* Message Field */}
                        <div className='mt-4 space-y-2'>
                            <span>Message</span><br />
                            <textarea rows="8" cols="50" className='w-80 md:w-96 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Type your message' {...register("message", { required: true })} ></textarea><br />
                            {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className='mt-4 space-y-2'>
                            <button className='bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 duration-200'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
