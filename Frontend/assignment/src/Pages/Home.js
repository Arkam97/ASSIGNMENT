import React,{useEffect } from 'react'
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import Reacttable from '../Components/Reacttable'

import { getProducts} from '../redux/actions/ProductActions';
import { useDispatch } from 'react-redux';


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
        <Header/>
        <Intro/>
        <Reacttable/>
    </div>
  )
}
