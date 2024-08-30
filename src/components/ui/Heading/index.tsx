import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import * as styles from './styles';

const Heading: React.FC<PropsWithChildren> = (props) => {
    return (
        <Typography
            variant="h6"
            sx={styles.heading}
            noWrap
        >
            {props.children}
        </Typography>
    );
}

export default Heading;