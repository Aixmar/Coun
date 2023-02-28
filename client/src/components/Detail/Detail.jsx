import { getCountryDetail } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';

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
    <div className={style.detailcont}>
      <img src={countryDetail.flag} alt=""/>
      <div>
        <label>Name:</label>
        <h1>{countryDetail.name}</h1>
      </div>

      <div>
      <label>Continent:</label>
      <p>{countryDetail.continent}</p>
      </div>

      <div>{ countryDetail.capital ?
      <label>Capital:</label> : ""
        }
      <p>{countryDetail?.capital}</p>
      </div>

      <div>{ countryDetail.subregion ?
      <label>Subregion:</label> : ""
        }
      <p>{countryDetail?.subregion}</p>
      </div>

      <div>{ countryDetail.area ?
      <label>Area:</label> : ""
        }
      <p>{countryDetail?.area} km²</p>
      </div>

      <div>
      <label>Population:</label>
      <p>{countryDetail.population}</p>
      </div>

    </div>
  )
}

export default Detail;
