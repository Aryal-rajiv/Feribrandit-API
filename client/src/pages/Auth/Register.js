import React, { useState} from 'react';
import Layout from '../../components/layouts/Layout';
import {toast} from 'react-toastify';


const Register = () => {

                const [name, setName] = useState("")
                const [email, setEmail] = useState("")
                const [password, setPassword] = useState("")
                const [phone, setPhone] = useState("")
                const [address, setAddress] = useState("")

                const handleSubmit = (e) => {
                    e.preventDefault();
                    console.log(name, email, password, phone, address);
                    toast.success("Registered Successfully");
                };

  return (
       <>
       <Layout title= {"Register - FeriBrandIT"}>

            <div className="register">
                <h1>Register to FeriBrandIT</h1>
                    <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
       </Layout>
       </>
  );
};

export default Register;