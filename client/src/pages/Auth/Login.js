import React, { useState} from 'react';
import Layout from '../../components/layouts/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/authStyle.css';




const Login = () => {

                const [email, setEmail] = useState("");
                const [password, setPassword] = useState("");
                const navigate = useNavigate();


               //handle form submit
                const handleSubmit = async(e) => {
                    e.preventDefault();
                    try {
                        const res =  await axios.post("/api/v1/auth/login",
                            {email, password}
                        );
                        if(res && res.data.success){
                            toast.success(res.data &&res.data.message);
                            navigate("/");
                        }
                        else{
                            toast.error(res.data.message);
                        }
                        
                    }catch (error){
                        console.log(error);
                        toast.error("Something went wrong in registration");
                    }
                                   
                };



  return (

    <Layout title= {"Login - FeriBrandIT"}>
    
                <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <h1 className="title">Login to FeriBrandIT</h1>
                        <div className="mb-3">
                            <input type="email"
                                 className="form-control" 
                                 value={ email }
                                 onChange={ (e)=> setEmail(e.target.value)}
                                 id="exampleInputEmail1"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <input type="password" 
                            className="form-control"
                             value = { password}
                             onChange={ (e)=> setPassword(e.target.value)}
                             id="exampleInputPassword1"
                             placeholder="Enter Your Password" 
                             required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                </div>
           </Layout>
  )
}

export default Login;
