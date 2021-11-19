const withTM = require('next-transpile-modules')([
  '@fullcalendar/react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid'
])

module.exports = withTM({
  reactStrictMode: true,
})