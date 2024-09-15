"use client";
import { createContext, useState, PropsWithChildren } from 'react';
import { LoadingSnack, SuccessSnack, ErrorSnack } from '@components/ui';

type ContextProps = {
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
    const [page_is_loading, setOpenLoader] = useState(false);
    const [page_is_success, setOpenSuccess] = useState(false);
    const [page_is_error, setOpenError] = useState(false);
    const [error_message, setErrorMsg] = useState('');

    return (
        <Context.Provider value={{ 
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