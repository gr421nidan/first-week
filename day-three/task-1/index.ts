// Promise с delay.
function promiseWithDelay(delay: number, message: string) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
    return promise;

}

promiseWithDelay(3000, 'Круто!').then(console.log)