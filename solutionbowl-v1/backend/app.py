from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Allows your HTML page to call this API from anywhere

@app.route('/api/submit', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()
        
        # Print everything nicely in terminal
        print("\n" + "="*50)
        print(f"🚀 NEW APP BRIEF RECEIVED - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("="*50)
        print(f"Name       : {data.get('name')}")
        print(f"Email      : {data.get('email')}")
        print(f"Phone      : {data.get('phone')}")
        print(f"Company    : {data.get('company')}")
        print(f"Platform   : {data.get('platform')}")
        print(f"Budget     : {data.get('budget')}")
        print(f"Timeline   : {data.get('timeline')}")
        print(f"Designs    : {data.get('designs')}")
        print(f"Source     : {data.get('source')}")
        print(f"Brief      :\n{data.get('brief')}")
        print("="*50)

        # TODO: You can add email sending here later (see below)

        return jsonify({
            "status": "success",
            "message": "Brief received! We'll get back to you within 24 hours."
        }), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)