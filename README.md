# hexo-tag-spotify-batter
A Hexo tag for embedding spotify in article

## Installation
```bash
npm install hexo-tag-spotify-batter --save
```

## Usage
Add the tag markup to a post with the url of the content you want to embed.
Example
```
{% spotify [spotify_resource] [type] [size] %}
```
Field optional configuration value:
- spotify_resource: `Spotify URI` or `Http Link`

  For example
  ```
  # Use spotify URI
  {% spotify spotify:track:7kkRhGDCAVd5YVoieTChxG music large %}
  # Use http link
  {% spotify https://open.spotify.com/track/6Axm4pFDMEy2auiDldc1Gj?si=e5482b8fa0464bdf music large %}
  ```
- type: `music`, `podcast`, `playlist`
- size: `large`, `compact`
