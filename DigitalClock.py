from flask import Flask ,render_template, jsonify
import time
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
     return render_template('home.html')

@app.route('/gettime')
def gettime():
    # time.sleep(1)
    now = time.localtime()
    formatted_time = {
        "hour": time.strftime("%I", now),
        "min": time.strftime("%M", now),
        "sec": time.strftime("%S", now),
        "am_pm": time.strftime("%p", now)
    }

    return jsonify(formatted_time)
    

if __name__ == '__main__':
    app.run(debug=True)