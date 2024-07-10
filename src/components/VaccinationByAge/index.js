import './index.css'
import {PieChart, Pie, ResponsiveContainer, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)

  return (
    <ResponsiveContainer width="80%" height="80%">
      <PieChart>
        <Pie
          data={data}
          startAngle={0}
          endAngle={360}
          cx="50%"
          cy="50%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="44-60" fill="#2cc6c6" />
          <Cell name="above-60" fill="#a3df9f" />
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
