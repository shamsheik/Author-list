export interface AuthorDetails{
    author: string;
    birthday: string;
    birthPlace: string;
    books: Book[];
}

export interface Book{
    imageUrl: string;
    title: string;
    purchaseLink: string;
    PublishDate: number;
}