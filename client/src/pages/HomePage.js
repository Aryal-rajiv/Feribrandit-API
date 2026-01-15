import React from 'react'
import Layout from '../components/layouts/Layout';
import { useAuth } from '../context/Auth';

const HomePage = () => {

  const [auth] = useAuth();

  return (
    <Layout>
      <h1>Welcome to Feribrandit</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  )
}

export default HomePage
