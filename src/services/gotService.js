export default class gotService {
    constructor () {
        this._apiBase = 'https://anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
              
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const result = await this.getResource('/characters?page=5&pageSize=10');
        return result.map(this._transformCharacter)
    }
     
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character)
    }

    getAllBooks = async () => {
        const result = await this.getResource('/books/');
        return result.map(this._transformBook)
    }
     
    getBook = async (id) => {
        const character = await this.getResource(`/books/${id}`)
        return this._transformBook(character)
    }

    getAllHouses = async () => {
        const result = await this.getResource('/houses/');
        return result.map(this._transformHouse)
    }
     
    getHouse = async (id) => {
        const character = await this.getResource(`/houses/${id}`)
        return this._transformHouse(character)
    }
    
    _transformCharacter (char) {
        return {
            id: char.url.replace(/[https, api, /, :, www, nofcendfrem, .]/g , ''),
            name: char.name || '-',
            gender: char.gender|| '-',
            born: char.born || '-',
            died: char.died || '-',
            culture: char.culture || '-'
        }
    }

    _transformHouse(house) {
        return {
            id: house.url.replace(/[https, api, /, :, www, nofcendfrem, ., u]/g , ''),
            name: house.name || '-',
            region: house.region || '-',
            words: house.words || '-',
            titles: house.titles || '-',
            ancestralWeapons: house.ancestralWeapons || '-'
        }
    }

    _transformBook(book) {
        return {
            id: book.url.replace(/[https, api, /, :, www, nofcendfrem, ., bk]/g , ''),
            name: book.name || '-',
            numberOfPages: book.numberOfPages || '-',
            publiser: book.publiser || '-',
            released: book.released || '-'
        }
    }
}