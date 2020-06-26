from import_export.resources import ModelResource
from .models import * 

class CertificateResource(ModelResource):
    class Meta:
        model = Certificate
        exclude = []

class PartnerResource(ModelResource):
    class Meta:
        model = Partner
        exclude = []
