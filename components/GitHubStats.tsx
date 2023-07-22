import { useEffect, useState } from "react"

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
    <div className="flex justify-center w-full text-center" >
        {/* github */}
        <div className="flex flex-col">
            <h1 className="text-xl bg-green-400 rounded-full flex flex-row justify-center items-center gap-4">GitHub Stats <b className="text-red-600 animate-pulse">Live</b><div className="bg-red-600 animate-pulse w-4 h-4 rounded-full"></div></h1> 

            {/* github columns*/}
            <div className="flex flex-row gap-3">
                <div className="m-2">
                    <h1 className="mb-2 px-2 bg-green-300 rounded-full">Public Repos</h1>
                    <h1 className="px-5 py-2 bg-green-100 rounded-full">{repos}</h1>
                </div>
                <div className="m-2">
                    <h1 className="mb-2 px-2 bg-green-300 rounded-full">My Followers</h1>
                    <h1 className="px-5 py-2 bg-green-100 rounded-full">{followers}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}