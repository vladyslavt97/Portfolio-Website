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
              className='projectdivs'>
                <h4 className='projecttextheader'>{project.title}</h4>
                <p className='projecttext'>{project.description}</p>
                <Image src={project.image} alt={project.title} className='projectimages' priority={true} width={1000} height={1000}/>
                  <div>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" 
                      className='projectcode'>
                      Code
                    </a>
                    {project.website !== "" && <a href={project.website} target="_blank" rel="noopener noreferrer" 
                      className='projectwebsite'>
                      Website
                    </a>}
                  </div>
              </motion.div>
              ))}
          </div>
    </div>
  )
}
