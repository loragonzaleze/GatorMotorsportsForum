from flask_restful import Api, Resource, reqparse

class TestApiHandler(Resource):
    def get(self):
        return {
            'message' : 'THis shoudl display new values'
        }