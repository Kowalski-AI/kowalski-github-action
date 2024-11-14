/**
 * The entrypoint for the action.
 */
import { run } from './main'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
run().catch((error: Error) => {
  console.error('Error:', error)
  process.exit(1)
})
