import { useState, useContext } from 'react';
import { Context } from '@components/provider/AuthorContextProvider';

export const useEventApi = <ResponseT>(
    callback: () => Promise<ResponseT|void>, 
    defaultData: ResponseT | null = null
) => {
    const [data, setData] = useState(defaultData);
    const [error, setError] = useState<Error|null>(null);

    const { setOpenLoader, setOpenSuccess, setOpenError, setErrorMsg } = useContext(Context);

    const eventHandler = () => {
        setOpenLoader(true);
        callback()
            .then((response)=>{
                setData(response as ResponseT);
                setOpenLoader(false);
                setOpenSuccess(true);
            })
            .catch((error)=>{
                if (error instanceof Error) {
                    setError(error);
                    setErrorMsg(error.message);
                    setOpenLoader(false);
                    setOpenError(true);
                }
            });
    };

    return {
        data,
        error,
        eventHandler,
    }
}