import React from 'react';
import '../style.css'
import { useContext } from 'react';
import { BlogData } from '../BlogData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LatestStories = () => {

    const [rows] = useContext(BlogData)

    const [load, setLoad] = useState(true)


    return (
        <div className='LatestStoriesContainer'>
            <p className='TrendingTitle'>Latest Stories</p>
            <hr className='LineBreak' />
            <div className='TheLatestBox'>
                {rows.filter((value) => (load ? (value.ID === "2") : (value.ID <= 3)) && (value.Category === "Food" || value.Category === "Fitness" || value.Category === "Hollywood")).map((val) => (
                    <>
                        <Link to={`/article/${val.Category}/${val.ID}`} className='LatestStories'>
                            <p style={{textAlign:"center"}}className='blogTitle'>{val.Title}</p>
                            <p className='blogDetail'>{val.Body}</p>
                            <p style={{textAlign:"center"}}className='blogDetail'><strong>{val.Category}</strong> {val.Date}</p>
                        </Link>
                        <hr className='LatestStoriesLineBreak' />
                    </>

                ))}
            </div>
           
            <div >
                <button onClick={() => setLoad(!load)} className='load-more-btn'>{(load ? "View More" : "View Less")}</button>
            </div>

        </div>
    );
};

export default LatestStories;
