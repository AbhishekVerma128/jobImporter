export async function getJobHistory(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`+'/api/job-history');
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