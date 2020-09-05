
export default class RMservice{

    _url = 'https://rickandmortyapi.com/api/';

    getData = async(url)=>{
        const data = await fetch(url);
        return data.json();
    }

    getAllCharacters = async()=>{
        const res = await this.getData(`${this._url}character`);
        return res.results;
    }

    getAllEpisodes = async()=>{
        const res = await this.getData(`${this._url}episode`);
        return res.results;
    }

    getAllLocations = async()=>{
        const res = await this.getData(`${this._url}location`);
        return res.results;
    }

    getLocation = async(id)=>{
        const res = await this.getData(`${this._url}location/${id}`);
        return res;
    }

    getCharacter = async(id)=>{
        const res = await this.getData(`${this._url}character/${id}`);
        return res;
    }

    getEpisode = async(id)=>{
        const res = await this.getData(`${this._url}episode/${id}`);
        return res;
    }
}