import os
from flask import Flask,render_template, request,json,jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Welcome to Python Flask!'

@app.route('/signUp')
def signUp():
    return render_template('signUp.html')

@app.route('/signUpUser', methods=['POST'])
def signUpUser():
    user =  request.form['username'];
    password = request.form['password'];
    return json.dumps({'status':'OK','user':user,'pass':password});


@app.route('/signUpUser2', methods=['POST'])
def signUpUser2():
    user =  request.form['username'];
    password = request.form['password'];
    return jsonify({'status':'OK','user':user,'pass':password});

if __name__=="__main__":
    app.run()
