import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import BlogCard from '../Shared/Cards/BlogCard';
import CirclePetCard from "../Shared/Cards/CirclePetCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const BlogSection = () => {
    return (
        <div className=' my-20 bg-slate-100 py-20 '>
            <div className=' w-[65%] mx-auto'>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                    className=' text-3xl text-center mb-5 underline decoration-wavy underline-offset-4 decoration-primary '>
                    Blog
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                    className=' mx-auto text-center mb-8 w-1/2 '>
                    Here's my all—effort, creativity, and passion distilled into these words. This is my best work, a snapshot of dedication."
                </motion.div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <CirclePetCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CirclePetCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CirclePetCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className=' text-center mt-10 '>
               See all blogs <span className=' text-secondary cursor-pointer '>Click Here</span>
            </div>
        </div>
    )
}

export default BlogSection