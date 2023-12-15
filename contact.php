<?php
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if (!empty($name) || !empty($email) || !empty($address) || !empty($phone) || !empty($message)) {
    $host = "localhost";
    $dbUsername = "id21675164_root";
    $dbPassword = "Jinu@1234";
    $dbName = "id21675164_portfolio";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email FROM contactadmin WHERE email = ? LIMIT 1";
        $INSERT = "INSERT INTO contactadmin(name, email, address, phone, message) VALUES (?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum == 0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sssis", $name, $email, $address, $phone, $message);
            $stmt->execute();
            echo "New record inserted successfully";
        } else {
            echo "Email already present";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>
