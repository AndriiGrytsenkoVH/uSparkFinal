import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    # TODO Confirm if SECRET_KEY is needed at all.
    # it's used for CSRF attacks on forms
    # since this flask backend does not use forms, may be need to delete this in production
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'

    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False