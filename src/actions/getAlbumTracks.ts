import { removeFeaturing } from "@jjdenhertog/music-search";
import { HubSearchResult } from "../types";
import { getMetadata } from "./getMetadata";

export default async function getAlbumTracks(uri: string, token: string, key: string) {
    const albumTracks = await getMetadata(uri, token, key);

    const trackResult: HubSearchResult[] = albumTracks.map((metadata: any) => {
        return {
            type: "track",
            id: metadata.key,
            ratingKey: metadata.ratingKey,
            guid: metadata.guid,
            score: metadata.score,
            image: metadata.thumb,
            title: metadata.title,
            album: {
                id: metadata.parentKey,
                guid: metadata.parentGuid,
                title: metadata.parentTitle,
                year: metadata.parentYear,
                image: metadata.parentThumb,
            },
            artist: {
                id: metadata.grandparentKey,
                guid: metadata.grandparentGuid,
                title: removeFeaturing(metadata.originalTitle || metadata.grandparentTitle),
                image: metadata.grandparentThumb,
            }
        };
    });

    return trackResult;
}