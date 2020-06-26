from django.urls import path, include 

urlpatterns = [
    path('api/', include('project.api.urls')),
    # path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    # path('api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]







































