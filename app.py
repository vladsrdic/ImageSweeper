from flask import Flask

app = Flask(__name__)


@app.route("/")
def sweeper():
    return "<p>Hello, World! A second time!</p>"
