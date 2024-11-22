from django import forms
from .models import Faculty

class FacultyForm(forms.ModelForm):
    class Meta:
        model = Faculty
        fields = ['name', 'email', 'department']  # Include the necessary fields for your model
