import './index.css'
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <ResponsiveContainer width="80%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="50%"
          type="monotone"
          outerRadius={80}
          innerRadius={30}
        >
          <Cell name="Male" fill="#cbd5e1" />
          <Cell name="Female" fill="#64c2a6" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
