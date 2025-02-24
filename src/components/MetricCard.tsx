import * as React from 'react'

interface MetricCardProps {
  title: string
  value: string
  trend?: string
  trendValue?: string
  isPositive?: boolean
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  trend,
  trendValue,
  isPositive = true 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      {trend && (
        <div className="mt-2 flex items-center">
          {trendValue && (
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'} mr-2`}>
              {trendValue}
            </span>
          )}
          <span className="text-sm text-gray-600">{trend}</span>
        </div>
      )}
    </div>
  )
} 