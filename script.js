<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="calculator">

        <div class="title">MY CALCULATOR</div>

        <input type="text" id="display" readonly>

        <div class="buttons">
            <button class="special" onclick="clearDisplay()">AC</button>
            <button class="special" onclick="deleteLast()">⌫</button>
            <button class="special" onclick="percent()">%</button>
            <button class="operator" onclick="addValue('/')">÷</button>

           