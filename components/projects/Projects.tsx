import Image from 'next/image'
// import chess from '../../public/checkmate.gif'
import mr from '../../public/mr.gif'
// import socialnetwork from '../../public/chat_sn.gif'
// import chatgpt from '../../public/chatgpt.gif'
// import imageboard from '../../public/imageboard-comment.gif'
// import petition from '../../public/petition.gif'
// import connectfour from '../../public/connect-four.gif'
// import portfoliopage from '../../public/portfoliopage.gif'
import { motion } from "framer-motion"
import projects from "../../projects.json"

export default function Projects() {

  return (
    <div>
      <h2 className='mt-32 py-4 text-teal-500 text-3xl pt-8 pb-2 text-center' id='projects'>My Projects</h2>
          <div className='lg:grid-cols-3 lg:grid gap-10 md:flex-wrap xl:mx-40 lg:mx-10'>

            {projects.map((project, index) => (
              <motion.div 
              initial={{
                rotateZ: 2,
                opacity: 0.5
              }}
              transition={{duration: 1}}
              whileInView={{
                rotateZ: 0,
                opacity: 1
              }}
              whileHover={{ scale: 1.1 }}
              key={index}
              className='projectdivs'>
                <h4 className='projecttextheader'>Musician Webpage</h4>
                <p className='projecttext'>This project is built for a famous musician Maxim Rysanov. We are happy to share the structure of this build.</p>
                <Image src={mr} alt="mr" className='projectimages' priority={true}/>
                  <div>
                    <a href="https://github.com/vladyslavt97/Maxim-Rysanov" target="_blank" rel="noopener noreferrer" 
                      className='projectcode'>
                      Code
                    </a>
                    <a href="https://maxim-rysanov.vercel.app" target="_blank" rel="noopener noreferrer" 
                      className='projectwebsite'>
                      Website
                    </a>
                  </div>
              </motion.div>
              ))}

            {/* MR */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Musician Webpage</h4>
              <p className='projecttext'>This project is built for a famous musician Maxim Rysanov. We are happy to share the structure of this build.</p>
              <Image src={mr} alt="mr" className='projectimages' priority={true}/>
              <div>
                <a href="https://github.com/vladyslavt97/Maxim-Rysanov" target="_blank" rel="noopener noreferrer" 
                  className='projectcode'>
                  Code
                </a>
                <a href="https://maxim-rysanov.vercel.app" target="_blank" rel="noopener noreferrer" 
                  className='projectwebsite'>
                  Website
                </a>
              </div>
            </motion.div> */}

            {/* Chess */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Chess</h4>
              <p className='projecttext'>The project using Socket.io to establish connection between players.</p>
              <Image src={chess} alt="chess" className='projectimages' priority={true}/>
              <div>
                <a href="https://github.com/vladyslavt97/chess-ts-project" target="_blank" rel="noopener noreferrer" 
                  className='projectcode'>
                  Code
                </a>
                <a href="https://chess-rn1q.onrender.com/" target="_blank" rel="noopener noreferrer" 
                  className='projectwebsite'>
                  Website
                </a>
              </div>
            </motion.div> */}
            
            {/* Social Network */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Social Network</h4>
              <p className='projecttext'>Bookface - is a social network to communicate with your friends.</p>
              <Image src={socialnetwork} alt="socialnetwork" className='projectimages' priority={true} />
              <a href="https://github.com/vladyslavt97/Social-Network" target="_blank" rel="noopener noreferrer" 
                className='projectcode'>
                Code
              </a>
            </motion.div> */}
            
            {/* ChatGPT clone */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>ChatGPT (clone)</h4>
              <p className='projecttext'>The application recreates the famous platform.</p>
              <Image src={chatgpt} alt="chess" className='projectimages' priority={true}/>
              <div>
                <a href="https://github.com/vladyslavt97/ChatGPT-clone" target="_blank" rel="noopener noreferrer" 
                  className='projectcode'>
                  Code
                </a>
              </div>
            </motion.div> */}


            {/* Imageboard */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Imageboard</h4>
              <p className='projecttext'>Upload your images and write comments.</p>
              <Image src={imageboard} alt="chess" className='projectimages' priority={true}/>
              <a href="https://github.com/vladyslavt97/Imageboard" target="_blank" rel="noopener noreferrer" 
                className='projectcode'>
                Code
              </a>
            </motion.div> */}


            {/* Petition */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Petition</h4>
              <p className='projecttext'>Register and sign the petition to support the cause.</p>
              <Image src={petition} alt="chess" className='projectimages' priority={true}/>
              <a href="https://github.com/vladyslavt97/Petition" target="_blank" rel="noopener noreferrer" 
                className='projectcode'>
                Code
              </a>
            </motion.div> */}

            {/* Connect Four */}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Connect Four</h4>
              <p className='projecttext'>The classic game of Connect-Four.</p>
              <Image src={connectfour} alt="chess" className='projectimages' priority={true}/>
              <div>
                <a href="https://github.com/vladyslavt97/Connect-Four" target="_blank" rel="noopener noreferrer" 
                  className='projectcode'>
                  Code
                </a>
                <a href="https://brilliant-halva-1a9875.netlify.app/" target="_blank" rel="noopener noreferrer" 
                  className='projectwebsite'>
                  Website
                </a>
              </div>
            </motion.div> */}

            {/* Portfolio Page*/}
            {/* <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='projectdivs'>
              <h4 className='projecttextheader'>Portfolio Page</h4>
              <p className='projecttext'>The current page and the code.</p>
              <Image src={portfoliopage} alt="portfolio" className='projectimages' priority={true}/>
              <div>
                <a href="https://github.com/vladyslavt97/Portfolio-Website" target="_blank" rel="noopener noreferrer" 
                  className='projectcode'>
                  Code
                </a>
                <a href="https://portfolio-vt.vercel.app/" target="_blank" rel="noopener noreferrer" 
                  className='projectwebsite'>
                  Website
                </a>
              </div>
            </motion.div> */}
          </div>
    </div>
  )
}
