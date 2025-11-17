const db = require('../config/database');

class User {
    // Create a new user
    static async create({ name, email, phone }) {
        const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
        const [result] = await db.execute(sql, [name, email, phone]);
        return result;
    }

    // Find a user by email (optionally excluding an id)
    static async findByEmail(email, excludeId = null) {
        let sql = 'SELECT * FROM users WHERE email = ?';
        const params = [email];
        if (excludeId) {
            sql += ' AND id != ?';
            params.push(excludeId);
        }
        const [rows] = await db.execute(sql, params);
        return rows[0] || null;
    }

    // Get all users
    static async findAll() {
        const sql = 'SELECT * FROM users ORDER BY id DESC';
        const [rows] = await db.execute(sql);
        return rows;
    }

    // Get a user by id
    static async findById(id) {
        const sql = 'SELECT * FROM users WHERE id = ?';
        const [rows] = await db.execute(sql, [id]);
        return rows[0] || null;
    }

    // Update a user
    static async update(id, { name, email, phone }) {
        const sql = 'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?';
        const [result] = await db.execute(sql, [name, email, phone, id]);
        return result;
    }

    // Delete a user
    static async delete(id) {
        const sql = 'DELETE FROM users WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = User;
