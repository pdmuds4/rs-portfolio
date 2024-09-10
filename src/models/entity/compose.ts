import BaseEntity from "@utils/abstruct/entity";
import { ComposeID, Title, Artwork, Genre, Audio, YoutubeUrl, SoundcloudUrl, XUrl } from "@models/value_object/compose";

export interface ComposeProps {
    id:         ComposeID;
    title:      Title;
    artwork:    Artwork;
    genre:      Genre;
    audio:      Audio;
    youtube:    YoutubeUrl;
    soundcloud: SoundcloudUrl;
    x:          XUrl;
}

export default class ComposeEntity implements BaseEntity<ComposeProps>{
    readonly        id: ComposeID;
    public       title: Title;
    public     artwork: Artwork;
    public       genre: Genre;
    public       audio: Audio;
    public     youtube: YoutubeUrl;
    public  soundcloud: SoundcloudUrl;
    public           x: XUrl;

    constructor(
        props: ComposeProps
    ){
        this.id         = props.id;
        this.title      = props.title;
        this.artwork    = props.artwork;
        this.genre      = props.genre;
        this.audio      = props.audio;
        this.youtube    = props.youtube;
        this.soundcloud = props.soundcloud;
        this.x          = props.x;
    }

    json(): ComposeProps {
        return {
            id:         this.id,
            title:      this.title,
            artwork:    this.artwork,
            genre:      this.genre,
            audio:      this.audio,
            youtube:    this.youtube,
            soundcloud: this.soundcloud,
            x:          this.x
        }
    }

    equals(other: ComposeEntity): boolean {
        return this.id === other.id;
    }
}