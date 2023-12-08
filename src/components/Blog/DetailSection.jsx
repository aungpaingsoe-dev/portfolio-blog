import React, { useEffect, useState } from 'react'
import blogData from "../../../public/data/blogs.json"
import { CiCalendar } from "react-icons/ci";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const DetailSection = ({ blogId }) => {

    const [blog, setblog] = useState(null);

    useEffect(() => {
        setblog(blogData.find(blog => blog.id == blogId))
    }, [blog]);

    return (
        <div className=' w-[95%] md:w-[45%] mx-auto flex flex-col gap-3 my-5 md:my-10 '>
            <div className=' text-4xl font-medium flex gap-2 items-center '>
                <Link to={`/blogs`}>
                    <IoArrowBackSharp className=' text-3xl hover:text-secondary ' />
                </Link>
                {blog?.title}
            </div>
            <div className=' flex items-center gap-1 '>
                <CiCalendar className=' text-xl ' />
                {blog?.date}
            </div>
            <div className=' bg-slate-200 py-1 rounded-lg text-xs text-center w-[100px] '>
                {blog?.category}
            </div>
            <div>
                <img src={blog?.image_url}
                    className=' w-full '
                    alt="" />
            </div>
            <div>
                {blog?.content}
            </div>
        </div>
    )
}

export default DetailSection