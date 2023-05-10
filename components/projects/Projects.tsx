import Image from 'next/image'
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
              className='text-center shadow-2xl my-10 p-5 mx-10 bg-white/50 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1 flex items-center justify-center flex-col'>
                <h4 className='text-gray-800 py-1 text-xl font-bold'>{project.title}</h4>
                <p className='text-black'>{project.description}</p>
                <Image src={project.image} alt={project.title} className='m-5 rounded-lg w-[80%]' priority={true} width={500} height={500}/>
                  <div>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" 
                      className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                      Code
                    </a>
                    {project.website !== "" && <a href={project.website} target="_blank" rel="noopener noreferrer" 
                      className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                      Website
                    </a>}
                  </div>
              </motion.div>
              ))}
          </div>
    </div>
  )
}
