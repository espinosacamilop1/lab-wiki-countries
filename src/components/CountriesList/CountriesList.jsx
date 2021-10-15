import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from '../../countries.json'
export default class CountriesList extends Component {
    render() {
        return data.map(country => (
             <div className='country-list'>
                  <Link className='country-link' to={`/details/${country.cca3}`}>{country.flag} {country.name.common}</Link> 
            </div>
        ))
           
    }
}
