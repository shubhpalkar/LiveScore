const API_KEY = 'M8BV27pDcadXB9yyotZzC4LLhDn2';

export const getMatches = () => { 
    const url = 'https://cricapi.com/api/matches?apikey=${API_KEY}';

    return fetch(url).then((response) => response.json())
    .catch((error) => console.log ("Error :", error));
}

export const getMachDetail = () => {
    const url = 'https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}';

    return fetch(url).then((response) => response.json())
    .catch((error) => console.log ("Error :", error));

}