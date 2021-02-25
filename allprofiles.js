import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import{FaShareAltSquare} from "react-icons/fa";
import {CgGym} from "react-icons/cg";
import {AiFillHome} from "react-icons/ai";
import {BsCameraVideoFill} from "react-icons/bs";
import {FaTree} from "react-icons/fa";
import {BiRupee} from "react-icons/bi";
import './profile.css'
import { BrowserRouter } from 'react-router-dom';


function Allprofiles({name,experience,skills,source,outorin,where,price})
{
   return(

      <BrowserRouter>
      <switch>
<div className='cardfirst'>
      <a href="https://mishraakash404.github.io/trainer-details/">
         <div className='Upper-container'>

         <div className='image-container'>
                  <img src="" alt="" height="100px" width="100px"/>

               
                  <h2> {name}<FaShareAltSquare/></h2>
                  <h3><AiFillAppstore/>{experience}</h3>
                  <h3><CgGym/>{skills}</h3>
               </div>
               
               
   </div>
<div className='lower-container'>
<h3><BsCameraVideoFill/>{source}</h3>
      <h3><AiFillHome/>{outorin}</h3>
      <h3><FaTree/>{where}</h3>
      <h2><BiRupee/>{price}</h2>
</div>
   </a>
   </div>
   </switch>
   </BrowserRouter>
   );

}

export default Allprofiles;