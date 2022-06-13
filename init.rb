# encoding: utf-8
require File.expand_path('lib/sidebar_hook_listener', __dir__)

Redmine::Plugin.register :redmine_hide_sidebar do
  name 'Sidebar Hide Plugin'
  author 'Berk Demirkır'
  description 'This plugin provides ability to hide sidebar'
  version '4.0.0'
  url 'https://github.com/nanego/redmine_hide_sidebar'
  author_url 'https://github.com/nanego'
end
