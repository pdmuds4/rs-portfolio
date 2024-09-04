"use client";
import { Divider, Card, Box } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { Section, Heading } from "@components/ui";
import * as styles from "./style";
import MusicCard from "./MusicCard";

const Compose: React.FC = () => {
    const data = [
        {
            title: "Azure Dawn",
            artwork: "https://i1.sndcdn.com/artworks-upHBibUNbG5DIMby-yGT8Sg-t500x500.jpg",
            genre: "Mac Miller",
            audio: "/Azure Dawn.wav",
            youtube: "",
            soundcloud: "",
            x: ""
        },
        {
            title: "Azure Dawn",
            artwork: "https://i1.sndcdn.com/artworks-upHBibUNbG5DIMby-yGT8Sg-t500x500.jpg",
            genre: "Mac Miller",
            audio: "/Azure Dawn.wav",
            youtube: "",
            soundcloud: "",
            x: ""
        },
        {
            title: "Azure Dawn",
            artwork: "https://i1.sndcdn.com/artworks-upHBibUNbG5DIMby-yGT8Sg-t500x500.jpg",
            genre: "Mac Miller",
            audio: "/Azure Dawn.wav",
            youtube: "",
            soundcloud: "",
            x: ""
        },
    ]

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
                            {data.map((item, index) => (
                                <MusicCard 
                                    key={index}
                                    {...item}
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