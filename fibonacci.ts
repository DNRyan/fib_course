export function fibonacci(n: number) {
  if (n < 2) {
    return n
  }

  let fib_minus_one = 1
  let fib_minus_two = 0
  let fib = 1

  for (let i = 2; i <=n; i++) {
    const result = fib_minus_one + fib_minus_two
    fib_minus_two = fib_minus_one
    fib_minus_one = fib
    fib = result
  }

  return fib
}
