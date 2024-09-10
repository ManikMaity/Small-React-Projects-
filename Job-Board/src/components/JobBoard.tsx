import { useEffect, useState } from "react";
import { JobObj } from "../types";
import JobNewsCard from "./JobNewsCard";

const exampleData : JobObj = {
    "by": "jamilbk",
    "id": 35908337,
    "score": 1,
    "time": 1683838872,
    "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
    "type": "job",
    "url": "https://www.ycombinator.com/companies/firezone/jobs"
  }

  const jobIdsUrl : string = "https://hacker-news.firebaseio.com/v0/jobstories.json";
  const jobNewsDataUrl : string = "https://hacker-news.firebaseio.com/v0/item/"; // + 35908337.json

const JobBoard = () => {

    const [JobsNews, setJobsNews] = useState([exampleData, exampleData]);
    const [jobIds, setJobIds] = useState([]);
    const [sixJobNews, setSixJobNews] = useState([]);
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        

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

      <button className="load-btn">{isFetching ? "Loading.." : "Fetch More Jobs"}</button>

    </div>
  )
}

export default JobBoard;
