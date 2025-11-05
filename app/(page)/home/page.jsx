"use client";
import React, { useState } from 'react'
import Image from "next/image";
import nobita from "../../../public/images/nobi.jpg"


const home = () => {

  const [user , setUser] = useState([])

  return (
    <div>
      <h1>welcome to my Home</h1>
       <Image 
        src={nobita} 
        alt="My Profile Picture"
        width={400}
        height={200}
      />
 

    </div>
  )
}

export default home
