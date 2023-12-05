import React from 'react'
import { Link } from 'react-router-dom'

const CirclePetCard = () => {
    return (
        <div className=' flex flex-col items-center justify-center gap-4 px-4'>
            <img src="/images/skills/web_developer.png"
                className='  h-[250px] object-cover rounded-full '
                alt="" />
            <div className=' flex flex-col gap-3 text-center '>
                <div className=' text-2xl font-bold text-primary '>
                    Diary
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ab quisquam illum. Necessitatibus doloremque error eligendi doloribus modi suscipit, adipisci nulla, quas, ullam quos aliquid sequi rem odit animi aliquam.
                </div>
                <Link to='/#' className=' text-md font-bold hover:text-primary '>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default CirclePetCard