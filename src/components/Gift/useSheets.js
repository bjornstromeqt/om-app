import {useCallback, useEffect, useState} from 'react';


const gapi = window.gapi;


// Help: https://medium.com/google-cloud/gapi-the-google-apis-client-library-for-browser-javascript-5896b12dbbd5
// https://developers.google.com/sheets/api/quickstart/js
gapi.load('client', init);


async function init() {
    const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

    // 2. Initialize the JavaScript client library.
    await gapi.client.init({
        apiKey: 'AIzaSyApjqLsPW54yRDqYwQr9ISpWkjC015FUCU',
        discoveryDocs: DISCOVERY_DOCS
    });
}

export function useSheets() {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        error: null
    });

    const handleSuccess = useCallback((data) => {
        setState({data: data, isLoading: false, error: null});
    }, [setState]);

    const handleError = useCallback((error) => {
        setState({data: [], isLoading: false, error: error});
    }, [setState]);

    console.log('USE SHEETS');

    const sheetId = '11YuUpu9aOn1YoEX7KUDycJj9w1X_l0agePlm96mzge8';
    const range = 'dates!A:D';

    useEffect(() => {
        getData(sheetId, range, handleSuccess, handleError);

        // updateCell(sheetId, 'dates!D2', 'asdasd', console.log, console.log);
    }, [sheetId, handleSuccess, handleError]);

    return state;
}

function getData(sheetId, range, onSuccess, onError) {
    console.log('GET DATA!');

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: range,
    }).then(response => {
        console.log('Response: ', response);
        const data = formatRows(response.result.values);
        onSuccess(data);
    }).catch(error => {
        console.log('The API returned an error: ' + error);
        console.table(error);
        onError(error);
    });
}

/*
function updateCell(sheetId, range, value, onSuccess, onError) {
    const params = {
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'USER_ENTERED'
    };

    const valueRangeBody = {
        values: [[value]]
    };
    gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody).then(response => {
        console.log('Response: ', response);
        onSuccess();
    }).catch(error => {
        console.log('The API returned an error: ' + error);
        onError(error);
    });
}
*/


function formatRows(values) {
    const headers = values[0];
    const rows = values.slice(1);

    return [...rows].map(row => {
        const item = {};
        headers.forEach((key, index) => {
            item[key] = row[index];
        });
        return item;
    });
}