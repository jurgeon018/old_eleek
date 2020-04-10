from box.core.default_settings import * 

INSTALLED_APPS +=[
    'project'
]
TEMPLATES[0]['OPTIONS']['context_processors'].extend([
    'project.context_processors.context',
])
DJANGO_DEBUG_TOOLBAR_ON = False 
MIDDLEWARE.extend([
    # 'project.middlewares.Middleware',
])
AUTH_USER_MODEL = 'project.ProjectUser'
STATIC_SITEMAP_PAGES = [
    # 'index',
    # 'contact',
    # 'blog',
    # 'about',
]
PROJECT_CORE_MULTILINGUAL_URLS = [
    'project.urls',
]
PROJECT_CORE_URLS = [
    'project.api.urls',
]
ROOT_URLCONF     = 'box.core.urls'
WSGI_APPLICATION = 'core.wsgi.application'

