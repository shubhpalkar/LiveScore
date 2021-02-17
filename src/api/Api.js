const API_KEY = 'M8BV27pDcadXB9yyotZzC4LLhDn2';

export const getMatches = () => { 
    const url = 'https://cricapi.com/api/matches?apikey=M8BV27pDcadXB9yyotZzC4LLhDn2';
    // const url = 'https://cricapi.com/api/matches?apikey=${API_KEY}';

    return fetch(url).then((response) => response.json())
    .catch((error) => console.log ("Error :", error));
}

export const getMachDetail = (id) => {
    const url = 'https://cricapi.com/api/cricketScore?unique_id=';
    // const url = 'https://cricapi.com/api/cricketScore?apikey=M8BV27pDcadXB9yyotZzC4LLhDn2';
    // const url = 'https://cricapi.com/api/cricketScore?unique_id='${id}&apikey=M8BV27pDcadXB9yyotZzC4LLhDn2';
                                    
    // return fetch(url+id+'?apikey=M8BV27pDcadXB9yyotZzC4LLhDn2').then((response) => response.json())
    return fetch(url+id+'&apikey=M8BV27pDcadXB9yyotZzC4LLhDn2').then((response) => response.json())
    .catch((error) => console.log ("Error :", error));

}