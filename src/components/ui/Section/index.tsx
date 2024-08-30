import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import * as styles from './styles';

const Section: React.FC<PropsWithChildren> = (props) => {
    return (
        <Container sx={styles.body}>
            {props.children}
        </Container>
    );
}

export default Section;