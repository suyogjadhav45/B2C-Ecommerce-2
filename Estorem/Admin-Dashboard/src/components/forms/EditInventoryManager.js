import React from 'react'
import { useState } from "react";
import '../../App.css';
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';




export default function EditInventoryManager() {


    
    const location = useLocation();
    let oldobj=location.state.obj.e;



    const [obj, setobj] = useState({
        firstname: oldobj.firstname,
        lastname: oldobj.lastname,
        email: oldobj.email,
        contact: oldobj.contact,
        agentimage: "",
        city: oldobj.city,
        address: oldobj.address,
        state: oldobj.state
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.firstname === '' || obj.lastname === '' || obj.email === '' || obj.contact === '' || obj.managerimage === '' || obj.city === '' || obj.address === '' || obj.state === '') {
            alert('Please fill all the fields');
        }
        else{
            editInventoryRequest();
            console.log("editinventoryrequest : \n");
        }
        console.log(obj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({
            firstname: '',
            lastname: '',
            email: '',
            contact: '',
            managerimage: null,
            city: '',
            address: '',
            state: ''
        });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    // editinventorymanager Api
    const editInventoryRequest=async ()=>{
        console.log("hiii")
        const response = await fetch(`http://127.0.0.1:8000/api/deliveryagent/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }


    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Inventory Manager Page" />
                    <div className='mt-4 items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>INVENTORY MANAGER</h2>
                                <hr className='w-36 mt-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Firstname</label>
                                    <input value={obj.firstname} className='mt-1 border p-2 rounded-md' type="text" name='firstname' placeholder='Enter First Name' onChange={onChange} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Lastname</label>
                                    <input value={obj.lastname} required className='mt-1 border p-2 rounded-md' type="text" name='lastname' placeholder='Enter Last Name' onChange={onChange} />
                                </div>


                                <div className='flex flex-col py-2'>
                                    <label>Email</label>
                                    <input value={obj.email} required className='mt-1 border p-2 rounded-md' type="email" name='email' placeholder='Enter Email' onChange={onChange} />
                                </div>


                                <div className='flex flex-col py-2'>
                                    <label>Contact Number</label>
                                    <input value={obj.contact} required className='mt-1 border p-2 rounded-md' type="tel" name='contact' placeholder='Enter Contact Number' onChange={onChange} />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Upload Image</label>
                                    <input value={obj.managerimage} required className='mt-1 border p-2 rounded-md' type="file" name="managerimage" onChange={onChange} />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>city</label>
                                    <input value={obj.city} required className='mt-1 border p-2 rounded-md' type="text" name='city' placeholder='Enter City' onChange={onChange} />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Address</label>
                                    <textarea onChange={onChange} value={obj.address} rows="3" name="address" placeholder='Enter address' className='mt-1 border p-2 rounded-md'>

                                    </textarea>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>state</label>
                                    <input value={obj.state} required className='mt-1 border p-2 rounded-md' type="text" name='state' placeholder='Enter State' onChange={onChange} />
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


