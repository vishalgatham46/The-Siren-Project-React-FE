import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogData } from './BlogData';
import { AiOutlineMore,AiFillCloseSquare } from "react-icons/ai"

const NavigationBarComponent = () => {
    const [rows] = useContext(BlogData)

    function mobilenavbar(){
      
        var a=document.getElementById("navContainermobile");
        a.style.display="grid";
        var b=document.getElementById("close-btn");
        b.style.display="grid"

    }
    function closebtn() {  
        var a=document.getElementById("navContainermobile");
        a.style.display="none";
        var b=document.getElementById("close-btn");
        b.style.display="none"
    }

  return(
      <div>
          <div className='PageTitle'>
              <p className='part1'>The</p>
              <p className='part2'>Siren</p>
          </div>
            <button type='button' onClick={mobilenavbar} className='more-icon'><AiOutlineMore /></button>
            <button type='button' onClick={closebtn}id='close-btn'><AiFillCloseSquare /></button>
            <div id='navContainermobile' >
              <Link to="/"  className='CategoryHead'>Home</Link>

              {rows.filter((value)=> value.ID ==="1").map((val)=> (

              <Link to={`/category/${val.Category}`} className='CategoryHead'>{val.Category}</Link>
             
              
              ))}
        
            </div>
          <div className='navContainer' >
              <Link to="/"  className='CategoryHead'>Home</Link>

              {rows.filter((value)=> value.ID ==="1").map((val)=> (

              <Link to={`/category/${val.Category}`} className='CategoryHead'>{val.Category}</Link>
              
              ))}
          </div>
          <hr/>

      </div>
  );
};

export default NavigationBarComponent;
