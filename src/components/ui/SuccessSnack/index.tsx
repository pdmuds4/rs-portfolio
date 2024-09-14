import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
import * as styles from "./style";

const SuccessSnack: React.FC<{
    open: boolean,
    openSetter: (open: boolean) => void,
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
                severity="success"
                variant="filled"
                sx={styles.alert}
            >
                Success!
            </Alert>
        </Snackbar>
    )
}

export default SuccessSnack;