import { PropsWithChildren } from 'react';
import { Divider, Container } from '@mui/material'
import { Section, Heading } from "@components/ui"
import * as styles from "./style"


const EditorSection: React.FC<PropsWithChildren<{
    id: string;
    hedding: string;
}>> = (props) => {
    return (
        <Section id={props.id}>
            <Heading>
                {props.hedding}
            </Heading>
            <Divider sx={styles.divider} />
            <Container sx={styles.container}>
                {props.children}
            </Container>
        </Section>
    )
}

export default EditorSection;