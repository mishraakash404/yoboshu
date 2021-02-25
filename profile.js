import React,{useState} from 'react'
import Allprofiles from './allprofiles'
import './profile.css'
import {AiFillHome} from "react-icons/ai";
import {FaRunning} from 'react-icons/fa';
import {RiGroupFill} from 'react-icons/ri';
import {BiAnalyse} from 'react-icons/bi';
import {FiMoreHorizontal} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './footer.css'

function Card()
{
   const[name]=useState('your name');
   const[experience]=useState('experience');
   const[skills]=useState('skills');
   const[source]=useState('source');
   const[outorin]=useState('outorin');
   const[where]=useState('where');
   const[price]=useState('price');


return(
      <BrowserRouter>
      <Switch>
      
      <div className='card'>
      <Allprofiles name={'SURAJ KUMAR'} experience={'Experience:5+ years'} skills={'Gym,yoga,Boxing,\n taekwondo,trainer'} 
      source={'Online(Google Meet)'} outorin={'In home'} where={'Outdoors'} price={'150 / session'}/>
      <Allprofiles name={'PURUSHOTTAM DAS'} experience={'Experience: 3+ years'} skills={'gym,cardio,boxing'} 
      source={'In home'} outorin={'Outdoors'} price={''}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      <Allprofiles name={name} experience={experience} skills={skills} 
      source={source} outorin={outorin} where={where} price={price}/>
      
      <div className="footer">
      <table>
      <tr>
      
      <th><p><AiFillHome/>Home</p></th>
      <th><Link className='link' to="/App.js"><p><FaRunning/>Trainers</p></Link></th>
      <th><p><RiGroupFill/>Boot Camp</p></th>
      <th><p><BiAnalyse/>Fitness Tools</p></th>
      <th><p><FiMoreHorizontal/>More</p></th>
      </tr>
      </table>

      </div>
      

      </div>
      
      </Switch>
   </BrowserRouter>
      
   );}

export default Card;



