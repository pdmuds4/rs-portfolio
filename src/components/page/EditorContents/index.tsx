"use client";
import { PropsWithChildren } from 'react';
import { Card } from '@mui/material';
import * as styles from './style';

const EditorContents: React.FC<PropsWithChildren> = (props) => {
    return (
        <Card sx={styles.body}>
            {props.children}
        </Card>
    )
}

export default EditorContents;