# encoding: utf-8
require_dependency 'sidebar_hook_listener'

Redmine::Plugin.register :sidebar_hide do
  name 'Sidebar Hide Plugin'
  author 'Berk Demirkır'
  description 'This plugin provides ability to hide sidebar'
  version '0.0.8'
  url 'https://github.com/bdemirkir/sidebar_hide'
  author_url 'https://github.com/bdemirkir'
end
