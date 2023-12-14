config.require_master_key = true
config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?
config.assets.compile = false
config.assets.js_compressor = :uglifier
config.assets.css_compressor = :sass
config.assets.digest = true
