import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://bf187558b3ff5e1fb3056d3ae73646f0@o4510984933539840.ingest.de.sentry.io/4510984947892304",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});