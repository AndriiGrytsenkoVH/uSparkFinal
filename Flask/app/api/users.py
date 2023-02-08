from flask import request
from app.api import bp
from app.models import User

@bp.route('/users', methods=['GET'])
def get_user():
    return 


@bp.route('/users', methods=['POST'])
def create_user():
    pass

