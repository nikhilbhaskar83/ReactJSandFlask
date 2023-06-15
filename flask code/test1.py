from flask import Flask, render_template, request, redirect, url_for, flash,session
import os
import json

app = Flask(__name__)
app.secret_key = "Secret Key"
userList = {}

@app.route('/sum', methods = [ 'POST'])
def Sum():
        if request.method == 'POST':
            request_data = request.get_json()
            arr = request_data['data']
            sum = 0
            for a in arr:
                sum = sum + a ;
            return {"sum" : sum};

@app.route('/concat', methods = [ 'POST'])
def Concat():
        if request.method == 'POST':
            request_data = request.get_json()
            arr = request_data['data']
            return {"result" : arr[0]  + arr[1]};


@app.route('/signup', methods = [ 'POST'])
def SignUp():
        if request.method == 'POST':
            request_data = request.get_json()
            userList.update({"userName" :  request_data['username'], "passWord" : request_data['password']})
            return {"result" : "User registration sucess"};

@app.route('/login', methods = [ 'POST'])
def Login():
        if request.method == 'POST':
            request_data = request.get_json()
            print(userList)

            if(userList['userName'] == request_data['username'] and userList['passWord'] ==  request_data['password']):
                return {"result" : "Access Granted"};
            return {"result" : "Access Denied"};




if __name__ == "__main__":
    app.run(debug=True)