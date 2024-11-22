# from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# from .models import Faculty
# from django.http import HttpResponse
# import json
# from django.shortcuts import render, redirect
# from .forms import FacultyForm


# # Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
def homepage(request):
    return HttpResponse("<h1>Welcome to the Online Exam System</h1>")

# @csrf_exempt  # Temporarily disable CSRF for this view if you're not handling CSRF
# # def add_faculty(request):
# #     if request.method == 'POST':
# #         try:
# #             data = json.loads(request.body)
# #             name = data.get('name')
# #             email = data.get('email')
# #             department = data.get('department')

# #             # Create a new Faculty object and save it to the database
# #             faculty = Faculty(name=name, email=email, department=department)
# #             faculty.save()

# #             return JsonResponse({"message": "Faculty added successfully!"}, status=200)

# #         except Exception as e:
# #             return JsonResponse({"error": str(e)}, status=400)

# #     return JsonResponse({"error": "Invalid method. Use POST."}, status=405)


# #view to faculty list
# def faculty_list(request):
#     faculties = Faculty.objects.all()  # Retrieve all faculties from the database
#     return render(request, 'faculty_list.html', {'faculties': faculties})



# #removing faculty
# def remove_faculty(request, id):
#     try:
#         faculty = Faculty.objects.get(id=id)  # Retrieve the faculty by ID
#         faculty.delete()  # Delete the faculty from the database
#         return redirect('faculty_list')  # Redirect back to the faculty list page
#     except Faculty.DoesNotExist:
#         return redirect('faculty_list')  # In case the faculty does not exist
# #adding faculty
# from django.shortcuts import render, redirect
# from .forms import FacultyForm

# def add_faculty(request):
#     if request.method == 'POST':
#         form = FacultyForm(request.POST)
#         if form.is_valid():
#             form.save()  # Save the new faculty to the database
#             return redirect('faculty_list')  # Redirect to the faculty list page
#     else:
#         form = FacultyForm()
    
#     return render(request, 'add_faculty.html', {'form': form})
#after getting loading list 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from .models import Faculty
import json

@csrf_exempt
def faculty_list(request):
    if request.method == "GET":
        faculties = Faculty.objects.all().values('id', 'name', 'email', 'department')
        return JsonResponse(list(faculties), safe=False)
    return JsonResponse({"error": "GET method required"}, status=400)

@csrf_exempt
def add_faculty(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            faculty = Faculty.objects.create(
                name=data.get("name"),
                email=data.get("email"),
                department=data.get("department"),
            )
            return JsonResponse({"message": "Faculty added successfully!", "id": faculty.id}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "POST method required"}, status=400)

@csrf_exempt
def remove_faculty(request, id):
    if request.method == "DELETE":
        try:
            faculty = Faculty.objects.get(id=id)
            faculty.delete()
            return JsonResponse({"message": "Faculty removed successfully!"})
        except ObjectDoesNotExist:
            return JsonResponse({"error": "Faculty not found"}, status=404)
    return JsonResponse({"error": "DELETE method required"}, status=400)
