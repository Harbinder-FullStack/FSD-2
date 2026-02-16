from flask import request
import time

# Explain this code structure and functionality. What is the purpose of this code and how does it work?   
# This code defines a middleware for a Flask application that logs incoming HTTP requests and their corresponding responses. 
# The `register_middlewares` function takes a Flask app instance as an argument and sets up two functions: `log_request` and `log_response`.   
# - `log_request`: This function is executed before each request is processed.
#  It records the start time of the request and prints the HTTP method and path of the incoming request.
# - `log_response`: This function is executed after each request is processed. 
# It calculates the duration of the request by subtracting the start time from the current time, and then prints the status code of the response along with the time taken to process the request.
# Finally, it returns the response object to be sent back to the client.
# Overall, this middleware helps in monitoring the performance of the application by logging the details of each request and response,
#  which can be useful for debugging and analyzing the application's behavior.    
    

def register_middlewares(app):

    @app.before_request
    def log_request():
        request.start_time = time.time()
        print(f"[REQUEST] {request.method} {request.path}")

    @app.after_request
    def log_response(response):
        duration = time.time() - request.start_time
        print(f"[RESPONSE] Status: {response.status_code} | Time: {duration:.4f}s")
        return response
