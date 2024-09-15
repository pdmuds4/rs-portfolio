import BaseEntity from "@utils/abstruct/entity";
import { ComposeID, Title, Artwork, Genre, Audio, YoutubeUrl, SoundcloudUrl, XUrl } from "@models/value_object/compose";

export type ComposeDTO = {
    id:         ComposeID    ["_value"];
    title:      Title        ["_value"];
    artwork:    Artwork      ["_value"];
    genre:      Genre        ["_value"];
    audio:      Audio        ["_value"];
    youtube:    YoutubeUrl   ["_value"];
    soundcloud: SoundcloudUrl["_value"];
    x:          XUrl         ["_value"];
}


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

export default class ComposeEntity implements BaseEntity<ComposeProps, ComposeDTO>{
    readonly        id: ComposeID;
    public       title: Title;
    public     artwork: Artwork;
    public       genre: Genre;
    public       audio: Audio;
    public     youtube: YoutubeUrl;
    public  soundcloud: SoundcloudUrl;
    public           x: XUrl;

    constructor(
        id:        ComposeID,
        title:     Title,
        artwork:   Artwork,
        genre:     Genre,
        audio:     Audio,
        youtube:   YoutubeUrl,
        soundcloud:SoundcloudUrl,
        x:         XUrl
    ){
        this.id         = id;
        this.title      = title;
        this.artwork    = artwork;
        this.genre      = genre;
        this.audio      = audio;
        this.youtube    = youtube;
        this.soundcloud = soundcloud;
        this.x          = x;
    }

    toJson(): ComposeDTO {
        return {
            id:         this.id.value,
            title:      this.title.value,
            artwork:    this.artwork.value,
            genre:      this.genre.value,
            audio:      this.audio.value,
            youtube:    this.youtube.value,
            soundcloud: this.soundcloud.value,
            x:          this.x.value
        }
    }

    toObjectJson(): ComposeProps {
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