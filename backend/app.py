from flask import Flask, send_from_directory, render_template
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from api.TestApiHandler import TestApiHandler
import json

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

CORS(app)
api = Api(app)

@app.route('/login')
def login():
    data = {
        "type" : "Login API",
        "message" : "This will be the Login API",
        "success" : True
    }
    res = app.response_class(
        response = json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return res


api.add_resource(TestApiHandler, '/flask/helloworld')

