export const calculateProjections = (currentEmissions: number) => {
  const monthlyReduction = 0.05 // 5% reduction target
  const sixMonthProjection = currentEmissions * Math.pow(1 - monthlyReduction, 6)
  
  return {
    current: currentEmissions,
    projected: sixMonthProjection,
    savings: currentEmissions - sixMonthProjection
  }
} 