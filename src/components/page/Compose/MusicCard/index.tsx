"use client";
import { useState, useRef } from "react";
import { Card, Box, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { PlayArrow, Pause, YouTube, Cloud, X } from "@mui/icons-material";
import * as styles from "./style";

const MusicCard: React.FC<{
    title: string;
    artwork: string;
    genre: string;
    audio: string;
    youtube: string;
    soundcloud: string;
    x: string;
}> = (props) => {
    const [isPlaying, togglePlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        togglePlaying(!isPlaying);
    }

    return (
        <Box sx={styles.card_wrapper}>
            <Card 
                sx={{
                    ...styles.main, 
                    borderWidth: isPlaying ? "4px" : "0px"
                }}>
                <CardMedia 
                    component="img"
                    sx={styles.artwork}
                    image="https://i1.sndcdn.com/artworks-upHBibUNbG5DIMby-yGT8Sg-t500x500.jpg"
                />
                <Box sx={styles.captions}>
                    <CardContent sx={styles.info_content}>
                        <Typography 
                            sx={styles.title_text}
                            component="div" 
                        >
                            Azure Dawn
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={styles.genre_text}
                        >
                            Mac Miller
                        </Typography>
                        <Box sx={styles.play_pause_button}>
                            <IconButton 
                                size="large"
                                onClick={togglePlay}
                            >
                            { isPlaying ?
                                <Pause fontSize="large" /> :
                                <PlayArrow fontSize="large" /> 
                            }
                            </IconButton>
                            <audio
                                ref={audioRef}
                                src={"/Azure Dawn.wav"}
                                onEnded={() => togglePlaying(false)}
                            />
                        </Box>
                        <Box sx={styles.check_content}>
                            <IconButton href="">
                                <YouTube />
                            </IconButton>
                            <IconButton href="">
                                <Cloud />
                            </IconButton>
                            <IconButton href="">
                                <X />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}

export default MusicCard;