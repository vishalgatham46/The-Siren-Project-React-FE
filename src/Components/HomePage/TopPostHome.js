import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogData } from '../BlogData';


const TopPostHome = () => {

    const [rows] = useContext(BlogData)


    return (
        <div>
            <p className='TrendingTitle'>Top Post</p>
            <hr className='LineBreak' />
            <div>

                {rows.filter((value) => value.ID === "1" && value.Category === "Hollywood").map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='LatestContainer'>
                                <img src={val.Image} className='LatestArticlesImage' alt=''/>
                                <div className='blogContent'>
                                    <div>
                                        <p style={{textAlign:"center"}}className='blogTitle'>{val.Title}</p>
                                        <p style={{textAlign:"center"}}className='blogCategory'>{val.Category}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='blogEndLine' />
                        </Link>
                    </div>
                ))}


                {rows.filter((value) => ((value.ID === "2" && value.Category === "Technology") || (value.ID === "3" && value.Category === "Hollywood") ||  (value.ID === "4" && value.Category === "Food"))).map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='blogContent'>
                                <img src={val.Image} className='LatestArticlesImage' alt=''/>
                                <div className='blogContent'>
                                    <div>
                                        <p style={{textAlign:"center"}}className='blogTitle'>{val.Title}</p>
                                        <p style={{textAlign:"center"}}className='blogCategory'>{val.Category}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='blogEndLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default TopPostHome