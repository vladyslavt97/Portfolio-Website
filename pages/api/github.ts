import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  numOfProjects: number;
  numOfFollowers: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const headers = {
        "Authorization": "Token " + process.env.GITHUB_KEY
    }
    // repos
    const url2 = "https://api.github.com/users/vladyslavt97/repos"
    const response2 = await fetch(url2, { "headers": headers })
    const json2 = await response2.json()
    console.log(json2);
    
    const numProjects = Object.keys(json2).length;
    console.log(numProjects);

    // repos
    const url = "https://api.github.com/users/vladyslavt97/followers"
    const response = await fetch(url, { "headers": headers })
    const json = await response.json()
    const numFollwers = Object.keys(json).length
    
  res.status(200).json({ numOfProjects: numProjects, numOfFollowers: numFollwers })
}
