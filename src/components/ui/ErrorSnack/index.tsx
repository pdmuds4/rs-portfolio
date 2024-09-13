import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
import * as styles from "./style";

const ErrorSnack: React.FC<{
    open: boolean,
    openSetter: (open: boolean) => void,
    error_message: string,
}> = (props) => {
    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        props.openSetter(false);
    };

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={styles.alert}
            >
                {props.error_message}
            </Alert>
        </Snackbar>
    )
}

export default ErrorSnack;