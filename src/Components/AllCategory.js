import React from 'react';
import { useContext, useState } from 'react';
import { BlogData } from './BlogData';
import { useParams } from 'react-router-dom';
import TopPostRight from './TopPostRight'
import Advertisement from './Advertisement';
import { Link } from 'react-router-dom';


const AllCategory = () => {

    const [rows] = useContext(BlogData)

    const { cat } = useParams()

    const [load, setLoad] = useState(true)

    return (
        <div className='blogarea mobileBlogArea'>
            <div>
                <p className='categoryTitle'>{cat}</p>
                <hr className='categoryUL' />

                {rows.filter((value) => (load ? (value.ID <= 4) : (value.ID <= 6)) && value.Category === cat).map((val) => (

                    <div className='MainCategoryContainer mobileCategoryContainer'>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='blogElements mobileBlogElements'>
                                <img src={val.Image} className='blogImage' alt='' />
                                <div className='blogContent'>
                                    <p className='blogTitle'>{val.Title}</p>
                                    <p className='blogDetail'>{val.Body}</p>
                                </div>
                            </div>
                        </Link>

                        <hr className='blogEndLine' />
                    </div>
                ))}

                <div >
                    <button className='load-more-btn' onClick={() => setLoad(!load)} >{(load ? "View More" : "View Less")}</button>
                </div>
            </div>

            <div>
                <TopPostRight />
                <Advertisement />
            </div>

        </div>

    );
};

export default AllCategory;
