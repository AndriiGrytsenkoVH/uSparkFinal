from app import db

# TODO in production, decide which columns need to have index
# the ones that are queried by need index
# for now, all af them have index

user_subscriptions = db.Table('user_subscriptions',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    # XXX When changing subscription id type, change here accordingly
    db.Column('subscription_id', db.String(64), db.ForeignKey('subscription.id'), primary_key=True)

)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    about_me = db.Column(db.String(64))


    # lazy = True, to query for subscriptions only when needed
    # TODO check if the statement above is true
    subscriptions = db.relationship('Subscription', secondary=user_subscriptions, lazy=True, backref=db.backref('subscribers', lazy=True))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name
        }

    def from_dict(self, data):
        for field in ['username', 'first_name', 'last_name', 'about_me']:
            if field in data:
                setattr(self, field, data[field])
        db.session.commit()

class Subscription(db.Model):
    # This id is the channel id provided by youtube api
    # TODO check if string 64 is sufficient
    id = db.Column(db.String(64), primary_key=True)
    chanel_name = db.Column(db.String(64), index=True)
    thumbnail = db.Column(db.String(64), index=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return '<Subscription {}>'.format(self.chanel_name)
    
    def to_dict(self):
        return {
            'id': self.id,
            'chanel_name': self.chanel_name,
            'thumbnail': self.thumbnail
        }
    
    def from_dict(self, data):
        for field in ['chanel_name', 'thumbnail']:
            if field in data:
                setattr(self, field, data[field])
        db.session.commit()
                