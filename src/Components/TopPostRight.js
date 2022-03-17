import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogData } from './BlogData';
import { useParams } from 'react-router-dom';


const TopPostRight = () => {

    const [rows] = useContext(BlogData)

    const { cat } = useParams()

    return (
        <div>
            <p className='topPostcategory'>Top Post</p>
            <hr className='topPostcategoryLine' />
            <div>

                {rows.filter((value) => value.ID === "1" && value.Category === cat).map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='LatestArticle'>
                                <img src={val.Image} className='TopPostImg MobileToppostImg' alt=''/>
                                <div className='titlearea'>
                                    <div >
                                        <p className='blogTitle'>{val.Title}</p>
                                        <p className='blogCategory'>{val.Category}</p>
                                    </div>
                                    <p className='TopPostId'>{val.ID}</p>
                                </div>
                            </div>
                            <hr className='blogLine' />
                        </Link>
                    </div>
                ))}


                {rows.filter((value) => value.ID >= 2 && value.ID <= 4 && value.Category === cat).map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='BelowContainer mobileBelow'>
                                <img src={val.Image} className='SmallImages' alt=''/>
                                <div className='TopPostDetails'>
                                    <p className='blogTitle'>{val.Title}</p>
                                    <p className='blogCategory'>{val.Category}</p>
                                </div>
                                <p className='TopPostId'>{val.ID}</p>
                            </div>
                            <hr className='blogLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default TopPostRight