const options = {
  headers: {
    "X-RapidAPI-Key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export default class API {
  constructor() {
    this.songs = [];
  }

  async getPopular() {
    const res = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr",
      options
    );

    const data = await res.json();

    this.songs = data.tracks;
  }

  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`,
      options
    );

    const data = await res.json();

    const formatted = data.tracks.hits.map((song) => {
      return song.track;
    });

    this.songs = formatted;
  }
}
