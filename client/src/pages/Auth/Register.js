import React, { useState} from 'react';
import Layout from '../../components/layouts/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/authStyle.css';


const Register = () => {

                const [name, setName] = useState("");
                const [email, setEmail] = useState("");
                const [password, setPassword] = useState("");
                const [phone, setPhone] = useState("");
                const [address, setAddress] = useState("");
                const navigate = useNavigate();


               //handle form submit
                const handleSubmit = async(e) => {
                    e.preventDefault();
                    try {
                        const res =  await axios.post("/api/v1/auth/register",
                            {name, email, password, phone, address}
                        );
                        if(res && res.data.success){
                            toast.success(res.data &&res.data.message);
                            navigate("/login");
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
       <>
       <Layout title= {"Login - FeriBrandIT"}>

            <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1 className="title">Register to FeriBrandIT</h1>
                    <div className="mb-3">
                        <input type="text"
                             className="form-control" 
                             value= { name }
                             onChange={ (e)=> setName(e.target.value)}
                             id="name1"
                             aria-describedby="emailHelp" 
                            placeholder="Your Full Name"
                            required
                        />
                    </div>
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
                        <input type="text"
                             className="form-control" 
                             value = { phone }
                             onChange = { (e)=> setPhone(e.target.value)}
                             id="phone1"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input type="text"
                             className="form-control" 
                             id="address1"
                                value = { address}
                                onChange={ (e)=> setAddress(e.target.value)}
                            placeholder=" Your Full Address"
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
                    <button type="submit" className="btn btn-primary">Register</button>
                    </form>
            </div>
       </Layout>
       </>
  );
};

export default Register;