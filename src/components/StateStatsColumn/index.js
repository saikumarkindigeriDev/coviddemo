import {Link} from 'react-router-dom'
import './index.css'

const StateStatsItem = props => {
  const {StatData} = props
  const {
    stateName,
    confirmed,
    recovered,
    deceased,
    other,
    population,
    stateCode,
  } = StatData
  const active = confirmed - recovered - deceased - other

  return (
    <>
      <li className="list-all-cases ">
        <div className="states-container-home" testid="stateWiseCovidDataTable">
          <Link
            to={`/state/${stateCode}`}
            className="link-home"
            title="click to see state details"
          >
            <p className="states-names-home">{stateName}</p>
          </Link>
        </div>
        <div className="home-columns" testid="stateWiseCovidDataTable">
          <p className="confirmed-home">{confirmed}</p>
        </div>
        <div className="home-columns" testid="stateWiseCovidDataTable">
          <p className="active-home">{active}</p>
        </div>
        <div className="home-columns" testid="stateWiseCovidDataTable">
          <p className="recovered-home">{recovered}</p>
        </div>
        <div className="home-columns" testid="stateWiseCovidDataTable">
          <p className="deceased-home">{deceased}</p>
        </div>
        <div className="home-columns" testid="stateWiseCovidDataTable">
          <p className="population-home">{population}</p>
        </div>
      </li>
    </>
  )
}

export default StateStatsItem
