const repo = require("./repository");
const redis = require("redis");

async function getFibonacciIdx(req, res) {
  const { index } = req.params;
  let client = redis.createClient(process.env.REDIS_PORT);

  client.on("error", (error) => {
    console.error(`Redis error : ${error}`);
  });

  let config = {
    baseUrl: `${req.baseUrl.toString()}`,
    originalUrl: `${req.originalUrl.toString()}`,
    params_idx: `${JSON.stringify(req.params.index)}`,
  };
  try {
    let result = fibonacci(index);

    client.setex("fibIndex", 3600, result);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
}

function fibonacci(index) {
  // if (index < 2) {
  //   return index
  // }
  // return fibonacci(index - 1) + fibonacci(index - 2)

  let firstVal = 0;
  let secondVal = 1;

  let sum = 0;

  for (let i = 2; i <= index; i++) {
    sum = firstVal + secondVal;

    firstVal = secondVal;

    secondVal = sum;
  }

  const result = BigInt(index ? secondVal : firstVal).toString()

  return result;

}

module.exports = {
  getFibonacciIdx,
};
