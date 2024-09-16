import { useContext } from 'react';
import AwsS3Client from '@clients/awss3';
import { Context } from '@components/provider/AuthorContextProvider';

export const useS3 = <ResponseT>(
    callback: (definedClient: AwsS3Client, request: File | string) => Promise<ResponseT|void>,
    s3Client: AwsS3Client
) => {
    const { setOpenLoader, setOpenSuccess, setOpenError, setErrorMsg } = useContext(Context);


    const eventHandler = (request: File | string) => {
        setOpenLoader(true);
        callback(s3Client, request)
            .then((response)=>{
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
    };

    return {
        eventHandler
    }
}