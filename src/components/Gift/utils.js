import {useEffect, useState} from 'react';
import axios from 'axios';


export function useSelectDate() {
  const [state, setState] = useState({data: [], isLoading: true, error: null});

  useEffect(() => {
    selectDate('', (data) => {
      setState({data: data, isLoading: false, error: null});
    }, (error => {
      setState({data: [], isLoading: false, error: error})
    }))
  });

  return state
}


function selectDate(option = '', onSuccess, onError) {
  const url = 'https://script.google.com/macros/s/AKfycbx5k_fnpRyoZJ_XwHLIXJkoF4C50ywdNlOa4TXUoh_KG4vUq6pNMGm8CtZ7xRfHX6CQ/exec';
  const options = {params: {option: option}};
  axios(url, options).then(response => {
    console.log(response);
    onSuccess(response);
  }).catch(error => {
    console.log(error);
    onError(onError);
  })

}