const getTodaysDate = () => {
  const today = new Date()
  const dd = `${today.getDate()}`.padStart(2, '0')
  const mm = `${today.getMonth() + 1}`.padStart(2, '0')
  const yyyy = today.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

const capitalizeString = string => {
  const firstLetter = string.substring(0, 1)
  const restOfString = string.substring(1)
  return `${firstLetter.toUpperCase()}${restOfString}`
}

export {getTodaysDate, capitalizeString}
