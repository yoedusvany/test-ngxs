import Book from './book.model'

export namespace Book {
    export class Add {
        static readonly type = '[BOOK] Add';
        constructor(public book: Book) {}
    }

    export class Edit {
        static readonly type = '[BOOK] Edit';
        constructor(public book: Book) {}
    }

    export class List {
        static readonly type = '[BOOK] List';
    }

    export class Delete {
        static readonly type = '[BOOK] Delete';
        constructor(public bookName: string) {}
    }
}