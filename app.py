# @author: Ganesh Ravichandran
# @date: 10/20/15
# @description: all Python backend code

from flask import Flask, render_template, url_for, request

import mpld3
import random_walk

app = Flask(__name__)

def get_HTML():
	html = random_walk.main()
	return html

@app.route('/')
def homePage():
	return render_template('index.html', myfunction = get_HTML)

if __name__ == '__main__':
	app.run(debug=True)