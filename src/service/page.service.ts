import axios from 'axios';
import createHttpError from 'http-errors';

class PageService {
    constructor() { }
    private async searchNews(query: object) {
        const header = {
            "X-Naver-Client-Id":process.env.NAVER_CLIENT_KEY||'',
            "X-Naver-Client-Secret":process.env.NAVER_SECRET_KEY||'',
        }
        
        try{
        const temp = await axios.get('https://openapi.naver.com/v1/search/news.json',
            { params: query ,headers:header})
            return temp['data']
        }
        catch{
            createHttpError(404);
        }
    }
    get default() {
        return {
            searchNews: this.searchNews,
        }
    }

}

export default PageService;