import { EmissionsChart } from './components/EmissionsChart'
import { MetricsOverview } from './components/MetricsOverview'
import { DashboardCharts } from './components/DashboardCharts'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Carbon Analytics Dashboard</h1>
            <span className="text-sm text-gray-500">Real-time Analytics</span>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <MetricsOverview />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <EmissionsChart />
          </div>
          <DashboardCharts />
        </div>
      </main>
    </div>
  )
}

export default App
