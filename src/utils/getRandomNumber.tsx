function getRandomNumber(first: null | number = null): number {
  const numb = Math.ceil(Math.random() * 50)
  if (first === numb) {
    return getRandomNumber(first)
  } else {
    return numb
  }
}

export const getRandomIdNums: () => [number, number] = () => {
  const firstNum = getRandomNumber()
  const secondNum = getRandomNumber(firstNum)
  return [firstNum, secondNum]
}
