import { SearchConfig } from "@jjdenhertog/music-search";
import { PlexMusicSearchApproach } from "./PlexMusicSearchApproach";


export type PlexMusicSearchConfig = SearchConfig & {
    token: string;
    uri: string;
    searchApproaches?: PlexMusicSearchApproach[];
};
