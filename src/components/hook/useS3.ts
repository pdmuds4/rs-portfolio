import { useContext } from 'react';
import AwsS3Client from '@clients/awss3';
import { Context } from '@components/provider/AuthorContextProvider';

export const useS3 = <ResponseT>(
    callback: (definedClient: AwsS3Client, request: File | string) => Promise<ResponseT|void>,
) => {
    const { setOpenLoader, setOpenSuccess, setOpenError, setErrorMsg } = useContext(Context);

    const definedClient = new AwsS3Client(
        process.env.NEXT_PUBLIC_AWS_REGION || '',
        process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
        process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || '',
        process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || ''
    );

    const eventHandler = (request: File | string) => {
        setOpenLoader(true);
        callback(definedClient, request)
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