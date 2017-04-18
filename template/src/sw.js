// Register serviceWorker in production
if (process.env.NODE_ENV === 'production' &&
  'serviceWorker' in navigator
) {
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
}
