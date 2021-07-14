export namespace Author{
    export class Add {
        static readonly type = '[AUTHOR] Add';
        constructor(public name: string) {
        }
    }
}