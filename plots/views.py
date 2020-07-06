import sys
import os.path
from . import mpl_helper
import scipy.io
import json
from django.shortcuts import render
from django.http import HttpResponse
from matplotlib import pylab
import matplotlib.pyplot as plt
from pylab import *
import PIL, PIL.Image, io

def get(request):

    if request.method == 'GET':
        matplotlib.use('agg')

        (figure, axes) = mpl_helper.make_fig(top_margin=0.6, right_margin=0.8)

        results_path = os.path.join(os.environ['MUSIC_BOX_OUTPUT_DIR'], "MusicBox_output.nc")
        ncf = scipy.io.netcdf_file(results_path)

        time = ncf.variables["time"].data.copy()

        props = request.GET.get('props', None).split(",")
        for prop in props:
            var   = ncf.variables[prop].data.copy()
            units = ncf.variables[prop].units
            axes.plot(time, var, "-", label=prop.replace("_"," "))

        axes.set_xlabel(r"time / h")
        axes.set_ylabel(units.decode('utf-8'))
        axes.legend()
        axes.grid(True)

        # Store image in a string buffer
        buffer = io.BytesIO()
        figure.savefig(buffer, format='png')

        plt.close(figure)

        # Send buffer in a http response the the browser with the mime type image/png set
        return HttpResponse(buffer.getvalue(), content_type="image/png")
    return HttpResponseBadRequest('Bad format for plot request', status=405)
