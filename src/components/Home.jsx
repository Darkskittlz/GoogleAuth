import '../App.css'
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Home = ({ credentialResponse }) => {

  return (
    <>
      <Navbar credentialResponse={credentialResponse} />
      <div className="items-center justify-center flex flex-col">
        <div className="w-1/2 p-12 rounded-xl border">
          <h2 className="text-2xl">Homepage </h2>
        </div>
      </div>
    </>
  )
}

export default Home;
