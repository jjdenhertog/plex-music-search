import { Track } from "@jjdenhertog/music-search";

export type PlexTrack = {
    guid: string;
    id: string;
    source?: string;
    artist: {
        id: string;
        title: string;
        guid?: string;
        image?: string;
    };
    album?: {
        id: string;
        title: string;
        guid?: string;
        image?: string;
    };
    title: string;
    image: string;
    src: string;

    reason?: string
    matching?: Track["matching"]
}