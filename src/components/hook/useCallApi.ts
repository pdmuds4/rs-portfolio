import { useEffect, useState, useContext } from 'react';
import { Context } from '@components/provider/AuthorContextProvider';

export const useCallApi = <ResponseT>(
    callback: () => Promise<void>, 
    defaultData: ResponseT | null = null
) => {
    const [data, setData] = useState(defaultData);
    const [error, setError] = useState<Error|null>(null);

    const { context_data, setContextData } = useContext(Context);
    const setLoadingOpen = (open: boolean) => setContextData({...context_data, page_is_loading: open});
    const setSuccessOpen = (open: boolean) => setContextData({...context_data, page_is_success: open});
    const setErrorOpen = (open: boolean) => setContextData({...context_data, page_is_error: open});
    const setErrorMsg = (msg: string) => setContextData({...context_data, error_message: msg});

    useEffect(() => {
        setLoadingOpen(true);
        callback()
            .then((response)=>{
                setData(response as ResponseT);
                setLoadingOpen(false);
                setSuccessOpen(true);
            })
            .catch((error)=>{
                if (error instanceof Error) {
                    setError(error);
                    setErrorMsg(error.message);
                    setLoadingOpen(false);
                    setErrorOpen(true);
                }
            });
    }, []);

    return {
        data,
        error,
    }
}