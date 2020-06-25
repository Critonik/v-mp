export const getDataFromServer = async (url: string, opt = 'GET') => {
    let response = await fetch(url, {
        method: opt,
    });

    return await response.json();
}