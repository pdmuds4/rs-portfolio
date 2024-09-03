import Image from "next/image";
import { Divider, Card, CardHeader, CardContent, Button, Avatar, IconButton, Tooltip, Grid2 } from "@mui/material";
import { Section, Heading } from "@components/ui";
import * as styles from "./style";

import Analyze from "./Analyze";
import Articles from "./Articles";

const Qiita: React.FC = () => {
    return (
        <Section id="qiita">
            <Heading>
                Qiita
            </Heading>
            <Divider />
            <Card sx={styles.card_body}>
                <CardHeader
                    avatar={
                        <Button 
                            variant="contained" 
                            sx={styles.header_logo}
                            href="https://qiita.com/pam5596"
                        >
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Qiita_Logo.svg" 
                                alt="Qiita"
                                width={80}
                                height={30}
                            />
                        </Button>
                    }
                    action={
                        <Tooltip title="@pam5596">
                            <IconButton 
                                size="small"
                                href="https://qiita.com/pam5596"
                                target="_blank"
                            >
                                <Avatar 
                                    sx={{width: 35, height: 35}}
                                    sizes="small"
                                    src="/icon.avif"
                                />
                            </IconButton>
                        </Tooltip>
                    }
                    sx={styles.header_body}
                />
                <CardContent sx={styles.content_body}>
                    <Grid2 container spacing={3} sx={styles.grid}>
                        <Grid2 size={{xs: 12, md: 4}} sx={styles.grid_analyze}>
                            <Analyze />
                        </Grid2>
                        <Grid2 size={{xs: 12, md: 8}} sx={styles.grid_articles}>
                            <Articles />
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
    </Section>
    );
}

export default Qiita;