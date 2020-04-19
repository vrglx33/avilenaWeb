export const mutation = async (query: string) => {
    try {
        const response = await fetch('https://avilena.now.sh', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({query: `mutation {${query}}`}),
        });
        return response.json();
    }catch (e) {
        console.log(e);
    }
};

export const queryGql = async (query: string) => {
    try {
        const response = await fetch('https://avilena.now.sh', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({query: `query {${query}}`}),
        });
        return response.json();
    }catch (e) {
        console.log(e);
    }
};
