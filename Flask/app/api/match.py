from flask import request
# from app.api import bp
from . import api
from app.models import User, Subscription, user_subscriptions
from app import db
from sqlalchemy import func

def common_subscriptions_query(my_id, their_id):

    common_subscriptions = db.session.query(Subscription).join(
        user_subscriptions,
        Subscription.id == user_subscriptions.c.subscription_id
    ).filter(
        user_subscriptions.c.user_id.in_([my_id, their_id])
    ).group_by(
        user_subscriptions.c.subscription_id
    ).having(
        func.count(user_subscriptions.c.user_id.distinct()) == 2
    )

    return common_subscriptions

@api.route('/match/<string:user_id>/scores', methods=['GET'])
def scores(user_id):
    other_users = User.query.filter(User.id != user_id).all()
    result = []
    for user in other_users:
        score = len(common_subscriptions_query(user_id, user.id).all())
        entrie = {
            'user': user.to_dict(),
            'score': score
        }
        result.append(entrie)
    return sorted(result, key=lambda x: x['score'], reverse=True)

@api.route('/match/<string:my_id>/<string:their_id>', methods=['GET'])
def get_common_channels(my_id, their_id):
    subscriptions_list =  common_subscriptions_query(my_id, their_id).all()
    return [x.to_dict() for x in subscriptions_list]