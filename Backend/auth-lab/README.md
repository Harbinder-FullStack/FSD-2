# Flask Authentication Experiment

## Authentication Methods Covered
1. Basic Authentication
2. Simple Token Authentication
3. JWT Authentication

## Setup

1. Create virtual environment:
   python3 -m venv venv
   source venv/bin/activate

2. Install dependencies:
   pip install -r requirements.txt

3. Run:
   python app.py

Server runs at:
http://localhost:5000

## Test Routes

Basic Auth:
curl -u admin:admin123 http://localhost:5000/basic-protected

Token Auth:
curl -X POST http://localhost:5000/token-login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'

Then:
curl http://localhost:5000/token-protected -H "x-auth-token: <token>"

JWT Auth:
curl -X POST http://localhost:5000/jwt-login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'

Then:
curl http://localhost:5000/jwt-protected -H "Authorization: Bearer <jwt_token>"
