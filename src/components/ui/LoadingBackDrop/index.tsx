import { Backdrop, CircularProgress } from "@mui/material";

const LoadingBackDrop: React.FC<{
    open: boolean,
}> = (props) => {
    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={props.open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default LoadingBackDrop;