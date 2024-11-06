
# Plex Music Search

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jjdenhertog)

The `plex-music-search` library provides tools for searching tracks within a Plex music library, building on the functionality of [music-search](https://github.com/jjdenhertog/music-search) with Plex-specific configurations. It can handle track searches efficiently by caching repeated search queries.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Default Settings](#default-settings)
- [Configuration Options](#configuration-options)
- [Getting Plex URI and Token](#getting-plex-uri-and-token)
- [Support](#support)

## Installation

Install the `plex-music-search` library with npm:

```bash
npm install @jjdenhertog/plex-music-search
```

## Usage

The library provides a straightforward API to search tracks in your Plex library. To get started, you’ll need the URI and token for your Plex server.

```typescript
import PlexMusicSearch from '@jjdenhertog/plex-music-search';

const searchItems = [
    { id: "track1", title: "Shape of You", album: "Divide", artists: ["Ed Sheeran"] },
    // More items...
];

const plexMusicSearch = new PlexMusicSearch({
    uri: "https://your-plex-server-url",
    token: "your-plex-auth-token",
});

// Search for multiple tracks
const searchResult = await plexMusicSearch.search(searchItems);
console.log(searchResult);
```

### What is with the ID while searching?

You might notice that the search query must contain an ID
```typescript
const searchItems = [
    { id: "track1", title: "Shape of You", album: "Divide", artists: ["Ed Sheeran"] },
    // More items...
];
```

Most of the times when you're searching for a track you are doing it to match one library with the other. For example matching Spotify with Plex. The result after searching will contain the original search query including the id and the results. The results are all the tracks matching with the search query. With this approach you can trace back the results more easily.

If you do not need the id for this purpose, you can simply leave it empty: 
```typescript
{ id: "", title: "Shape of You", album: "Divide", artists: ["Ed Sheeran"] }
```

## Default Settings

The `plex-music-search` library has a set of default search settings, allowing you to use it without additional configuration:

- **URI**: The base URL of your Plex server.
- **Token**: Your Plex authentication token.

These settings ensure you can start searching with minimal setup. Advanced configurations are available if needed.

## Configuration Options

The `plex-music-search` library supports several configuration options to customize the search behavior. Here’s a quick look at the main options:

- **uri**: URL of the Plex server.
- **token**: Plex authentication token.

Example:

```typescript
const plexMusicSearch = new PlexMusicSearch({
    uri: "https://your-plex-server-url",
    token: "your-plex-auth-token"
});
```

## Getting Plex URI and Token

To use `plex-music-search`, you’ll need your Plex server's URI and a token for authentication:

1. **URI**: This is the base URL of your Plex server. You can usually find this in your Plex server settings, or by accessing Plex Web and copying the URL from your browser.

2. **Token**: The Plex token is required to authenticate API requests. To find your token:
   - Open Plex Web and log in.
   - Right-click on the page and select "Inspect" or "View Page Source."
   - Look for the token in the source code (often found after the term "X-Plex-Token").

## Faster searching

The default approach search quite thoroughly through your but as a result can be extremely time-consuming. By default it uses three search approaches. By limiting to only one search approach you will decrease the time searching tremendously.

```typescript
const searchItems = [
    { id: "1234", title: "Shape of You", album: "Divide", artists: ["Ed Sheeran"] },
    // More items...
];

const plexMusicSearch = new PlexMusicSearch({
    uri: "https://your-plex-server-url",
    token: "your-plex-auth-token",
    searchApproaches: [{ id: 'fast', filtered: true, trimmed: false}]
});

// Search for multiple tracks
const searchResult = await plexMusicSearch.search(searchItems);

```

## Support

If this project helps you, consider supporting me:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jjdenhertog)

Your support helps improve and maintain this library.
