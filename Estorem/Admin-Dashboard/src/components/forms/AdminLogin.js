import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../App.css';
import axios from "axios";


export default function AdminLogin({ update, login }) {
    const navigate = useNavigate();

   const [userinfo, setuserinfo] = useState({username:"",password:""})

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userinfo.username === '' || userinfo.password === '') {
            alert('Please fill all the fields');
        }
        else{
            onLoginSubmit();
        }
        console.log(userinfo);
        navigate("/dashboard/home");
        
    }


    const onChange = (e) => {
        setuserinfo({ ...userinfo, [e.target.name]: e.target.value });
    }
    
  const onLoginSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/login/', {
        username: userinfo.username,
        password: userinfo.password
    });
    if (response.data.is_superuser) {
      // Redirect to superuser dashboard or do something else
    } else {
      // Display error message or redirect to regular user dashboard
    }
  };

    return (
        <div className='w-full'>
            <div className='mt-8 p-8 h-screen mx-auto rounded-lg overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                    <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>

                        <h2 className='text-center font-bold font-mono text-2xl'>ADMIN LOGIN</h2>
                        <hr className='w-36 mt-2 border-2 mx-auto'/>

                        
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input required value={userinfo.username} className='mt-1 border p-2 rounded-md' type="email" name='username' placeholder='Enter Email (Username)' onChange={onChange}/>
                        </div>


                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input required value={userinfo.password} className='mt-1 border p-2 rounded-md' type="password" name='password' placeholder='Enter Password' onChange={onChange}/>
                        </div>

                        <button type="submit" className='font-poppins font-bold border w-full mt-3 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black' >LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}



