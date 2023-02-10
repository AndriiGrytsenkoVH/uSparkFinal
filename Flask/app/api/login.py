from flask import request
from app.models import User, Subscription, user_subscriptions
from app import db
from . import api
import requests

def youtube_api_user_call(token):
    headers = { 'Authorization': f'Bearer {token}'}
    payload = {
        'mine': 'true',
        'part': 'snippet,id',
        'fields': ','.join([
            'items/id',
            'items/snippet/title',
            'items/snippet/thumbnails/default/url'
        ])
    }
    r = requests.get('https://www.googleapis.com/youtube/v3/channels', params= payload, headers= headers)
    return r

def user_dict(youtube_user_data):
    '''
    Constructs a dictionary usable to create or update user from youtube api response json
    '''
    return {
        'id': youtube_user_data['items'][0]['id'],
        'username': youtube_user_data['items'][0]['snippet']['title'],
        'thumbnail': youtube_user_data['items'][0]['snippet']['thumbnails']['default']['url']
    }

def update_user_table(user_data):
    user_id = user_data['id']
    check_user = User.query.filter( User.id == user_id).first()
    if check_user:
        check_user.from_dict(user_data)
        print({ 'success': f'Updated User {user_data["username"]}'})
    else:
        new_user = User(**user_data)
        print({
            'success': f'Created new User',
            'User': new_user.to_dict()
            })

def youtube_api_channel_list_call(token, nexPageToken):
    headers = { 'Authorization': f'Bearer {token}'}
    payload = {
        'mine': 'true',
        'part': 'snippet,id',
        'maxResults': '50',
        'pageToken': nexPageToken,
        'fields': ','.join([
            'nextPageToken',
            'items/snippet/title',
            'items/snippet/resourceId/channelId',
            'items/snippet/thumbnails/default/url'
        ])
    }

    r = requests.get('https://www.googleapis.com/youtube/v3/subscriptions', params= payload, headers= headers)
    return r

def channel_dict(youtube_channel_data):
    return {
        'id': youtube_channel_data['snippet']['resourceId']['channelId'],
        'chanel_name': youtube_channel_data['snippet']['title'],
        'thumbnail': youtube_channel_data['snippet']['thumbnails']['default']['url']
    }
    
def update_subscription_table(channel_data):
    channel_id = channel_data['id']
    check_channel = Subscription.query.filter( Subscription.id == channel_id).first()
    if check_channel:
        check_channel.from_dict(channel_data)
        print({ 'success': f'Updated Subscription {channel_data["chanel_name"]}'})
        return check_channel
    else:
        new_channel = Subscription(**channel_data)
        print({
            'success': f'Created new Subscription',
            'Subscription': new_channel.to_dict()
            })
        return new_channel

@api.route('/login', methods=['PUT'])
def login():
    token = request.get_json()['accessToken']

    # fetch user form youtube

    user_response = youtube_api_user_call(token)
    if not user_response.ok:
        return { 'youtube_error': user_response.json() }, 500
    user_data = user_dict(user_response.json())
    update_user_table(user_data)

    current_user_id = user_data['id']
    current_user = User.query.filter( User.id == current_user_id).first()

    current_user.subscriptions = []

    # fetch channels from youtube
    nextPageToken = ''
    while nextPageToken != None:
        channel_response = youtube_api_channel_list_call(token, nextPageToken)
        if not channel_response.ok:
            return { 'youtube_error': user_response.json() }, 500
        
        for item in channel_response.json()['items']:
            channel_data = channel_dict(item)
            new_subscription = update_subscription_table(channel_data)
            current_user.subscriptions.append(new_subscription)
            db.session.commit()
            print(f'APPENDED {new_subscription.chanel_name}')

        nextPageToken = channel_response.json().get('nextPageToken')
        
    

    return { 'success': 'login works!!!'}, 200


    # try creating new user in db
    # fetch subs from youtube
    # update subs
    # update aux