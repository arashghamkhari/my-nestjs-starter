import * as Sentry from '@sentry/nestjs';
import { captureConsoleIntegration } from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { SentryConfig } from './configs/sentry.config.js';

const sentryConfig = new SentryConfig();

Sentry.init({
  dsn: sentryConfig.DSN,
  integrations: [nodeProfilingIntegration(), captureConsoleIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
  beforeSend: (event, hint) => {
    if (!sentryConfig.DSN) {
      if (hint.syntheticException) console.error(hint.syntheticException);
      if (hint.originalException) console.error(hint.originalException);
      return null; // this drops the event and nothing will be sent to sentry
    }
    return event;
  },
});
