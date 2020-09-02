priority_third_party = [
    'corsheaders',
    'box.apps.sw_admin',  
    'admin_tools', 'admin_tools.theming', 'admin_tools.menu', 'admin_tools.dashboard',
    'dal',
    'dal_select2',
    'admin_auto_filters',
    'modeltranslation',
]
django_contrib = [
    'django.contrib.auth',
    'django.contrib.sites',
    'django.contrib.admin',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.redirects',
    'django.contrib.flatpages',
    'django.contrib.sitemaps',
]
third_party = [
    "mptt",
    "crispy_forms",

    "tinymce",
    'ckeditor',
    'ckeditor_uploader',
    "froala_editor",
    'django_summernote',
    # 'django_markdown',
    'markdownx',


    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',


    'import_export',
    'rosetta',
    'colorfield',
    'adminsortable2',
    
    "rest_framework",
    'rest_framework.authtoken',
    # "djoser",

    "rangefilter",
    'debug_toolbar',
    'nested_admin',
    'easy_thumbnails',
    'filer',
]
box_core = [
    'box.core',
    'box.core.sw_global_config',
    'box.core.sw_solo',
    'box.core.sw_watermarker',
    'box.core.sw_model_search',
    'box.core.sw_currency',
    'box.core.sw_content',
    'box.core.sw_contact_form',
    'box.core.sw_auth',
]
box_delivery = [
    'box.apps.sw_delivery',
    'box.apps.sw_delivery.sw_novaposhta',
    'box.apps.sw_delivery.sw_delivery_auto',
    'box.apps.sw_delivery.sw_sat',
]
box_shop = [
    'box.apps.sw_shop',      # !! не забирай це, бо тоді з адмінки пропадуть блочки з django-admin-tools
    'box.apps.sw_shop.sw_catalog',
    'box.apps.sw_shop.sw_order',
    'box.apps.sw_shop.sw_cart',
    'box.apps.sw_shop.sw_customer',
]
box_payment = [
    'box.apps.sw_payment',   # !! не забирай це, бо тоді з адмінки пропадуть блочки з django-admin-tools
    'box.apps.sw_payment.liqpay',
    'box.apps.sw_payment.wayforpay',
    'box.apps.sw_payment.interkassa',
]
box_blog = [
    'box.apps.sw_blog',
]
INSTALLED_APPS  = [
    *priority_third_party,
    *django_contrib,
    *third_party,
    *box_core,
    *box_delivery,
    *box_shop,
    *box_payment,
    *box_blog,
]

