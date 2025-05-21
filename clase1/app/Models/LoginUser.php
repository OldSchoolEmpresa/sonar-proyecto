<?php
class LoginUser {
    private $db;

    public function __construct() {
        $this->db = (new Database())->connect();
    }

    public function authenticate($email, $password) {
        $query = 'SELECT * FROM users WHERE email = :email LIMIT 1';
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if(password_verify($password, $user['password'])) {
                return $user;
            }
        }
        return false;
    }

    public function generateAuthToken($userId) {
        $token = bin2hex(random_bytes(32));
        $expires = date('Y-m-d H:i:s', strtotime('+1 hour'));

        $query = 'UPDATE users SET token = :token, token_expires = :expires WHERE id = :id';
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':token', $token);
        $stmt->bindParam(':expires', $expires);
        $stmt->bindParam(':id', $userId);

        if($stmt->execute()) {
            return $token;
        }
        return false;
    }

    public function getUserByToken($token) {
        $query = 'SELECT * FROM users WHERE token = :token AND token_expires > NOW() LIMIT 1';
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':token', $token);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}