export default function two_crystal_balls(breaks: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length))

  let i = jumpAmount

  // Jump by sqrt of n
  for (; i <= breaks.length; i += jumpAmount) {
    // exit the loop if the ball breaks (if value is true)
    if (breaks[i]) {
      break
    }
  }

  // jump back the jumpAmount to the last known false
  i -= jumpAmount

  // Walk the sqrt of N to find the first true value
  for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}
