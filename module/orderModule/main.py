from flask import Flask
# pip install Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return '{"message": "Hello from orderModule"}'

if __name__ == '__main__':
    app.run(debug=True)