from flask import Flask, request, render_template, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bookings.db'
db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone_number = request.form['phone_number']

        booking = Booking(name=name, email=email, phone_number=phone_number)
        db.session.add(booking)
        db.session.commit()

        return "Thank you for booking a meeting, we will get back to you shortly"

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
