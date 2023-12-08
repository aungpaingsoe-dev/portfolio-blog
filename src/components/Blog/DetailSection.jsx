import React, { useEffect, useState } from 'react'
import blogData from "../../../public/data/blogs.json"
import { CiCalendar } from "react-icons/ci";

const DetailSection = ({ blogId }) => {

    const [blog, setblog] = useState(null);

    useEffect(() => {
        setblog(blogData.find(blog => blog.id == blogId))
        console.log(blog)
    },[blog]);

    return (
        <div className=' w-[45%] mx-auto flex flex-col gap-3 my-10 '>
            <div className=' text-4xl font-bold '>
                { blog?.title }
            </div>
            <div className=' flex items-center gap-1 '>
                <CiCalendar className=' text-xl ' />
                { blog?.date }
            </div>
            <div className=' bg-slate-200 py-1 rounded-lg text-xs text-center w-[100px] '>
                { blog?.category }
            </div>
            <div>
                <img src={ blog?.image_url }
                className=' w-full '
                alt="" />
            </div>
            <div>
                { blog?.content }
            </div>
        </div>
    )
}

export default DetailSection