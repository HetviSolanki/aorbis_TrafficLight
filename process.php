<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $sequence = isset($_POST['sequence']) ? $_POST['sequence'] :";
        $greenInterval = isset($_POST['greenInterval']) ? intval($_POST['greenInterval']) : 0;
        $greenInterval = isset($_POST['yellowInterval']) ? intval($_POST['yellowInterval']) : 0;

        if(empthy($sequence) || $greenInterval <= 0 || $yellowInterval <= 0){
            echo json_encode(['error' => 'Invalid input']);
            exit;
        }
        $sequence = explode(;; $sequence);
        echo json_encode(['sequence' => $sequence, 'greenInterval' => $greenInterval, 'yellowInterval' => $yellowInterval]);

}
?>