import { PlexTrack } from "./PlexTrack";

export type SearchResponse = {
    id: string;
    artist: string;
    title: string;
    album: string;
    result: PlexTrack[];
};
