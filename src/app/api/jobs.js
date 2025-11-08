export async function getJobHistory(){
    try{
        const res = await fetch('http://127.0.0.1:5000/api/job-history');
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