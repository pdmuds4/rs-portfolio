import axios from 'axios';

const callAPI = async <ReqT, ResT>(
    method: string, 
    endpoint: string, 
    req_body?: ReqT
): Promise<ResT|void> => {
    try {
        const response = await axios({
            headers: {
                'Allow-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',                  
                'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
            },
            method: method,
            url: endpoint,
            data: req_body,
        });

        return response.data;
    } catch (e: unknown) {
        if (e instanceof Error) throw e;
        else throw new Error('不明なエラーが発生しました');
    }
};

export default callAPI;