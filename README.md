# Plex Song Search

This library can be used to search for songs in a Plex library. Using the artist, song title and album name it tries to match songs. It leverages the local search and the discovery search. You can use a custom configuration to tweak how songs could be matched.

The goal of this lirbary is to match as much local Plex songs as possible before resorting to Tidal songs.

## Alternative Artists and Titles

While searching for songs you can provide alternative titles or artists. The library will first search with the original data and then resort to the alternative title. This approach can be very help while searching for classical songs.
