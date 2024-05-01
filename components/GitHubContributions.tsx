import React, { useEffect, useState } from 'react'

type Props = {}

export default function GitHubContributions({}: Props) {
    const[dates, setGetDates] = useState<any>();
    useEffect(() => {
        fetch('/api/github')
            .then(response => response.json())
            .then(data => {
                const flattenedArray: string[] = [].concat(...data.dates); // Specify the type as string[]
                const datesOnly = flattenedArray.map(timestamp => timestamp.substring(0, 10));
                const uniqueDatesSet = new Set(datesOnly);
                const uniqueDates = Array.from(uniqueDatesSet); // Convert the Set back to an array
                console.log("uuu", uniqueDates.sort());
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    
    
  return (
    <div>GitHubContributions</div>
  )
}
