"use client";
import { createContext, useState, PropsWithChildren } from 'react';
import { LoadingSnack, SuccessSnack, ErrorSnack } from '@components/ui';

type ContextProps = {
    context_data: {
        page_is_loading: boolean,
        page_is_success: boolean,
        page_is_error: boolean,
        error_message: string,
    },
    setContextData: (context_data: ContextProps["context_data"]) => void,
};


export const Context = createContext({} as ContextProps);

const AuthorContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [context_data, setContextData] = useState({
        page_is_loading: false,
        page_is_success: false,
        page_is_error: false,
        error_message: "",
    });

    return (
        <Context.Provider value={{context_data, setContextData}}>
            {children}
            
            <>
                <LoadingSnack
                    open={context_data.page_is_loading}
                    openSetter={(open) => setContextData({...context_data, page_is_loading: open})}
                />
                <SuccessSnack
                    open={context_data.page_is_success}
                    openSetter={(open) => setContextData({...context_data, page_is_success: open})}
                />
                <ErrorSnack
                    open={context_data.page_is_error}
                    openSetter={(open) => setContextData({...context_data, page_is_error: open})}
                    error_message={context_data.error_message}
                />
            </>
        </Context.Provider>
    );
}

export default AuthorContextProvider;