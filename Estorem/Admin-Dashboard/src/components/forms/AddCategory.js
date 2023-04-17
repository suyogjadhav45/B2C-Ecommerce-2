import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';


export default function AddCategory() {




    const [catobj, setcatobj] = useState({ category: '', color: '',subcatallowed:0 });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(catobj.category==='' || catobj.color==='' || catobj.subcatallowed===0){
            alert('Please fill all the fields');
        }
        console.log(catobj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setcatobj({ category: '', color: '',subcatallowed:0 });
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }



    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Category Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='w-full mx-auto p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>CATEGORIES</h2>
                                <hr className='w-48 mt-2 border-2 mx-auto' />

                                <div className='flex flex-col justify-center'>

                                    <label>Enter a Category : </label>
                                    <input required className='p-2 resize-x border mt-2 rounded-md' type="text" name='category' value={catobj.category} onChange={onChange} placeholder='Enter Category' />

                                </div>
                                <div className='flex-col py-2 justify-center'>

                                    <label>Select Header Color : </label>

                                    <input value={catobj.color} required className='w-full h-8 p-2 mb-2 resize-x border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />

                                </div>
                                <div className='flex-col py-2'>

                                    <label>Subcategory Allowed : yes no toggle button</label>
                                    <input value={catobj.subcatallowed} type="checkbox" name="subcatallowed" id="subcatallowed" />

                                </div>

                                <div className='flex mx-auto'>
                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onSubmit={handleSubmit}>SAVE</button>
                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


