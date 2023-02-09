
from flask import request, redirect, url_for
from app.api import bp
from app.models import Subscription


# GET chanel data by their id
# id specified in url
# returns 404 if no chanel with this id is found
# no json body required
@bp.route('/subscriptions/<str:chanel_id>', methods=['GET'])
def get_chanel(chanel_id):
    chanel = Subscription.query.get_or_404(chanel_id)
    return chanel.to_dict(), 200

# PUT (updates) chanel info by their id
# id specified in url
# returns 404 if no chanel with this id is found
# requires json body
# { chanel_name: --optional,
#  thumbnail: --optional}
@bp.route('/subscriptions/<str:chanel_id>', methods=['PUT'])
def update_chanel(chanel_id):
    chanel = Subscription.query.get_or_404(chanel_id)
    data = request.get_json() or {}
    chanel.from_dict(data)
    return chanel.to_dict(), 200