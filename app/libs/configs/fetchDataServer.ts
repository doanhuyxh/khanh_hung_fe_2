const API_URL_SERVER = process.env.API_URL_SERVER;

async function fetchData(url: string, cookies: string): Promise<any> {
    try {
        
        const response = await fetch(`${API_URL_SERVER}/api/v1${url}`, {
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