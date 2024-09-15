"use client";
import { useState } from "react";
import { Divider, Card, Box } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { Section, Heading } from "@components/ui";
import * as styles from "./style";
import MusicCard from "./MusicCard";

import { useGetterApi } from "@components/hook";
import { ComposeDTO } from "@models/entity/compose";

const Compose: React.FC = () => {
    const [data, setData] = useState<ComposeDTO[]>([]);
    useGetterApi<ComposeDTO[]>("/api/compose", setData);

    const [emblaRef, _] = useEmblaCarousel({ 
        loop: true,
        slidesToScroll: 'auto'
    });

    return (
        <Section id="compose">
            <Heading>
                Compose
            </Heading>
            <Divider />
            <Card sx={styles.card_body}>
                <Box sx={styles.embla}>
                    <Box sx={styles.embla_viewport} ref={emblaRef}>
                        <Box sx={styles.embla_container}>
                            {data.reverse().map((compose, index) => (
                                <MusicCard 
                                    key={index}
                                    {...compose}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Section>
    )
}

export default Compose;