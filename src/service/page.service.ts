import axios from 'axios';

class PageService {
    constructor() { }
    private async searchNews(query: string) {
        console.log('searchNews');
        axios.get('https://openapi.naver.com/v1/search/news.json',
            { params: { query: query } })
            .then(res => { return res; });

    }
    get default() {
        return {
            searchNews: this.searchNews,
        }
    }

}

export default PageService;