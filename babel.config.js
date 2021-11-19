// https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/next#fullcalendar-nextjs-example

module.exports = {
  presets: ['next/babel'],
  plugins: ['module-resolver'],
  overrides: [
    {
      include: ['./node_modules'],
      plugins: [
        [
          'babel-plugin-transform-require-ignore',
          {
            extensions: ['.css']
          }
        ]
      ]
    }
  ]
}
