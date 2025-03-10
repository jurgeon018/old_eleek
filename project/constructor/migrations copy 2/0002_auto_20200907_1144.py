# Generated by Django 3.0.7 on 2020-09-07 11:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sw_catalog', '0004_auto_20200902_1513'),
        ('constructor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='constructorform',
            name='values',
            field=models.ManyToManyField(blank=True, to='constructor.Value', verbose_name='Вибрані елементи'),
        ),
        migrations.AddField(
            model_name='framecolor',
            name='frame',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='constructor.FrameType', verbose_name='Рама'),
        ),
        migrations.AddField(
            model_name='frametype',
            name='items',
            field=models.ManyToManyField(blank=True, null=True, to='sw_catalog.Item', verbose_name='Товар'),
        ),
        migrations.AddField(
            model_name='parameter',
            name='attr',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='constructor_parameters', to='sw_catalog.Attribute', verbose_name='Атрибут товару'),
        ),
        migrations.AddField(
            model_name='parameter',
            name='feature',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='constructor_features', to='sw_catalog.Feature', verbose_name='Характеристика товару'),
        ),
        migrations.AddField(
            model_name='value',
            name='attr_value',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='constructor_values', to='sw_catalog.AttributeValue', verbose_name='Значення атрибуту товару'),
        ),
        migrations.AddField(
            model_name='value',
            name='value',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='constructor_feature_values', to='sw_catalog.FeatureValue', verbose_name='Значення характеристики товару'),
        ),
        migrations.AlterUniqueTogether(
            name='parameter',
            unique_together={('code', 'tab_group')},
        ),
        migrations.AlterUniqueTogether(
            name='relationship',
            unique_together={('parent', 'children')},
        ),
        migrations.AlterUniqueTogether(
            name='value',
            unique_together={('code', 'parameter')},
        ),
    ]



