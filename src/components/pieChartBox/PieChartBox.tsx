import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import './pieChartBox.scss'
type PieChartData = {
	name: string
	value: number
	color: string
}
type PieCharBoxData = {
	data: PieChartData[]
}

const PieChartBox = (props: PieCharBoxData) => {
	return (
		<div className="pieChartBox">
			<h1>Leads By Source</h1>
			<div className="chart">
				<ResponsiveContainer width="99%" height={300}>
					<PieChart>
						<Tooltip
							contentStyle={{ background: 'white', borderRadius: '5px' }}
						/>
						<Pie
							data={props.data}
							innerRadius={'70%'}
							outerRadius={'90%'}
							paddingAngle={5}
							dataKey="value"
						>
							{props.data.map((item) => (
								<Cell key={item.name} fill={item.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className="options">
				{props.data.map((item) => (
					<div className="option" key={item.name}>
						<div className="title">
							<div
								className="dot"
								style={{ backgroundColor: item.color }}
							/>
							<span>{item.name}</span>
						</div>
						<span>{item.value}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default PieChartBox
