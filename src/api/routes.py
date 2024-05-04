"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS 

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/signup', methods=['POST'])
def handle_signup():
    request_body = request.get_json()
    print(request_body)
    email = request_body.get('email')
    password = request_body.get('password')
  
    user = User(email=email, password=password)
    db.session.add(user)
    db.session.commit()
    reponse_body = {
        'msg': 'User created successfully',
        'user': user.serialize()
    }


    return jsonify(reponse_body), 200
