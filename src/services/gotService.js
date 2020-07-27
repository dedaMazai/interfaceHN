export default class GotService {
    constructor() {
        this._apiBase = 'https://api.github.com';
    }
    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiBase}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    getRepositories = async (request, page) => {
        const Repositories = await this.getResource(`${this._apiBase}/search/repositories?q=${request}+in:name&sort=stars&order=desc&page=${page}&per_page=10`);
        return this._transformRepositories(Repositories);
    }
    // запрос репозиториев

    getСontributors = async (request) => {
        const Repositories = await this.getResource(request);
        return this._transformСontributors(Repositories);
    }
    // запрос контрибьютеров

    isSet(data) {
        if (data) {
            return data
        } else {
            return 0
        }
    }

    isSetString(data) {
        if (data) {
            return data
        } else {
            return "No information."
        }
    }

    lengthString(data, size) {
        if (data.length < size) {
            return data
        } else {
            return data.substr(0, size)+"..."
        }
    }

    _extractDate = (item) => {
        const updatedDate = /^[0-9]{4}(-[0-9]{2}){2}/;
        return item.match(updatedDate)[0];
    }

    _transformRepositories = (Reposit) => {
        let i=0;
        return {
            totalCount: this.isSet(Reposit.total_count),
            items: Reposit.items.map((data) =>{
                return (
                    {name: this.lengthString(data.name, 28),
                    stars: this.isSet(data.stargazers_count),
                    lastCommit: this._extractDate(data.updated_at),
                    urlRepositories: this.isSet(data.html_url),
                    urlPerson: this.isSet(data.owner.html_url),
                    language: this.isSetString(data.language),
                    nickName: this.isSetString(data.owner.login),
                    description: this.isSetString(data.description),
                    contributorsUrl: this.isSet(data.contributors_url),
                    photo: this.isSet(data.owner.avatar_url),
                    id: i++}
                )
            })
        };
    }
    _transformСontributors = (Reposit) => {
        let i=0;
        return {
            сontributors: Reposit.splice(0, 10).map((data) =>{
                return (
                    {name: this.lengthString(data.login, 11),
                    photo: this.isSet(data.avatar_url),
                    urlPerson: this.isSet(data.html_url),
                    id: i++}
                )
            })
        };
    }
}
