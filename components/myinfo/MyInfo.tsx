import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import TextScramble from "../TextScramble";
import StripePaymentStart from "../StripePaymentStart";
// import TextAnimation from "../TextAnimation";

export default function MyInfo() {
  const phrases = ["Vladyslav", "Tsurkanenko"];
  const [text, count] = useTypewriter({
    words: ["Full Stack Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <div className="p-5">
        {/* <div className="container">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl text-teal-600 font-medium text-center text"
                    >
                        Vladyslav Tsurkanenko
                    </motion.h2>
                </div> */}
        <TextScramble phrases={phrases} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          viewport={{ once: true }}
          className="text-2xl py-2 text-center text-gray-500"
        >
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          viewport={{ once: true }}
          className="text-md py-5 leading-8 text-gray-800 dark:text-white text-center lg:mx-80"
        >
          I am an IAM Developer & Technical Consultant at SITS. I have graduated
          from Spiced Academy a year ago, where I studied WebDevelopment. I am
          looking for possibility to learn and improve my skills with
          Typescript, Javascript, as well as advance my knowledge of FrontEnd
          and BackEnd development. I believe that my experience in banking,
          finance, and the skills such as: teamwork, taking initiative, and my
          analytical skills will help me in a new environment. I am very
          motivated to contribute to your projects and learn the process very
          quickly.
        </motion.p>
      </div>

      <div className="flex justify-center flex-col items-center gap-5 bg-blue-500 w-[350px] mx-auto rounded-2xl shadow-lg">
        <h1 className="text-white">Please, support me via a Stripe payment:</h1>
        <StripePaymentStart />
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          href="https://github.com/vladyslavt97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub
            className="dark:fill-white animate-pulse"
            color="black"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          href="https://www.linkedin.com/in/vladyslav-tsurkanenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            className="dark:fill-white animate-pulse"
            color="darkblue"
          />
        </motion.a>
      </div>

      <motion.div
        className="relative mx-auto bg-gradient-to-b from-teal-500 w-60 h-60 m-10 overflow-hidden shadow-lg rounded-full"
        initial={{
          opacity: 0,
          borderRadius: "100%",
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          borderRadius: "100%",
        }}
        viewport={{ once: true }}
      >
        <Image
          // className='rounded-full'
          src="/Vlad.png"
          alt="sometext"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
}
