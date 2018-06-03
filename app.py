#! /usr/bin/env python3.5

from flask import (Flask,
                   render_template)

from flask_restful import Api

from flask_jwt import JWT

from security import authenticate, identity
from resources.user import UserRegister
from resources.item import Item, ItemList

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'blah'
api = Api(app)

# create database tables
@app.before_first_request
def create_table():
    db.create_all()


jwt = JWT(app, authenticate, identity)  # /auth

api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')
api.add_resource(UserRegister, '/register')


@app.route("/")
def showMain():
    return render_template('main.html')


if __name__ == '__main__':
    from db import db  # prevent circular imports
    db.init_app(app)
    app.run(port=5000, debug=True)
