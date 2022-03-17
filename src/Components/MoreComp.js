import React from 'react';
import './style.css'
import { useContext } from 'react';
import { BlogData } from './BlogData';
import { Link } from 'react-router-dom';

const MoreComp = () => {

    const [rows] = useContext(BlogData)

    return (
        <div className='MoreContainer'>
            <p className='TrendingTitle'>More From Siren</p>
            <hr />

            <div className='TheLatestBox'>
                {rows.filter((value) => value.ID === "2" && (value.Category === "Bollywood" || value.Category === "Fitness" || value.Category === "Hollywood")).map((val) => (

                    <Link to={`/article/${val.Category}/${val.ID}`} className='TheLatestContent'>
                        <p style={{textAlign:"center"}}className='blogTitle'>Related reads</p>
                        <img src={val.Image} className='TheLatestImg' alt='' />
                        <p style={{textAlign:"center"}}className='blogTitle'>{val.Title}</p>

                        
                    </Link>
                ))}
            </div>



        </div>
    );
};

export default MoreComp;
