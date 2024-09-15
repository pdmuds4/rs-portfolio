import { useEffect, useContext } from 'react';
import { Context } from '@components/provider/AuthorContextProvider';
import BaseError from '@utils/abstruct/error';

export const useValidation = (
    callback: () => Promise<void>,
    dependencies: any[],
    errorSetter: (error: BaseError | null) => void
) => {
    const { setOpenError, setErrorMsg } = useContext(Context);

    useEffect(() => {
        callback()
            .then((response)=>{
                errorSetter(null);
            })
            .catch((error)=>{
                if (error instanceof BaseError) {
                    setErrorMsg(error.message);
                    setOpenError(true);
                    errorSetter(error);
                }
            });
    }, dependencies);
}