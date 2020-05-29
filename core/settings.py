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
SQLITE = {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}
POSTGRES = {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': 'eleek',
    'USER' : 'jurgeon',
    'PASSWORD' : '69018',
    'HOST' : '127.0.0.1',
    'PORT' : '5432',
}
if config('DB') == 'postgres':
    default = POSTGRES
else:
    default = SQLITE
DATABASES = {
    'default': default,
}



LIQPAY_PUBLIC_KEY = 'sdf'
LIQPAY_PRIVATE_KEY = 'sdf'
LIQPAY_SANDBOX_PUBLIC_KEY = 'sdf'
LIQPAY_SANDBOX_PRIVATE_KEY = 'sdf'

LIQPAY_SANDBOX_MODE = 'sdf'


