import * as React from 'react'
import { BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { ResponsiveContainer } from 'recharts'
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

export const DashboardCharts: React.FC = () => {
  const emissionsByDepartment = [
    { name: 'Manufacturing', value: 45 },
    { name: 'Logistics', value: 30 },
    { name: 'Office', value: 15 },
    { name: 'Data Center', value: 10 },
  ]

  const efficiencyMetrics = [
    { category: 'Solar', value: 85 },
    { category: 'Wind', value: 65 },
    { category: 'Hydro', value: 45 },
    { category: 'Biomass', value: 30 },
    { category: 'Geothermal', value: 25 },
  ]

  const sustainabilityScores = [
    { subject: 'Energy Efficiency', A: 120, B: 110 },
    { subject: 'Waste Reduction', A: 98, B: 130 },
    { subject: 'Water Usage', A: 86, B: 130 },
    { subject: 'Green Tech', A: 99, B: 100 },
    { subject: 'Recycling', A: 85, B: 90 },
    { subject: 'Transport', A: 65, B: 85 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Emissions by Department</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={emissionsByDepartment}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {emissionsByDepartment.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Renewable Energy Efficiency</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={efficiencyMetrics} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" name="Efficiency Score" fill="#2563EB" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sustainability Performance</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={sustainabilityScores}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Target" dataKey="A" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Radar name="Current" dataKey="B" stroke="#6366F1" fill="#6366F1" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Carbon Reduction Progress</h3>
        <div className="space-y-6">
          {[
            { label: 'Manufacturing', current: 75, color: 'bg-blue-600' },
            { label: 'Transportation', current: 45, color: 'bg-green-500' },
            { label: 'Energy Usage', current: 60, color: 'bg-yellow-500' },
            { label: 'Waste Management', current: 85, color: 'bg-purple-500' },
          ].map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{metric.label}</span>
                <span className="font-medium">{metric.current}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${metric.color} rounded-full transition-all duration-500`}
                  style={{ width: `${metric.current}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 