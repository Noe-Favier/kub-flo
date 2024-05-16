from flask import Flask
import logging

# pip install Flask

# LOG FILE #
logging.basicConfig(filename='/var/order.log',level=logging.DEBUG)
app = Flask(__name__)
# -------- #

@app.route('/', methods=['GET'])
def hello_world():
    return '{"message": "Hello from orderModule"}'

if __name__ == '__main__':
    app.run(debug=True)