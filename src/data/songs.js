export const COVER_PATH = 'src/assets/covers'
let SONG_PATH = 'src/data/assets/songs'

export const songs = [
  {
    id: 0,
    name: 'A window to the past',
    path: './data/songs/Song1.mp3',
    artist: 'John Williams',
    cover: new URL(`${COVER_PATH}/cover1.jpeg`, window.location.href).href,
    alt: 'Cover 1'
  },
  {
    id: 1,
    name: 'Come on Eileen',
    path: './data/songs/Song2.mp3',
    artist: 'Dexys midnight runners',
    cover: new URL(`${COVER_PATH}/cover2.jpg`, window.location.href).href,
    alt: 'Cover 2'
  },
  {
    id: 2,
    name: 'Como los olivos',
    path: './data/songs/Song3.mp3',
    artist: 'Bebe',
    cover: new URL(`${COVER_PATH}/cover3.jpg`, window.location.href).href,
    alt: 'Cover 3'
  },
  {
    id: 3,
    name: 'Heroes',
    path: './data/songs/Song4.mp3',
    artist: 'David Bowie',
    cover: new URL(`${COVER_PATH}/cover4.png`, window.location.href).href,
    alt: 'Cover 4'
  },
  {
    id: 4,
    name: 'Nobody but me',
    path: './data/songs/Song5.mp3',
    artist: 'The Human Beinz',
    cover: new URL(`${COVER_PATH}/cover5.jpeg`, window.location.href).href,
    alt: 'Cover 5'
  },
  {
    id: 5,
    name: 'O Children',
    path: './data/songs/Song6.mp3',
    artist: 'Nick Cave & the bad seeds',
    cover: new URL(`${COVER_PATH}/cover6.jpeg`, window.location.href).href,
    alt: 'Cover 6'
  },
  {
    id: 6,
    name: 'Siempre me quedara',
    path: './data/songs/Song7.mp3',
    artist: 'Bebe',
    cover: new URL(`${COVER_PATH}/cover7.jpeg`, window.location.href).href,
    alt: 'Cover 7'
  },
  {
    id: 7,
    name: 'The other side',
    path: './data/songs/Song8.mp3',
    artist: 'Hugh Jackman & Zac Efron',
    cover: new URL(`${COVER_PATH}/cover8.jpeg`, window.location.href).href,
    alt: 'Cover 8'
  },
  {
    id: 8,
    name: 'Femme like you',
    path: './data/songs/Song9.mp3',
    artist: 'Monaldin feat. emma peters',
    cover: new URL(`${COVER_PATH}/cover9.jpeg`, window.location.href).href,
    alt: 'Cover 9'
  },
  {
    id: 9,
    name: 'Honeypie',
    path: './data/songs/Song10.mp3',
    artist: 'JAWNY',
    cover: new URL(`${COVER_PATH}/cover10.jpeg`, window.location.href).href,
    alt: 'Cover 10'
  },
  {
    id: 10,
    name: 'Rolling in the deep',
    path: './data/songs/Song11.mp3',
    artist: 'Adele',
    cover: new URL(`${COVER_PATH}/cover11.png`, window.location.href).href,
    alt: 'Cover 11'
  }
]
