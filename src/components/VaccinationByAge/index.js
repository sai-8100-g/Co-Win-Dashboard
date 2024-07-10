import './index.css'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)

  return (
    <PieChart width={1000} height={300}>
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
  )
}

export default VaccinationByAge
