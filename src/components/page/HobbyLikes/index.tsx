import { Divider, ImageList } from "@mui/material"
import { Section, Heading } from "@components/ui"
import * as styles from "./style"
import ImageCell from "./ImageCell"
import { title } from "process"

const HobbyLikes: React.FC = () => {
    const data = [
        {
            src: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg",
            title: "Programming",
            detail: "大学から初めてのプログラミングとしてPythonに触れる。Webアプリを開発した時、書いたプログラムが動いた時の達成感に惹かれ、今でも開発技術の勉強をしている。"
        },
        {
            src: "https://thumb.photo-ac.com/4c/4cffa6a17ec5fa671f3aaa4321164918_t.jpeg",
            title: "DTM compose",
            detail: "中学生のとき、リズムゲームにハマったことがきっかけで高校生からDTMを始めた。 趣味の範囲で作曲をしており、主にHardCoreやTrance、ArtcoreなどのEDM系を作曲している。"
        },
        {
            src: "https://images.unsplash.com/photo-1571570703598-39eb580a0329?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Cats",
            detail: "昔、実家で猫を飼っていた。今は飼っていないが、猫の動画メディアコンテンツをたびたび見ては癒されている。将来、1人暮らしを始めた際には猫を飼うことが夢。"
        },
        {
            src: "https://images.unsplash.com/photo-1522726336270-3a0053210f06?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Coffee",
            detail: "高校生のとき、勉強や作業の合間でドリップコーヒを飲むことにハマっていた。今でもほぼ毎日一杯飲んでいるが、ゆっくりしたいがあまり数時間かけて飲む癖がついてしまった。"
        }
    ]

    return (
        <Section id="hobbylikes">
            <Heading>
                Hobby & Likes
            </Heading>
            <Divider />
            <ImageList 
                sx={styles.list_body} 
                cols={2} 
                gap={1}
            >
                {data.map((item, index) => (
                    <ImageCell 
                        key={index}
                        title={item.title}
                        src={item.src}
                        detail={item.detail}
                    />
                ))}
            </ImageList>
        </Section>
    )
}

export default HobbyLikes;