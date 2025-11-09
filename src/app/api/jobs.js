export async function getJobHistory(){
    try{
        const res = await fetch('http://localhost:5000/job-history');
        if (!res.ok) {
            throw new Error('Failed to fetch job history');
        }
        const data = await res.json();
        return data;
    }catch(error){
        console.error('Error fetching job history:', error);
        return { success: false, data: [] };
    }   
}