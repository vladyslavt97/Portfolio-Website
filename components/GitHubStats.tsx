import { useEffect, useState } from "react"
import { Circles } from  'react-loader-spinner'
type Props = {}

export default function GitHubStats({}: Props) {
    const[repos, setRepos] = useState(0);
    const[followers, setFollowers] = useState(0);
    useEffect(() => {
        fetch('/api/github')
            .then(response => response.json())
            .then(data => {
                setRepos(data.numOfProjects)
                setFollowers(data.numOfFollowers)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    
  return (
    <div className="flex justify-center w-full text-center text-green-900" >
        {/* github */}
        <div className="flex flex-col">
            <h1 className="text-xl bg-green-600 rounded-full flex flex-row justify-center items-center gap-4 shadow-xl text-black">GitHub Stats <b className="text-green-400 animate-pulse text-sm shadow-xl">Live</b><span className="bg-green-400 animate-pulse w-4 h-4 rounded-full"></span></h1> 

            {/* github columns*/}
            <div className="flex flex-row gap-3">
                <div className="m-2">
                    <h1 className="mb-2 px-2 bg-green-300 rounded-full shadow-xl">Public Repos</h1>
                    
                    <h1 className="px-5 bg-green-100 rounded-full flex justify-center shadow-xl">
                        {repos === 0 ? 
                            <Circles
                                height="30"
                                width="30"
                                color="#8aed89"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            :
                        repos}
                    </h1>
                </div>
                <div className="m-2">
                    <h1 className="mb-2 px-2 bg-green-300 rounded-full shadow-xl">My Followers</h1>
                    <h1 className="px-5 bg-green-100 rounded-full flex justify-center shadow-xl">{followers === 0 ? 
                            <Circles
                                height="30"
                                width="30"
                                color="#8aed89"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            :
                        followers}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}