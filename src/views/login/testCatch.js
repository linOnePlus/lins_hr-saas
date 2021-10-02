function getError() {
  return new Error('hello')
}

(function testCatch() {
  try {
    throw getError()
  } catch (error) {
    console.log(error)
  }
})()

async function testPromise() {
  try {
    await Promise.reject(new Error('sb'))
  } catch (error) {
    console.log(error)
  }
}

testPromise()
