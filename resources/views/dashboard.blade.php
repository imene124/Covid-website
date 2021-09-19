<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet"href="{{asset('css/app.css')}}">

</head>

<body>
<div class="dash">
<canvas id="root" >

</canvas>
</div>
<div class="dashboard">
    <canvas id="rooth" style="background-color:whitesmoke;" >

    </canvas>
</div>
@extends('layout')
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"></script>
<script src="{{asset('js/app.js')}}"></script>

</html>
