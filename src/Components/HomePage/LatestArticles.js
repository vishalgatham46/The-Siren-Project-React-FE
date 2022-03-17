
import React from 'react';
import { useContext, useState } from 'react';
import { BlogData } from '../BlogData';
import TopPostHome from './TopPostHome';
import Advertisement from '../Advertisement';
import { Link } from 'react-router-dom';



const LatestArticles = () => {

    const [rows] = useContext(BlogData)
    const [load, setLoad] = useState(true)


    return (
        <>
            <p className='TrendingTitle'>Latest Articles</p>
            <hr className='LineBreak' />

                <div>
                    {rows.filter((value) => (load ? (value.ID <= 3) : (value.ID <= 4)) && value.Category === "Bollywood").map((val) => (

                        <div>
                            <Link to={`/article/${val.Category}/${val.ID}`}>

                                <div className='blogContainer'>
                                    <img src={val.Image} className='LatestArticlesImage' alt='' />
                                    <div className='blogContent'>
                                        <p style={{textAlign:"center"}} className='blogTitle'>{val.Title}</p>
                                        <p className='blogDetail'>{val.Body}</p>
                                        <p className='blogCategoryMain'>{val.Category}</p>
                                    </div>
                                </div>
                            </Link>

                            <hr className='blogLine' />
                        </div>
                    ))}

                    <div >
                        <button onClick={() => setLoad(!load)} className='load-more-btn'>{(load ? "View More" : "View Less")}</button>
                    </div>
                </div>

                <div>
                    <Advertisement />
                    <TopPostHome />
                </div>

        </>

    );
};

export default LatestArticles;

