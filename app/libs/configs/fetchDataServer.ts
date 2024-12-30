const API_URL = process.env.API_URL;

async function fetchData(url: string, cookies: string): Promise<any> {
    try {
        
        const response = await fetch(`${API_URL}/api/v1${url}`, {
            method:"GET",
            credentials:"include",
            headers: {
                'Cookie': cookies ? cookies : ''
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
        return {
            code: 500,
            message: 'Internal Server Error - Fetch Data Catch',
            data: null
       }
    }
}

export default fetchData;