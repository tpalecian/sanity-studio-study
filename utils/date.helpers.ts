export const substractMinutesFromDate = (date: string, minutes: number): Date => {
  return new Date(new Date(date).getTime() - minutes * 60000)
}
