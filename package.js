Package.describe({
  name: 'futuredemand:milligram',
  version: '0.0.1',
  summary: 'A fork of Milligram, A minimalist CSS framework.',
  git: 'https://github.com/karimit/milligram.git',
  documentation: 'readme.md',
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles(['dist/milligram.css'], 'client')
})
