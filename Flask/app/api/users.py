from flask import request, redirect, url_for
# from app.api import bp
from app.models import User
from app import db
from . import api

# GET user data by their id
# id specified in url
# returns 404 if no user with this id is found
# no json body required
@api.route('/users/<string:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return user.to_dict(), 200

# PUT (updates) user info by their id
# id specified in url
# returns 404 if no user with this id found
# requires json body
# { username: --optional,
#  first_name: --optional,
#  lst_name: --optional,
#  about_me: -- optional}
@api.route('/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json() or {}
    user.from_dict(data)
    return user.to_dict(), 200

# TODO
# PUT (update) users subscriptions
@api.route('/users/<string:user_id>/subs', methods=['PUT'])
def update_users_subscriptions(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json() or {}
    # DELETE OLD
    user.subscriptions = []
    # ADD NEW
    for item in data.items:
        # TODO verify the item.snippet.resourceId.chanelId
        # see if it works correctly
        # it must be a chanel id
        user.subscriptions.append(item.snippet.resourceId.chanelId)
    db.session.commit()

# POST new user
# returns 400 if json body is wrong
# requires json body
# { id: --REQUIRED
#  username: --optional,
#  first_name: --optional,
#  lst_name: --optional,
#  about_me: -- optional}
# returns 201 if successful
# @api.route('/users', methods=['POST'])
# def create_user():
#      # Check to see that the request sent a request body that is JSON
#     if not request.is_json:
#         return {'error': 'Your request content-type must be application/json'}, 400
#     # Get the data from the request body
#     data = request.json
#     # Validate the incoming data
#     # XXX may be add more required fields
#     for field in ['id']:
#         if field not in data:
#             # If the field is not in the request body, throw an error saying they are missing that field
#             return {'error': f"{field} must be in request body"}, 400
    
#     # pull the fields from the request data
#     id = data.get('id')
#     username = data.get('username')
#     first_name = data.get('first_name')
#     last_name =  data.get('last_name')
#     about_me = data.get('about_me')
 

#     # Query our user table to see if there are any users with either username or email from form
#     check_user = User.query.filter( User.id == id ).first()
#     # If the query comes back with any results
#     if check_user:
#         # TODO may be a redirect to PUT instead of 400
#         return {'error': 'A user with id already exists.'}, 400

#     # Create a new User instance with data from request
#     new_user = User(id=id, username=username, first_name=first_name, last_name=last_name, about_me=about_me)
#     print('='*50)
#     # Return the new post as a JSON response
#     return new_user.to_dict(), 201

