import { useEffect, useState } from "react"

type Props = {}

export default function GitHubStats({}: Props) {
    const[repos, setRepos] = useState(0);
    const[followers, setFollowers] = useState(0);
useEffect(() => {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            setRepos(data.numOfProjects)
            setFollowers(data.numOfFollowers)
        })
        .catch(error => {
            console.error(error);
        });
}, [])
    console.log(repos);
    console.log(followers);
    
  return (
    <div className="flex justify-center w-full text-center">
        {/* github */}
        <div className="border-2 border-black flex flex-col">
            <h1 className="border-2 border-b-black text-xl bg-slate-200">GitHub Stats</h1> 

            {/* github columns*/}
            <div className="border-1 border-b-black flex flex-row">
                <div className="border-1 border-black">
                    <h1 className="px-2 border-2 border-r-black">Public Repos</h1>
                    <h1 className="px-5 py-2 border-2 border-t-black border-r-black">{repos}</h1>
                </div>
                <div className="border-1 border-black">
                    <h1 className="px-2 border-2">My Followers</h1>
                    <h1 className="px-5 py-2 border-2 border-t-black">{followers}</h1>
                </div>
            </div>
        </div>

    </div>
  )
}