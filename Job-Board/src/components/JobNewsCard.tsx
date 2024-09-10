import { JobObj } from "../types"

interface JobNewsCardProps{
    jobData : JobObj;
}

const JobNewsCard = ({jobData}:JobNewsCardProps) => {

    function getTime(time : number):string{
        const date = new Date(time);
        return date.toLocaleString();
    } 


  return (
    <div className="job-card">
      <h3>{jobData?.title || "No title"}</h3>
      <div className="job-des">
        <p>{jobData.by || "Unknown"}</p>
        <p>·</p>
        <p>{getTime(jobData.time) || "Unknown"}</p>
      </div>
    </div>
  )
}

export default JobNewsCard
