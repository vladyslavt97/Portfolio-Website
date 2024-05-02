import React, { useEffect, useState } from 'react'

type Props = {}

export default function GitHubContributions({}: Props) {
    const[dates, setGetDates] = useState<Array<string>>();
    const[allTheDates, setAllTheDates] = useState<Array<string>>();
    useEffect(() => {
      fetch('/api/github')
        .then(response => response.json())
        .then(data => {
          const flattenedArray: string[] = [].concat(...data.dates); // Specify the type as string[]
          const datesOnly = flattenedArray.map(timestamp => timestamp.substring(0, 10));
          const uniqueDatesSet = new Set(datesOnly);
          const uniqueDates = Array.from(uniqueDatesSet); // Convert the Set back to an array
          setGetDates(uniqueDates.sort())

          //get the first date
          const startDate = new Date(uniqueDates.sort()[0]);

          // Get today's date
          const today = new Date();
          
          // Create an empty array to store the dates
          const allDates: string[] = [];

          // Loop through each date between start date and today's date
          for (let date = startDate; date <= today; date.setDate(date.getDate() + 1)) {
              // Format the date as 'YYYY-MM-DD'
              const formattedDate = date.toISOString().split('T')[0];
              allDates.push(formattedDate);
              
          }
          allDates.push(today.toISOString().split('T')[0]);
          setAllTheDates(allDates)
              
          })
          .catch(error => {
              console.error(error);
          });
    }, [])
  
  
  
  return (
    <div className='flex flex-row flex-wrap gap-1 mx-10 md:mx-52'>
      {allTheDates?.map((e: string)=>(
        <div key={e} className={`${dates?.includes(e) ? "bg-green-700" : "bg-gray-400"} w-[6px] md:w-[7px] h-[6px] md:h-[7px]`}></div>
      ))}
    </div>
  )
}
