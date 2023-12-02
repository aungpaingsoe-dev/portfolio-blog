import { motion } from "framer-motion"
import { PiArrowFatDown } from "react-icons/pi";
import { PiCodeSimple } from "react-icons/pi";

const HeroSection = () => {
    return (
        <div className=' w-[70%] mx-auto h-screen flex items-center relative '>
            <div className=' basis-1/2 '>
                <div className=' flex flex-col gap-6 '>
                    <div className=' text-xl text-primary '>
                        Hi my name is
                    </div>
                    <div className=' text-6xl font-bold '>
                        Phyo Zaw
                    </div>
                    <div className=' text-5xl text-primary lobster-tow-font '>
                        I explore how people and technology are making the world a better place
                    </div>
                    <div>
                        I'm a Back-End Web Developer skilled in Node.js, Express.js, PHP, and Laravel. I specialize in crafting robust APIs and scalable server-side applications.
                    </div>
                </div>
            </div>
            <div className=' basis-1/2 '>
                <div className=" flex flex-col items-center justify-center relative ">
                    <div className=" w-8/12 relative ">
                        <img
                            src="/images/default/hero.jpg"
                            className=" h-[65vh] object-cover grayscale-[40%] -rotate-2 shadow-sm "
                            alt=""
                        />
                        <img src="/images/default/dots_bg.jpg"
                            className=" h-[65vh] absolute -top-10 -end-2 -z-10 "
                            alt="" />
                        <div className=" absolute -bottom-10 -end-5 w-[110px] h-[110px] z-10 bg-secondary opacity-80 rounded-full flex items-center justify-center ">
                        </div>
                        <div className=" absolute bottom-7 -end-5 w-[80px] h-[80px] opacity-50 bg-secondary rounded-full "></div>
                    </div>
                </div>
            </div>
            <div className=' absolute bottom-5 left-1/2 '>
                <div className=" animate-bounce cursor-pointer flex flex-col justify-center items-center ">
                    <div>Scroll</div>
                    <PiArrowFatDown className=" text-3xl " />
                </div>
            </div>
        </div>
    )
}

export default HeroSection