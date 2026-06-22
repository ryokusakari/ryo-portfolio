from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name", "").strip()
    
    if not name:
        return jsonify({"ok": False, "error": "Please enter your name."}), 400

    return jsonify({"ok": True, "message": f"Thanks, {name}. Flask received your message."})

if __name__ == "__main__":
    app.run(debug=True)