# TODO Remove this file in production
# It's meant for testing
from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"