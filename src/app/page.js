import DisplayJobs from "@/components/jobs/displayJobs";
import { getJobHistory } from "./api/jobs";

export default async function Home() {
  const data = await getJobHistory();

  return (
    <div>
      <DisplayJobs data={data?.data} />
    </div>
  )
}