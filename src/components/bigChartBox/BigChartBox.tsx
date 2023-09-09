import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import './bigChartBox.scss'

const data = [
	{
		name: 'Sun',
		books: 4000,
		clothes: 2400,
		Electronic: 2400,
	},
	{
		name: 'Mon',
		books: 3000,
		clothes: 1398,
		Electronic: 2210,
	},
	{
		name: 'Tue',
		books: 2000,
		clothes: 9800,
		Electronic: 2290,
	},
	{
		name: 'Wed',
		books: 2780,
		clothes: 3908,
		Electronic: 2000,
	},
	{
		name: 'Thu',
		books: 1890,
		clothes: 4800,
		Electronic: 2181,
	},
	{
		name: 'Fri',
		books: 2390,
		clothes: 3800,
		Electronic: 2500,
	},
	{
		name: 'Sat',
		books: 3490,
		clothes: 4300,
		Electronic: 2100,
	},
]

const BigChartBox = () => {
	return (
		<div className="bigChartBox">
			<h1>Revenue Analytics</h1>
			<div className="chart">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="electronic"
							stackId="1"
							stroke="#8884d8"
							fill="#8884d8"
						/>
						<Area
							type="monotone"
							dataKey="clothes"
							stackId="1"
							stroke="#82ca9d"
							fill="#82ca9d"
						/>
						<Area
							type="monotone"
							dataKey="books"
							stackId="1"
							stroke="#ffc658"
							fill="#ffc658"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default BigChartBox
