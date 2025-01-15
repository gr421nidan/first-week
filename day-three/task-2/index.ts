// Асинхронные запросы и обработка ошибок.
async function fetchFunction() {
    try {
        const response = await fetch("https://67875a08c4a42c916106526e.mockapi.io/date/dogs", {method: 'GET'});
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(`Ошибка при загрузке данных : ${response.status}`);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        return error;
    }
}

fetchFunction().then((response) => console.log('Данные:', response));