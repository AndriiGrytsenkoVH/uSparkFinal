
from flask import request, redirect, url_for
# from app.api import bp
from app.models import Subscription
from . import api

# GET chanel data by their id
# id specified in url
# returns 404 if no chanel with this id is found
# no json body required
@api.route('/subscriptions/<string:chanel_id>', methods=['GET'])
def get_chanel(chanel_id):
    chanel = Subscription.query.get_or_404(chanel_id)
    return chanel.to_dict(), 200

# PUT (updates) chanel info by their id
# id specified in url
# returns 404 if no chanel with this id is found
# requires json body
# TODO change so it would work with a snippet
# { chanel_name: --optional,
#  thumbnail: --optional}
@api.route('/subscriptions/<string:chanel_id>', methods=['PUT'])
def update_chanel(chanel_id):
    chanel = Subscription.query.get_or_404(chanel_id)
    data = request.get_json() or {}
    chanel.from_dict(data)
    return chanel.to_dict(), 200

@api.route('/subscriptions/update', methods=['PUT'])
def update_chanels():
    data = request.get_json() or {}
    for item in data.items:
        # TODO verify data extraction
        id = item.snippet.resourceId.chanelId
        chanel_name = item.snippet.title
        thumbnail = item.snippet.thumbnail
        chanel = Subscription.query.filter( Subscription.id == id ).first()
        if chanel:
            chanel.form_dict(**{'chanel_name': chanel_name, 'thumbnail': thumbnail})
        else:
            Subscription(id = id, chanel_name = chanel_name, thumbnail = thumbnail)