export default interface Book {
    name:string;
    author: string;
}


export class BooksStateModel{
    books: Book[]
}