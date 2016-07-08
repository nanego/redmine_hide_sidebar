class SidebarHookListener < Redmine::Hook::ViewListener
	render_on :view_layouts_base_content, :partial => 'sidebar/hideButton_partial'

  def view_layouts_base_html_head(_context = {})
    stylesheet_link_tag('sidebar_hide', :plugin => 'sidebar_hide', :media => 'all') +
      javascript_include_tag('sidebar_hide', :plugin => 'sidebar_hide')
  end
end
