import { useEffect, useContext } from 'react';
import { Context } from '@components/provider/AuthorContextProvider';

export const useRenderApi = <ResponseT>(
    callback: () => Promise<ResponseT|void>, 
    dataSetter: (data: ResponseT) => void
) => {
    const { setOpenLoader, setOpenSuccess, setOpenError, setErrorMsg } = useContext(Context);

    useEffect(() => {
        setOpenLoader(true);
        callback()
            .then((response)=>{
                dataSetter(response as ResponseT);
                setOpenLoader(false);
                setOpenSuccess(true);
            })
            .catch((error)=>{
                if (error instanceof Error) {
                    setErrorMsg(error.message);
                    setOpenLoader(false);
                    setOpenError(true);
                }
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}