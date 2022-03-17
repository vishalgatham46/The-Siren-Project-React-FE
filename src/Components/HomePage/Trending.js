import React from 'react';
import '../style.css'
import { useContext } from 'react';
import { BlogData } from '../BlogData';
import { Link } from 'react-router-dom';

const Trending = () => {

    const [rows] = useContext(BlogData)

    return (
        <div className='TrendingArticles'>
            <p className='TrendingTitle'>Trending</p>
            <hr className='LineBreak' />

            <div className='TrendingArticlesContainer'>
                {rows.filter((value) => value.ID === "1" && (value.Category === "Bollywood" || value.Category === "Fitness" || value.Category === "Hollywood")).map((val) => (

                    <Link to={`/article/${val.Category}/${val.ID}`} className='TrendingContents'>
                        <img src={val.Image} className='TrendingImg' alt='' />
                        <p className='blogTitle'>{val.Title}</p>
                        <p className='TrendngDetails'>{val.Body}</p>
                        <p className='TrendngDetails'><b>{val.Category}</b></p>
                    </Link>
                ))}
            </div>



        </div>
    );
};

export default Trending;
