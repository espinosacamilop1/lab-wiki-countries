import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from '../../countries.json'

export default class CountryDetail extends Component {
    render() {
        const countryID = this.props.match.params.CountryId;
        const countryDetail = this.props.countries.find((country) => country.cca3 === countryID )
     
        return (
            <div className="details-div">
                <h3>{countryDetail.name.common}</h3>
                <h5>Capital {countryDetail.capital}</h5>
                <h5>Area {countryDetail.area} km<sup>2</sup></h5>
                <div>
                    <h5>Borders</h5>
                    <ul>
                        {countryDetail.borders.map(border =>
                             <li><Link to={`/details/${border}`}>{border}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
