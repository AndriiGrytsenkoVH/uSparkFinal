from flask import Blueprint

api = Blueprint('api', __name__, url_prefix='/api')

# XXX api is loginless for now
from . import subscriptions, users, match, login
