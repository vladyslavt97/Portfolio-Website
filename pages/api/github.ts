import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  numOfProjects: number;
  numOfFollowers: number;
  dates: any
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
    const numProjects = Object.keys(json2).length;
    
    // repos
    const url = "https://api.github.com/users/vladyslavt97/followers"
    const response = await fetch(url, { "headers": headers })
    const json = await response.json()
    const numFollwers = Object.keys(json).length
    
    // Fetch commits for each repository to later gather dates!!!
    const commitsPromises = json2.map(async (repo: any) => {
    const commitsResponse = await fetch(repo.commits_url.replace('{/sha}', ''), { headers });
    const commitsData = await commitsResponse.json();
    const commitDates = commitsData.map((commit: any) => commit.commit.author.date);
    return commitDates;
    });
    
    // Wait for all promises to resolve
    const finalArr: any[] = await Promise.all(commitsPromises);

    res.status(200).json({ numOfProjects: numProjects, numOfFollowers: numFollwers, dates: finalArr })
  }
  