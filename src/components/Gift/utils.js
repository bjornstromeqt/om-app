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
  console.log('Make request!');

  const url = 'https://script.google.com/macros/s/AKfycbx5k_fnpRyoZJ_XwHLIXJkoF4C50ywdNlOa4TXUoh_KG4vUq6pNMGm8CtZ7xRfHX6CQ/exec';
  const options = {params: {option: option}};
  axios(url, options).then(response => {
    onSuccess(response.data);
  }).catch(error => {
    console.error(error);
    onError(error);
  })
}
