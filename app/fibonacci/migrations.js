async function migration(client) {
  try {
    await client.query(
      `
      CREATE TABLE IF NOT EXISTS fibonacci_log
      (
        request json,
        req_index integer,
        fib_result integer,
        date date,
        created_at timestamp without time zone
      )
      `
    )
    console.log('fibonacci_log table migrated!');
  } catch (error) {
    console.error(`fibonacci_log table migrate error: ${error}`);
  }
}

module.exports = {
  migration
}