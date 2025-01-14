//создание объекта
interface SourceData {
    title: string;
    year: number;
    author: string;
}
interface TargetData {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
}

function createBook(source: SourceData): TargetData {
    const target: TargetData = {
        title: source.title,
        year: source.year,
        author: source.author,
        preview: `Название: ${source.title}, Автор: ${source.author}, Год: ${source.year}`,
        url: `www.someurl.com/preview?${new URLSearchParams({
            title: source.title,
            year: source.year.toString(),
            author: source.author
        }).toString()}`
    };
    return target
}

const source: SourceData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

console.log(createBook(source));