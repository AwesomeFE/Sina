import axios from 'axios';
import {
  GET_COUNTRY_LIST,
  GET_COUNTRY_DETAIL
} from '../constants/apiUrls';

export const getCountryList = () => axios.get(GET_COUNTRY_LIST());
export const getCountryDetail = countryId => axios.get(GET_COUNTRY_DETAIL(countryId));