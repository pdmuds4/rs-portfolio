"use client";
import { createContext, useState, PropsWithChildren } from 'react';
import { LoadingSnack, SuccessSnack, ErrorSnack } from '@components/ui';
import AwsS3Client from '@clients/awss3';

type ContextProps = {
    s3Client: AwsS3Client,
    page_is_loading: boolean,
    setOpenLoader: (open: boolean) => void,
    page_is_success: boolean,
    setOpenSuccess: (open: boolean) => void,
    page_is_error: boolean,
    setOpenError: (open: boolean) => void,
    error_message: string,
    setErrorMsg: (msg: string) => void,
};


export const Context = createContext({} as ContextProps);

const AuthorContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const s3Client = new AwsS3Client(
        process.env.NEXT_PUBLIC_AWS_REGION || '',
        process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
        process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || '',
        process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || ''
    );
    
    const [page_is_loading, setOpenLoader] = useState(false);
    const [page_is_success, setOpenSuccess] = useState(false);
    const [page_is_error, setOpenError] = useState(false);
    const [error_message, setErrorMsg] = useState('');

    return (
        <Context.Provider value={{
            s3Client,
            page_is_loading, 
            setOpenLoader, 
            page_is_success,
            setOpenSuccess,
            page_is_error,
            setOpenError,
            error_message,
            setErrorMsg,
        }}>
            {children}
            
            <>
                <LoadingSnack
                    open={page_is_loading}
                    openSetter={(open) => setOpenLoader(open)}
                />
                <SuccessSnack
                    open={page_is_success}
                    openSetter={(open) => setOpenSuccess(open)}
                />
                <ErrorSnack
                    open={page_is_error}
                    openSetter={(open) => setOpenError(open)}
                    error_message={error_message}
                />
            </>
        </Context.Provider>
    );
}

export default AuthorContextProvider;