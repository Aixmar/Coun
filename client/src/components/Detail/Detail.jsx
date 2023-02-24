import { getCountryDetail } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//uso useParams para el id.

const Detail = (props) => {

   const dispatch = useDispatch();
   const {id} = useParams();
   //porque useParams me devuelve un objeto, de eso quiero el id. Puedo hacer destructuring.
  
   
   useEffect(() => {
     dispatch(getCountryDetail(id));
    }, [dispatch,id])

    const countryDetail = useSelector(state=> state.countryDetail);
  
  return (
    <div>
      <img src={countryDetail.flag} alt=""/>
      <h1>{countryDetail.name}</h1>
      <p>{countryDetail.continent}</p>
      <p>{countryDetail?.capital}</p>
      <p>{countryDetail?.subregion}</p>
      <p>{countryDetail?.area}</p>
      <p>{countryDetail.population}</p>

    </div>
  )
}

export default Detail;
