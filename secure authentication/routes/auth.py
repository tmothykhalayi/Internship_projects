from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import jsonify

# Admin Protected Route
@auth_bp.route('/admin', methods=['GET'])
@jwt_required()
def admin_route():
    current_user = get_jwt_identity()
    
    # Check if the user is an admin
    if current_user['role'] != 'admin':
        return jsonify({'message': 'Access denied. Admins only.'}), 403
    
    return jsonify({'message': 'Welcome to the admin panel!'}), 200
