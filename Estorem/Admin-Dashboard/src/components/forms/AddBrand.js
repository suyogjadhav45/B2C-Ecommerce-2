import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';


export default function AddBrand() {

    const [vendorarray, setvendorarray] = useState([
        { id: 1, brand: 'Vendor1' },
        { id: 2, brand: 'Vendor2' },
        { id: 3, brand: 'Vendor3' },
        { id: 4, brand: 'Vendor4' },
    ])


    const [obj, setobj] = useState({
        productname: '',
        brand: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.productname === '' || obj.brand === '') {
            alert('Please fill all the fields');
        }
        console.log(obj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({
            productname: '',
            brand: ''
        });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Brand Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>Brands</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />
                                <div className='flex flex-col py-2'>
                                    <label>Enter Brand Name</label>
                                    <input required className='border p-2 mt-1 rounded-md' type="text" name='productname' value={obj.productname} placeholder='Enter Brand Name' onChange={onChange} />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Select Brand Vendor</label>
                                    <select required name="brand" value={obj.brand} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        {vendorarray.map((cat) => (
                                            <option key={cat.id} value={cat.brand}>{cat.brand}</option>
                                        ))}
                                    </select>
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


