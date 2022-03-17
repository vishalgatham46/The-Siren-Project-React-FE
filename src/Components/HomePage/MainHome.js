import React from 'react';
import '../style.css'
import { useContext } from 'react';
import { BlogData } from '../BlogData';
import { Link } from 'react-router-dom';


const MainHome = () => {

    const [rows] = useContext(BlogData)

    return (
        <div className='MainHomeContainer'>
            <div className='MainHomeArticle-1'>
                {rows.filter((value) => value.ID === "3" && value.Category === "Fitness").map((val) => (

                    <Link to={`/article/${val.Category}/${val.ID}`}>
                        <img src={val.Image} className='MainHomeImage1' alt=''/>
                        <div className='MainHomeArticleDetails'>
                            <p className='MainHomeArticleTitle1'>{val.Title}</p>
                            <p>Published on {val.Date}</p>
                        </div>
                    </Link>
                ))}
            </div>


            <div className='MainHomeArticle-2'>
                {rows.filter((value) => value.ID === "5" && (value.Category === "Technology" || value.Category === "Food")).map((val) => (
                    <div className='RightArticle'>
                        <Link to={`/article/${val.Category}/${val.ID}`}>
                            <img src={val.Image} className='MainHomeImage2' alt='' />
                            <div className='MainHomeArticleDetails2'>
                                <p className='MainHomeArticleTitle2'>{val.Title}</p>
                                <p>Published on {val.Date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MainHome;
