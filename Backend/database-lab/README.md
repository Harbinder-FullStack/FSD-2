# Flask + MySQL Students CRUD API with Validation

## Step 1: Create MySQL Database
CREATE DATABASE chandigarh_university_db;

## Step 2: Setup Virtual Environment
python3 -m venv venv
source venv/bin/activate

## Step 3: Install Requirements
pip install -r requirements.txt

## Step 4: Update MySQL Credentials
Edit app.py and replace 'password' with your MySQL root password.

## Step 5: Run Application
python app.py

Server: http://localhost:5000

## Validation Rules
- Name: Minimum 2 characters
- Age: Between 1 and 120
- Uid: Must be alphanumeric

## Test API

Create:
curl -X POST http://localhost:5000/students -H "Content-Type: application/json" -d '{"name":"Vinay","age":22,"uid":"23BIS10001"}'

Invalid Example:
curl -X POST http://localhost:5000/students -H "Content-Type: application/json" -d '{"name":"J","age":500,"email":"23BIS10001"}'
