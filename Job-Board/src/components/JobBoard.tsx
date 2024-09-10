import { useEffect, useState } from "react";
import { JobObj } from "../types";
import JobNewsCard from "./JobNewsCard";


  const jobIdsUrl : string = "https://hacker-news.firebaseio.com/v0/jobstories.json";
  const jobNewsDataUrl : string = "https://hacker-news.firebaseio.com/v0/item/"; // + 35908337.json

const JobBoard = () => {

    const [JobsNews, setJobsNews] = useState<JobObj[]>([]);
    const [jobIds, setJobIds] = useState<number[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    const perPageItem = 6;


    function handleFetchPage(){
      fetchingItems(currentItem);
    }

    async function fetchingItems (currentItem : number){
      setIsFetching(true);
      let jobList = jobIds;
      if (jobList.length <= 0){
        const jobIdsDataJson = await fetch(jobIdsUrl);
        jobList = await jobIdsDataJson.json();
        setJobIds(jobList);
      }
      
      const jobIdsForPage = jobList.slice(currentItem, currentItem+perPageItem);
      setCurrentItem(currentItem+perPageItem);
      const jobDatasForPage = await Promise.all(
        jobIdsForPage.map((id : number) => fetch(`${jobNewsDataUrl}${id}.json`).then(res => res.json()))
      );
      setJobsNews([...JobsNews, ...jobDatasForPage]);
      setIsFetching(false);
      
    }


    useEffect(()=> {
      if (currentItem == 0) {
        fetchingItems(currentItem);
      }
    }, [])




  return (
    <div className="job-board">
      <h1>Hacker News Job Board</h1>

      <div className="job-card-container">
        {JobsNews.length > 0 ? 
        JobsNews.map(job => <JobNewsCard key={job.id} jobData={job}/>)
        : <div>Loading..</div>
        }
      </div>

      <button disabled={currentItem+perPageItem > jobIds.length} onClick={handleFetchPage} className="load-btn">{isFetching ? "Loading.." : "Fetch More Jobs"}</button>

    </div>
  )
}

export default JobBoard;
