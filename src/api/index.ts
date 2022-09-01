import config from './key.js'

//dataTypes interface
interface dataTypes {
    title: string, 
    date: string,
    url: string, 
    explanation: string
}

//display the data to html elements from the fetched api
const outputData = (data: dataTypes) => {
    (document.getElementById('title') as HTMLElement).insertAdjacentHTML('afterbegin', data.title);
    (document.getElementById('date') as HTMLElement).insertAdjacentHTML('afterbegin', data.date);
    (document.getElementById('picture') as HTMLImageElement).src = data.url;
    (document.getElementById('explanation') as HTMLElement).insertAdjacentHTML('afterbegin', data.explanation);
}

//function to fetch api
async function apodFetch() {
    try {
        //apod api url
        const url: string = "https://api.nasa.gov/planetary/apod?api_key=";

        //api key
        const api_key: string = config.API_KEY;

        //fetch apod api (client-side fetching only - not handled by server)
        const response = await fetch(`${url}${api_key}`);

        //fetched api data gets parsed into json format
        const data: dataTypes = await response.json();

        //outputData takes in parsed api data as arguments to display data
        outputData(data);
    } catch(error) {
        //catch any exceptions; log to error stream
        console.error(error);
    }
}
apodFetch();