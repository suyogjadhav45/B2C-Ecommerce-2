import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';


export default function EditSubCategory() {

    const [catarray, setcatarray] = useState([
        { id: 1, category: 'fruits' },
        { id: 2, category: 'vegetables' },
        { id: 3, category: 'dairy' },
        { id: 4, category: 'meat' },
    ])

    const [subcatarray, setsubcatarray] = useState([
        { id: 1, subcategory: 'apple' },
        { id: 2, subcategory: 'banana' },
        { id: 3, subcategory: 'mango' },
        { id: 4, subcategory: 'orange' },
    ])


    const [obj, setobj] = useState({
        category: '',
        subcategory: '',
        updatedsubcategory:'',
        color:'',
        productcatallowed:0
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.category === '' || obj.subcategory === '' || obj.updatedsubcategory === '' || obj.color === '' || obj.productcatallowed === 0) {
            alert('Please fill all the fields');
        }
        console.log(obj);
    }

    const onDiscard=(e)=>{
        e.preventDefault();
        setobj({ category: '',updatedsubcategory:'',subcategory:'',color:'',productcatallowed:0 });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Sub-Category Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='mx-auto w-full bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>SUB-CATEGORIES</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Choose a Category</label>
                                    <select required name="category" value={obj.category} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.category}>{cat.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='my-2'>
                                    <label>Subcategory</label><br />
                                    <select required value={obj.subcategory} className='mt-1 border px-2 py-2 w-full rounded-md' name="subcategory" onChange={onChange}>
                                        {subcatarray.map((subcat) => (
                                            <option key={subcat.id} value={subcat.subcategory}>{subcat.subcategory}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Enter Updated Sub Category</label>
                                    <input required className='border p-2 mt-1 rounded-md' value={obj.updatedsubcategory} type="text" name='updatedsubcategory' placeholder='Enter Sub Category' onChange={onChange} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Select Header Color</label>
                                    <input required className='w-full border p-2 mt-1 rounded-md' value={obj.color} type="color" name='color' placeholder='Enter Sub Category' onChange={onChange} />
                                </div>
                                <div className='flex py-2'>
                                    <div className='flex-col justify-center'>

                                        <label className='py-3 font-bold'>Product Allowed : yes no toggle button</label>
                                    </div>
                                    <div className='flex-col justify-center'>
                                        <input required value={obj.productcatallowed} type="" name="productcatallowed" id="productcatallowed" />
                                    </div>
                                </div>
                                <div className='flex mx-auto mt-2'>

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


