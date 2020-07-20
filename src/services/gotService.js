export default class GotService {
    constructor() {
        this._apiBase = 'https://api.github.com';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}/search${url}`);

        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiBase}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    getRepositories = async (request) => {
        // const Repositories = await this.getResource(`/repositories?q=${request}&sort=stars&order=desc`);
        const Repositories = await this.getResource(`/repositories?q=tetris+language:assembly&sort=stars&order=descpage=1&per_page=10`);
        return this._transformRepositories(Repositories);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'This information is not available'
        }
    }

    _extractDate = (item) => {
        const updatedDate = /^[0-9]{4}(-[0-9]{2}){2}/;
        return item.match(updatedDate)[0];
    }

    _extractUrlRepositories = (item) => {
        const urlReposit = /(\bS*\b\/\b\b\S*\b)$/;
        return item.match(urlReposit)[0];
    }

    _transformRepositories = (Reposit) => {
        return {
            totalCount: this.isSet(Reposit.total_count),
            items: Reposit.items.map((data) =>{
                return (
                    {name: this.isSet(data.name),
                    stars: this.isSet(data.stargazers_count),
                    lastCommit: this._extractDate(data.updated_at),
                    urlRepositories: this._extractUrlRepositories(data.html_url),
                    urlPerson: this.isSet(data.owner.html_url),
                    language: this.isSet(data.language),
                    nickName: this.isSet(data.owner.login),
                    description: this.isSet(data.description),
                    contributorsUrl: this.isSet(data.contributors_url),
                    photo: this.isSet(data.owner.avatar_url)}
                )})
            };
    }
}
