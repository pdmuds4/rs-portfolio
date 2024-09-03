import Image from "next/image"
import { Box, Typography, IconButton } from "@mui/material"
import { Text, Section, NextFonts } from "@components/ui"
import * as styles from "./style"

const About: React.FC = () => {
    return (
        <Section id="about">
            <Box sx={styles.avator_wrapper}>
                <IconButton sx={styles.avator_button}>
                    <Image
                        src="/avator.png"
                        alt="this is my avator"
                        width={150}
                        height={150}
                        style={styles.avator}
                    />
                </IconButton>
                <Typography 
                    variant="subtitle2"
                    className={NextFonts.zenOldMincho.className}
                >
                    さいき　りょうすけ
                </Typography>
                <Typography 
                    variant="h4" 
                    className={NextFonts.zenOldMincho.className}
                    sx={styles.myname}
                >
                    佐伯綾亮
                </Typography>
            </Box>
            <Box sx={styles.profile_wrapper}>
                <Box maxWidth="sm">
                    <Text>
                        香川県生まれ。大学入学とともに上京し、武蔵野大学データサイエンス学部に在籍。 大学では、データサイエンスについて幅広く学ぶ。 大学2年時に学外のハッカソンでwebアプリケーション開発に魅力を持ち、 現在はwebエンジニアを目指して独学で勉強している。
                    </Text>
                </Box>
            </Box>
        </Section>
    )
}

export default About;