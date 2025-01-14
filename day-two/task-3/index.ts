//создание объекта
type SourceData = {
    title: string;
    year: number;
    author: string;
}
type TargetData = {
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
        url: `www.someurl.com/preview?title=${encodeURIComponent(source.title)}&year=${source.year}&author=${encodeURIComponent(source.author)}`,
        //посмотрела в инетернете, как убрать лишние пробелы, для формирования url - encodeURIComponent
    };
    return target
}

const source: SourceData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

console.log(createBook(source));