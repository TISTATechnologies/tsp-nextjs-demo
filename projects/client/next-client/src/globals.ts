/**
 * Declare variables that are populated at Build-time
 *
 * Next.js will replace process.env.customKey with 'my-value' at build time.
 * Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.
 *
 * The key "" under "env" in next.config.js is not allowed.
 * Why This Error Occurred
 * Next.js configures internal variables for replacement itself.
 * These start with __ or NODE_, for this reason they are not allowed as values for env in next.config.js
 */
const __SYS_BACKEND_HOST_URI__ = process.env.SYS_BACKEND_HOST_URI;

/**
 * Define user friend variables for consumption
 */
const BACKEND_HOST_URI = __SYS_BACKEND_HOST_URI__;

export { BACKEND_HOST_URI };
