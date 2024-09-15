import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import * as styles from './styles';

const Section: React.FC<PropsWithChildren<{
    id: string;
}>> = (props) => {
    return (
        <Container id={props.id} sx={styles.body}>
            {props.children}
        </Container>
    );
}

export default Section;