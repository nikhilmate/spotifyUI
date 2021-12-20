const API = 'https://api.ss.dev/resource/api'

export const XHR = function (query, variables) {
    try {
        if (!query) return Promise.reject('No Query');
        let body = { query }
        if(variables) body = { ...body, variables }
        const payload = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        };
        return fetch(API, payload)
            .then((response) => {
                if (response.status >= 400) 
                    throw new Error("Error fetching data");
                else
                    return response.json();
            })
    } catch (error) {
        Promise.reject('Error while fetching data')
    }
}