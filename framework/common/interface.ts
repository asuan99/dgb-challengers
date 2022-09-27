

enum Method {
    GET = 'get',
    POST = 'post',
}
enum Metadatakeys{
    BASE_PATH = 'base_path',
    ROUTER = 'router',
    LOGGER = 'logger',
}
interface IRouter {
    method:Method;
    path:string;
    handlerName:string|symbol;
}
export type {IRouter};
export {Method,Metadatakeys};

