

# ===============================
# CREATE Student
# ===============================
@app.route('/students', methods=['POST'])
def create_student():
    data = request.get_json()
    validated_data = student_schema.load(data)

    student = Student(**validated_data)
    db.session.add(student)
    db.session.commit()

    return jsonify(student.to_dict()), 201

# ===============================
# READ All Students
# ===============================
@app.route('/students', methods=['GET'])
def get_students():
    students = Student.query.all()
    return jsonify([s.to_dict() for s in students])

# ===============================
# READ One Student
# ===============================
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student = Student.query.get_or_404(id)
    return jsonify(student.to_dict())

# ===============================
# UPDATE Student
# ===============================
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    student = Student.query.get_or_404(id)
    data = request.get_json()
    validated_data = student_update_schema.load(data)

    for key, value in validated_data.items():
        setattr(student, key, value)

    db.session.commit()
    return jsonify(student.to_dict())

# ===============================
# DELETE Student
# ===============================
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": "Student deleted successfully"})
