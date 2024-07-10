import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

const initialRenderStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    renderStatus: 'INITIAL',
    vaccineData: [],
  }

  componentDidMount() {
    this.getVaccineData()
  }

  getVaccineData = async () => {
    this.setState({renderStatus: initialRenderStatus.progress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        vaccineData: updatedData,
        renderStatus: initialRenderStatus.success,
      })
    } else {
      this.setState({renderStatus: initialRenderStatus.failure})
    }
  }

  successRender = () => {
    const {vaccineData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccineData
    return (
      <>
        <div className="charts">
          <h1 className="charts-heading">Vaccination Coverage</h1>
          <VaccinationCoverage data={last7DaysVaccination} />
        </div>
        <div className="charts pie-chart">
          <h1 className="charts-heading">Vaccination by Age</h1>
          <VaccinationByAge data={vaccinationByAge} />
        </div>
        <div className="charts pie-chart">
          <h1 className="charts-heading">Vaccination by gender</h1>
          <VaccinationByGender data={vaccinationByGender} />
        </div>
      </>
    )
  }

  failureRender = () => (
    <div className="failure">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  progressRender = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} className="loader" />
    </div>
  )

  functionToShowWhatToRender = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case initialRenderStatus.success:
        return this.successRender()
      case initialRenderStatus.failure:
        return this.failureRender()
      case initialRenderStatus.progress:
        return this.progressRender()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p>Co-Win</p>
        </div>
        <h1 className="cowin-heading">Cowin Vaccination In India</h1>
        <div className="charts-container">
          {this.functionToShowWhatToRender()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
