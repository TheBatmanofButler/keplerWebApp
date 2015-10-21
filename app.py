# @author: Ganesh Ravichandran
# @date: 10/20/15
# @description: all Python backend code

from flask import Flask, render_template, url_for, request
import re

app = Flask(__name__)

KOInumberList = open('static/other/KOInumberList.txt', 'r').read().split()

@app.route('/', methods=['GET', 'POST'])
def initPage():
	try: KOInumber = request.form['KOIinput']
	except: KOInumber = ''
	else:
		return render_template('index.html', KOInumberList=KOInumberList, KOInumber=KOInumber)

# def imageAddress(imageName):
# 	KOInumber = request.form['KOIinput']
# 	try: KOInumber = request.form['KOIinput']
# 	except: return 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
# 	else:
# 		return 'http://tigress-web.princeton.edu/~tmorton/koi-fpp/K' + KOInumber + '/' + imageName

# app.jinja_env.filters['imageAddress'] = imageAddress

if __name__ == "__main__":
	app.run(debug=True)



# other, non-flask functions
def KOI_scraper(sourceCodeFilePath, newFilePath):

	searchText = 'http://tigress-web.princeton.edu/~tmorton/koi-fpp/K'
	sourceCode = open(sourceCodeFilePath, 'r').read()

	newFile = open(newFilePath, 'w+')

	for i in re.finditer(searchText, sourceCode):
		ind = i.start()
		newFile.write(sourceCode[ind+len(searchText)-1:ind+len(searchText)+8] + '\n')

	newFile.close()