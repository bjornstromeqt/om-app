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
    const newState = Object.assign({}, state, {isLoading: true});
    setState(newState);
    const params = {select: option};
    makeRequest(params, handleSuccess, handleError);
  }, [state, handleSuccess, handleError]);

  const deselectDate = useCallback((option) => {
    const newState = Object.assign({}, state, {isLoading: true});
    setState(newState);

    const params = {deselect: option};
    makeRequest(params, handleSuccess, handleError);
  }, [state, handleSuccess, handleError]);


  useEffect(() => {
    console.log('Use effect!');
    makeRequest('', handleSuccess, handleError);
  }, [handleError, handleSuccess]);

  return [selectDate, deselectDate, state];
}


function makeRequest(params = null, onSuccess, onError) {
  const url = 'https://script.google.com/macros/s/AKfycbxx3g3QtxAkSQUhCJ7GrzJ2Hs-viyYnJB4F-1ipYDLniEME3Y7AAAo9Ptx7xTvNXcRu/exec';
  const options = {params: params};
  axios(url, options).then(response => {
    onSuccess(response.data);
  }).catch(error => {
    console.error(error);
    onError(error);
  })
}
