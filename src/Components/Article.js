import React from 'react';
import './style.css'
import { useContext } from 'react';
import { BlogData } from './BlogData';
import { useParams } from 'react-router-dom';
import { AiFillLike,AiFillFacebook,AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
import MoreComp from './MoreComp';



const Article = () => {

    const [rows] = useContext(BlogData)
    const { Id } = useParams()
    const { cat } = useParams()

    return (
        <div>
            {rows.filter((value) => (value.ID === Id && value.Category === cat)).map((val) => (
                <div className='articleContainer'>
                    <p className='articleTitle'>{val.Title}</p>
                    <div className='articleProfileBox'>
                        <img src='https://cdn2.vectorstock.com/i/1000x1000/44/66/avatar-man-with-colorful-clothes-graphic-vector-9374466.jpg' alt='' className='articleProfileImg' />
                        <div className='authorName'>
                            <p>{val.Author}</p>
                            <p>{val.Date}</p>
                        </div>
                        
                    </div>
                    <img src={val.Image} alt='' className='articleImg' />
                    <p>{val.Body}{val.Body}</p>
                    <p><AiFillLike />  <b>5k Likes</b></p>
                    <hr />

                    <div className='articleProfileBox'>
                        <img src='https://cdn2.vectorstock.com/i/1000x1000/44/66/avatar-man-with-colorful-clothes-graphic-vector-9374466.jpg' alt='' className='articleProfileImg' />
                        <div>
                            <p>Written By</p>
                            <p className='authorName'>{val.Author}</p>
                            <p>{val.Date}</p>
                        </div>
                        <div className='articleIcons'>
                            <p><AiFillFacebook /></p>
                            <p><AiFillInstagram /></p>
                            <p><AiFillTwitterCircle/></p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

        <MoreComp />

        </div>
    );
};

export default Article;
