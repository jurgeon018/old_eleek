from django.template.defaulttags import register


@register.filter
def get_item(dictionary, key):
    """
    {{ mydict|get_item:item.NAME }}
    """
    return dictionary.get(key)

