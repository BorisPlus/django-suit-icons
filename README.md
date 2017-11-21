Django Suit Icons
=================

Suitable list of available icons for [Django Suit](http://djangosuit.com/):

https://deniskrumko.github.io/django-suit-icons/

---

## Examples of use

#### 1. Django Suit config

```python
# settings.py

SUIT_CONFIG = {
    'ADMIN_NAME': _('My Awesome Django App'),
    "MENU": (
        'sites',
        {
            'app': 'auth',
            'icon': 'icon-user',  # <- here
            'models': ('users.User', 'auth.group',)
        },
    )
}
```

#### 2. Django templates

```html
<!-- templates/admin/base_site.html -->

{% block footer_links %}
 <a href="https://www.github.com/" class="icon">
   <!-- Here -->
   <i class="icon-home"></i>
   github.com
 </a>
{% endblock %}

```
