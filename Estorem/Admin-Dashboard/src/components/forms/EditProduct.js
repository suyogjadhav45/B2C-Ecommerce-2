import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';



export default function EditProduct() {

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

    const [brandarray, setbrandarray] = useState([
        { id: 1, brand: 'ParleG' },
        { id: 2, brand: 'Amul' },
        { id: 3, brand: 'Yash' },
        { id: 4, brand: 'Palekar' },
    ])

    const [uomarray, setuomarray] = useState([
        { id: 1, uom: 1 },
        { id: 2, uom: 2 },
        { id: 3, uom: 3 },
        { id: 4, uom: 4 },
    ])

    const [offerarray, setofferarray] = useState([
        { id: 1, offer: "10 % off" },
        { id: 2, offer: "20 % off" },
        { id: 3, offer: "30 % off" },
        { id: 4, offer: "Buy 1 Get 1" },
    ])

    const [obj, setobj] = useState({
        productname: '',
        productprice: 0,
        productimage: null,
        category: '',
        subcategory: '',
        brand: '',
        uom: 0,
        offer: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.productname === '' || obj.productprice === 0 || obj.productimage === null || obj.category === '' || obj.subcategory === '' || obj.brand === '' || obj.uom === 0 || obj.offer === '') {
            alert('Please fill all the fields');
        }
        console.log(obj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({
            productname: '',
            productprice: 0,
            productimage: null,
            category: '',
            subcategory: '',
            brand: '',
            uom: '',
            offer: ''
        });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Product Page" />
                    <div className='items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>PRODUCTS</h2>
                                <hr className='w-36 mt-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Product Name</label>
                                    <input required value={obj.productname} className='mt-1 border p-2 rounded-md' type="text" name='productname' placeholder='Enter Product Name' onChange={onChange} />
                                </div>


                                <div className='flex flex-col py-2'>
                                    <label>Product Price</label>
                                    <input required value={obj.productprice} className='mt-1 border p-2 rounded-md' type="number" name='productprice' placeholder='Enter Product Price' onChange={onChange} />
                                </div>


                                <div>
                                    <label>Category</label><br />
                                    <select required value={obj.category} className='mt-1 border px-2 py-2 w-full rounded-md' name="category" onChange={onChange}>
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
                                <div className='my-2'>
                                    <label>Brand</label><br />
                                    <select required value={obj.brand} className='mt-1 border px-2 py-2 w-full rounded-md' name="brand" onChange={onChange}>
                                        {brandarray.map((b) => (
                                            <option key={b.id} value={b.brand}>{b.brand}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='my-2'>
                                    <label>UMO(Kg's)</label><br />
                                    <select required value={obj.uom} className='mt-1 border px-2 py-2 w-full rounded-md' name="uom" onChange={onChange}>
                                        {uomarray.map((b) => (
                                            <option key={b.id} value={b.uom}>{b.uom}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='my-2'>
                                    <label>Offer</label><br />
                                    <select required value={obj.offer} className='mt-1 border px-2 py-2 w-full rounded-md' name="offer" onChange={onChange}>
                                        {offerarray.map((b) => (
                                            <option key={b.id} value={b.offer}>{b.offer}</option>
                                        ))}
                                    </select>
                                </div>


                                <div className='flex flex-col py-2'>
                                    <label>Upload Product Image</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="file" value={obj.productimage} name="productimage" onChange={onChange} />
                                </div>

                                <div className='flex mx-auto mt-2'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
                                    <button className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


