module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'
  concatOptions =
    process:
      data: pkg

  shellOptions =
    stdout:      true
    stderr:      true
    failOnError: true

  # Project configuration.
  grunt.initConfig
    pkg: pkg
    concat:
      style:
        options: concatOptions
        files:
          'tmp/style.css': 'src/style.js' 
      userscript:
        options: concatOptions
        files:
          'builds/<%= pkg.name %>.meta.js': 'src/meta/metadata.js'
          'builds/<%= pkg.name %>.user.js': [
            'src/meta/botproc.js'
            'src/meta/metadata.js'
            'src/script.js'
          ]
      crx:
        options: concatOptions
        files:
          'builds/updates.xml': 'src/meta/updates.xml'
          'builds/crx/manifest.json': 'src/meta/manifest.json'
          'builds/crx/script.js': [
            'src/meta/botproc.js'
            'src/script.js'
          ]

    cssmin:
      minify:
        src: 'tmp/style.css'
        dest: 'tmp/style.min.css'

    shell:
      commit:
        options: shellOptions
        command: [
          'git checkout <%= pkg.meta.mainBranch %>',
          'git commit -am "Release <%= pkg.meta.name %> v<%= pkg.version %>."',
          'git tag -a <%= pkg.version %> -m "<%= pkg.meta.name %> v<%= pkg.version %>."',
          'git tag -af stable -m "<%= pkg.meta.name %> v<%= pkg.version %>."'
        ].join(' && ')
        stdout: true

      push:
        options: shellOptions
        command: 'git push origin --tags -f && git push origin --all' 

    compress:
      crx:
        options:
          archive: 'builds/OneeChan-Chrome.zip'
          level: 9
          pretty: true
        expand: true
        cwd: 'builds/crx/'
        src: '**'

    clean:
      tmp:        'tmp/'

  grunt.loadNpmTasks 'grunt-bump'
   # grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-contrib-clean'
   # grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compress'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'

  grunt.registerTask 'default', [
    'build'
  ]

  grunt.registerTask 'build', [
    'concat:style'
    'cssmin:minify'
    'concat:crx'
    'compress:crx'
    'concat:userscript'
    'clean:tmp'
  ]

  grunt.registerTask 'release', [
    'default'
    'compress:crx'
    'shell:commit'
    'shell:push'
  ]

  grunt.registerTask 'patch',   [
    'bump-only'
    'reloadPkg'
    'updcl:3'
  ]

  grunt.registerTask 'minor',   [
    'bump-only:minor'
    'reloadPkg'
    'updcl:2'
  ]

  grunt.registerTask 'major',   [
    'bump-only:major'
    'reloadPkg'
    'updcl:1'
  ]

  grunt.registerTask 'reloadPkg', 'Reload the package', ->
    # Update the `pkg` object with the new version.
    pkg = grunt.file.readJSON('package.json')
    grunt.config.data.pkg = concatOptions.process.data = pkg
    grunt.log.ok('pkg reloaded.')

  grunt.registerTask 'updcl',   'Update the changelog', (i) ->
    # i is the number of #s for markdown.
    version = []
    version.length = +i + 1
    version = version.join('#') + ' v' + pkg.version + '\n*' + grunt.template.today('yyyy-mm-dd') + '*\n'
    grunt.file.write 'CHANGELOG.md', version + '\n' + grunt.file.read('CHANGELOG.md')
    grunt.log.ok     'Changelog updated for v' + pkg.version + '.'
