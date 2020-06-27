export const getDataFromServer = async (url: string, opt = 'GET') => {
    try {
        let response = await fetch(url, {
            method: opt,
        });
        return response.json();
    } catch (e) {
        console.log('cannot get data');
    }
}