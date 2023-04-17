import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';


export default function EditCategory() {


    const [catarray, setcatarray] = useState([
        { id: 1, category: 'fruits' },
        { id: 2, category: 'vegetables' },
        { id: 3, category: 'dairy' },
        { id: 4, category: 'meat' },
    ])

    

    const [catobj, setcatobj] = useState({ category: '',newcategory:'',color:'',subcatallowed:0 });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(catobj.category==='' || catobj.newcategory==='' || catobj.color==='' || catobj.subcatallowed===0){
            alert('Please fill all the fields');
        }
        console.log(catobj);
    }

    const onDiscard=(e)=>{
        e.preventDefault();
        setcatobj({ category: '',newcategory:'',color:'',subcatallowed:0 });
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }





    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Category Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='w-full mx-auto p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center text-2xl'>CATEGORIES</h2>
                                <hr className='mt-2 w-48 border-2 mx-auto' />
                                <div className='flex flex-col py-2'>
                                    <label>Choose a Category</label>
                                    <select required name="category" value={catobj.category} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.category}>{cat.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-col py-2'>
                                        <label>Enter Updated Category : </label>
                                        <input required value={catobj.newcategory} className='p-2 resize-x border mt-2 rounded-md' type="text" name='newcategory' onChange={onChange} placeholder='Enter Category' />
                                </div>
                                <div className='flex flex-col py-2'>

                                        <label>Select Header Color : </label>

                                        <input required value={catobj.color} className='w-full h-8 p-2 resize-x border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />
                                </div>
                                <div className='flex py-2'>
                                    <div className='flex-col justify-center'>

                                        <label className='py-3 font-bold'>Subcategory Allowed : yes no toggle button</label>
                                    </div>
                                    <div className='flex-col justify-center'>
                                        <input required value={catobj.subcatallowed} type="checkbox" name="subcatallowed" id="subcatallowed" />
                                    </div>
                                </div>
                                <div className='flex mx-auto'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
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


