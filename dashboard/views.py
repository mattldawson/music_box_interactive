from django.shortcuts import render

def run_model(request):
    context = {}
    return render(request, 'dashboard/run_model.html', context)

def species(request):
    context = {}
    return render(request, 'dashboard/species.html', context)

def reactions(request):
    context = {}
    return render(request, 'dashboard/reactions.html', context)

def visualize(request):
    context = {}
    return render(request, 'dashboard/visualize.html', context)
