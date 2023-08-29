import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';


export function useSelectDate() {
  const [state, setState] = useState({data: [], isLoading: true, error: null});

  const handleSuccess = useCallback((data) => {
    setState({data: data, isLoading: false, error: null});
  }, [setState]);

  const handleError = useCallback((error) => {
    setState({data: [], isLoading: false, error: error});
  }, [setState]);


  const selectDate = useCallback((option) => {
    setState({isLoading: true});
    makeRequest(option, handleSuccess, handleError);
  }, [handleSuccess, handleError]);

  useEffect(() => {
    console.log('Use effect!');
    makeRequest('', handleSuccess, handleError);
  }, [handleError, handleSuccess]);

  return [selectDate, state];
}


function makeRequest(option = '', onSuccess, onError) {
  const url = 'https://script.google.com/macros/s/AKfycbwh0auXg6yFVoZq357_ktVUV6F37X5GP79eclDMiEyU7qMYbWkbTLuFIun0ZhRtR-JU/exec';
  const options = {params: {option: option}};
  axios(url, options).then(response => {
    onSuccess(response.data);
  }).catch(error => {
    console.error(error);
    onError(error);
  })
}
