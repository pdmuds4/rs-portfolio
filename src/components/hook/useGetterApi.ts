import { useEffect, useContext } from 'react';
import { Context } from '@components/provider/HomePageProvider';
import callAPI from '@utils/callApi';

export const useGetterApi = <ResponseT>(
    endpoint: string,
    dataSetter: (data: ResponseT) => void
) => {
    const { setOpenLoader, setOpenSuccess, setOpenError, setErrorMsg } = useContext(Context);

    const apiCall = async (): Promise<ResponseT> => {
        const response = await callAPI(
            'GET',
            endpoint,
        );

        return response as ResponseT;
    }

    useEffect(() => {
        setOpenLoader(true);
        apiCall()
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
    }, []);
}