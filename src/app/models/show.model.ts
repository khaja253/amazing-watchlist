export class Show {
  id: number;
  name: string;
  status: string;
  genres: Array<string>;
  summary: string;
  image: string;
  language: string;

  constructor(showInfo: { name: any; language: any; genres: any; id: any; summary: any; status: any; image: any; }) {
    this.id = showInfo.id;
    this.language = showInfo.language;
    this.name = showInfo.name;
    this.genres = showInfo.genres;
    this.summary = showInfo.summary;
    this.status = showInfo.status;
    this.image = showInfo.image;
  }
}
