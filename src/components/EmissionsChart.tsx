import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export const EmissionsChart = () => {
  const data = [
    { source: 'Manufacturing', scope1: 85, scope2: 65, scope3: 45 },
    { source: 'Logistics', scope1: 65, scope2: 55, scope3: 35 },
    { source: 'Data Centers', scope1: 45, scope2: 75, scope3: 25 },
    { source: 'Office Facilities', scope1: 35, scope2: 45, scope3: 15 },
    { source: 'Business Travel', scope1: 25, scope2: 35, scope3: 55 },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Emissions by Source and Scope</h2>
        <div className="flex gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Total: 675 tCO2e
          </span>
        </div>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="source" 
              stroke="#6B7280"
              tick={{ fill: '#6B7280' }}
            />
            <YAxis 
              stroke="#6B7280"
              tick={{ fill: '#6B7280' }}
              label={{ value: 'tCO2e', angle: -90, position: 'insideLeft', fill: '#6B7280' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#FFF',
                border: '1px solid #E5E7EB',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Bar 
              dataKey="scope1" 
              name="Scope 1 (Direct)" 
              fill="#2563EB" 
              stackId="a"
            />
            <Bar 
              dataKey="scope2" 
              name="Scope 2 (Energy)" 
              fill="#10B981" 
              stackId="a"
            />
            <Bar 
              dataKey="scope3" 
              name="Scope 3 (Indirect)" 
              fill="#6366F1" 
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 