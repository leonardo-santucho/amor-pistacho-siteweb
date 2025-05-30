import { motion } from "framer-motion";

export default function Hero() {
return (
    <div className="relative h-screen w-full">
        <img
            src="/portada-01.jpg"
            alt="Amor Pistacho"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-white text-5xl md:text-7xl font-bold italic font-raleway tracking-wide drop-shadow-lg text-center"
            >
                amor<br />pistacho
            </motion.h1>
        </div>
    </div>
);
}
