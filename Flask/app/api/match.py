from flask import request
from app.api import bp
from app.models import User, Subscription, user_subscriptions
from app import db
from sqlalchemy import func

@bp.route('/match/<str:my_id>/<str:their_id>', methods=['GET'])
def list_common_subscriptions(my_id, their_id):

    # TODO VERIFY !!!
    common_subscriptions = db.session.query(Subscription).join(
        user_subscriptions,
        Subscription.id == user_subscriptions.c.subscription_id
    ).filter(
        user_subscriptions.c.user_id.in_([my_id, their_id])
    ).group_by(
        user_subscriptions.c.subscription_id
    ).having(
        func.count(user_subscriptions.c.user_id.distinct()) == 2
    ).all()

    return { 'common_subscriptions': [sub.to_dict for sub in common_subscriptions]}

