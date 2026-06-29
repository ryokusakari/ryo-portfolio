# Import requried libraries
import sqlite3
from pathlib import Path
from flask import Flask, jsonify, render_template, request

# Initialise app
app = Flask(__name__)

# Find base and database directory
BASE_DIR = Path(__file__).resolve().parent
DATABASE_PATH = BASE_DIR / "database" / "portfolio.db"

# Create route for homepage and render index.html template
@app.route("/")
def home():
    return render_template("index.html")

# Create route for contact form API
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()
    
    if not name:
        return jsonify({"ok": False, "error": "Please enter your name."}), 400

    if not email:
        return jsonify({"ok": False, "error": "Please enter your email."}), 400

    if not message:
        return jsonify({"ok": False, "error": "Please enter your message."}), 400

    connection = sqlite3.connect(DATABASE_PATH)
    cursor = connection.cursor()

    cursor.execute(
        """ 
        INSERT INTO contact_messages (name, email, message)
        VALUES (?, ?, ?)
        """,
        (name, email, message),
    )

    connection.commit()
    connection.close()

    return jsonify({"ok": True, "message": f"Thanks, {name}. Your message was saved."})

# Run app if script is run directly
if __name__ == "__main__":
    app.run(debug=True)