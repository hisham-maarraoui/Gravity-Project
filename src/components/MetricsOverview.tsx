import { MetricCard } from './MetricCard'

export const MetricsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard 
        title="Total Carbon Footprint"
        value="1,245 tCO2e"
        trend="Across all operations"
        trendValue="-15%"
        isPositive={true}
      />
      <MetricCard 
        title="Energy Efficiency"
        value="85%"
        trend="Resource utilization"
        trendValue="+5%"
        isPositive={true}
      />
      <MetricCard 
        title="Sustainability Score"
        value="A+"
        trend="Industry ranking"
        trendValue="Top 10%"
        isPositive={true}
      />
      <MetricCard 
        title="Green Investment"
        value="$2.4M"
        trend="Sustainability projects"
        trendValue="+$800K"
        isPositive={true}
      />
    </div>
  )
} 