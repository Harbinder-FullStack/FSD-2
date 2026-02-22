# from flask import Flask, app, request, jsonify
# from auth_routes import app as auth_app

from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
import base64

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret-key"

jwt = JWTManager(app)

# ================================
# In-memory user store
# ================================
users = {
    "admin": {
        "password": "admin123",
        "role": "admin"
    },
    "john": {
        "password": "john123",
        "role": "user"
    }
}

# ================================
# 1. BASIC AUTHENTICATION
# ================================
@app.route("/basic-protected")
def basic_protected():
    auth = request.authorization

    if not auth:
        return jsonify({"error": "Missing Basic Auth"}), 401

    user = users.get(auth.username)

    if user and user["password"] == auth.password:
        return jsonify({"message": f"Basic Auth Success. Welcome {auth.username}!"})

    return jsonify({"error": "Invalid credentials"}), 401


# ================================
# 2. SIMPLE TOKEN AUTHENTICATION
# ================================

# Generate simple token (not JWT)
@app.route("/token-login", methods=["POST"])
def token_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:
        token = base64.b64encode(username.encode()).decode()
        return jsonify({"token": token})

    return jsonify({"error": "Invalid credentials"}), 401


@app.route("/token-protected")
def token_protected():
    token = request.headers.get("x-auth-token")

    if not token:
        return jsonify({"error": "Missing Token"}), 401

    try:
        username = base64.b64decode(token).decode()
        if username in users:
            return jsonify({"message": f"Token Auth Success. Welcome {username}!"})
    except:
        pass

    return jsonify({"error": "Invalid Token"}), 401


# ================================
# 3. JWT AUTHENTICATION
# ================================
# Explain JWT login and protected routes, including how to use the JWT token in the Authorization header.   
# JWT tokens are sent in the Authorization header as "Bearer <token>"

# Example: curl -H "Authorization: Bearer <token>" http://localhost:5000/jwt-protected

# The jwt_required() decorator ensures that the route is protected and can only be accessed with a valid JWT token.

# The JWT token is generated using the create_access_token() function, which takes the user's identity (in this case, the username) as an argument.
# This token can then be used to access protected routes that require authentication.

# The get_jwt_identity() function retrieves the identity of the user from the JWT token,
# which can be used to personalize responses or perform further authorization checks.

# The JWT token is a secure way to authenticate users and can include additional claims or information as needed.
# JWT tokens are stateless and can be easily verified without needing to query a database, making them efficient for authentication in web applications.
# JWT tokens can also have an expiration time, after which they will no longer be valid, enhancing security by limiting the window of opportunity for token misuse.
# Overall, JWT authentication provides a robust and scalable solution for securing web applications and APIs.
# Parts of JWT tokens include the header, payload, and signature, which together ensure the integrity and authenticity of the token.
# JWT tokens can be stored on the client side (e.g., in localStorage or cookies) and sent with each request to access protected resources, allowing for a seamless user experience while maintaining security.
# JWT tokens can also be refreshed using refresh tokens, allowing users to maintain their session without needing to log in again, while still ensuring that access tokens have a limited lifespan for security purposes.
    
@app.route("/jwt-login", methods=["POST"])
def jwt_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:
        token = create_access_token(identity=username)
        return jsonify({"access_token": token})

    return jsonify({"error": "Invalid credentials"}), 401


@app.route("/jwt-protected")
@jwt_required()
def jwt_protected():
    current_user = get_jwt_identity()
    return jsonify({"message": f"JWT Auth Success. Welcome {current_user}!"})



# ================================
# ROOT ROUTE
# ================================
@app.route("/")
def home():
    return jsonify({
        "message": "Authentication Experiment Running",
        "routes": [
            "/basic-protected (Basic Auth)",
            "/token-login (POST)",
            "/token-protected (x-auth-token header)",
            "/jwt-login (POST)",
            "/jwt-protected (Bearer Token)"
        ]
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
