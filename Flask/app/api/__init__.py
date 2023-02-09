from flask import Blueprint

bp = Blueprint('api', __name__, url_prefix='/api')

# XXX api is loginless for now
from app.api import subscriptions, users