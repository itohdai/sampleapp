from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello world!!! 20210304"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
    
