export default class GotService {
    constructor() {
        this._apiBase = 'https://hacker-news.firebaseio.com/v0';
    }
    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiBase}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }
    getStories = async () => {
        let allStories = await this.getResource(`${this._apiBase}/newstories.json?orderBy="$key"&limitToFirst=100`);
        // запрос id последних 100 новостей
        let i=1;
        let stories = await allStories.map(
            async (id) => {
                let story = await this.getResource(`${this._apiBase}/item/${id}.json`); // запрос новости по id
                return {...this._transformStory(story), id: i++}; // форматируем новость в удобный формат
            });
        return stories;
    }
    // запрос информации для 100 новостей

    isSet(data) {
        if (data) {
            return data
        } else {
            return 0
        }
    }
    // проверка на наличие числа
    isSetString(data) {
        if (data) {
            return data
        } else {
            return "No information."
        }
    }
    // проверка на наличие строки информации
    _transformStory = (story) => {
        return (
            {
                title: this.isSetString(story.title),
                score: this.isSet(story.score),
                time: this.isSet(story.time),
                comment: this.isSet(story.kids),
                by: this.isSet(story.by)
            }
        );
    }
    //отформатировали данные и проверили что они не пустые
}

// let unixTimestamp = 1607609370;
// let date = new Date(unixTimestamp * 1000);
// console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());