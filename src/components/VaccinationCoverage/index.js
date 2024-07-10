import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  console.log(data)
  const dataFormator = num => {
    if (num > 1000) {
      return `${(num / 1000).toString()}k`
    }
    return num.toString()
  }
  return (
    <ResponsiveContainer width="80%" height="80%">
      <BarChart data={data}>
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormator}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />

        <Legend />
        <Bar type="monotone" dataKey="dose_1" fill="#5a8dee" />
        <Bar type="monotone" dataKey="dose_2" fill="#2cc6c6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
