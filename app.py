#! /usr/bin/env python3.6

from flask import (Flask,
                   render_template)

from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

@app.route("/")
def showMain():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
