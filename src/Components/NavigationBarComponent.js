import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogData } from './BlogData';

const NavigationBarComponent = () => {
    const [rows] = useContext(BlogData)

  return(
      <div>
          <div className='PageTitle'>
              <p className='part1'>The</p>
              <p className='part2'>Siren</p>
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
