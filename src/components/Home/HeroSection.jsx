import { motion } from "framer-motion"
import { PiArrowFatDown } from "react-icons/pi";

const HeroSection = () => {
    return (
        <div className=' w-[95%] md:w-[65%] mx-auto md:h-screen flex flex-col-reverse md:flex-row items-center relative '>
            <div className=' basis-1/2 '>
                <div className=' flex flex-col gap-6 '>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                        className=' text-xl text-primary '>
                        Hi my name is
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.4 }}
                        className=' text-6xl font-bold '>
                        Phyo Zaw
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.6 }}
                        className=' text-5xl text-primary lobster-tow-font '>
                        I explore how people and technology are making the world a better place
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.8 }}
                    >
                        I'm a Back-End Web Developer skilled in Node.js, Express.js, PHP, and Laravel. I specialize in crafting robust APIs and scalable server-side applications.
                    </motion.div>
                </div>
            </div>
            <div className=' basis-1/2 '>
                <div className=" flex flex-col items-center justify-center relative ">
                    <div className=" w-8/12 relative ">
                        <motion.img
                            initial={{
                                opacity: 0,
                                rotate: 5
                            }}
                            animate={{
                                opacity: 1,
                                rotate: -2
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 2,
                                type: "spring",
                                bounce: 0.5
                            }}
                            src="/images/default/hero.jpg"
                            className=" h-[65vh] object-cover grayscale-[40%] shadow-sm "
                            alt=""
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3 }}
                            src="/images/default/dots_bg.jpg"
                            className=" h-[65vh] absolute -top-10 -end-10 -z-10 "
                            alt="" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.8, scale: 1 }}
                            transition={{
                                delay: 0.7,
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className=" absolute -bottom-10 -end-12 w-[110px] h-[110px] z-10 bg-secondary opacity-80 rounded-full flex items-center justify-center ">
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.6, scale: 1 }}
                            transition={{
                                delay: 0.9,
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className=" absolute bottom-7 -end-12 w-[80px] h-[80px] opacity-50 bg-secondary rounded-full "></motion.div>
                    </div>
                </div>
            </div>
            <div className=' absolute bottom-5 left-1/2 '>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", delay: 0.9 }}
                    className=" animate-bounce cursor-pointer flex flex-col justify-center items-center ">
                    <div>Scroll</div>
                    <PiArrowFatDown className=" text-3xl " />
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection