@extends('layout')
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Covid website</title>
    <link rel="stylesheet"href="{{asset('css/app.css')}}">
    <link rel="stylesheet"href="{{asset('js/app.js')}}">


</head>
<body>
<div class="formul">
    <h4>CONTACT US</h4>
    <h5>Contact for any querry </h5>
</div>
<!-- we make our form with method post to make it in relation with our database -->

    <form  action="/">
        @csrf
        <div class="form-group">
            <input type="text" class="form-control1" name="name" id="name"  placeholder="Your name" >
        </div>
        <div class="form-group">
            <input type="email" class="form-control2" name="email" id="email"  placeholder="name@example.com" >
        </div>
        <div class="form-group">
            <input type="text" class="form-control3" name="message" id="message" rows="4" placeholder="Message">
        </div>
        <div>
            <button type="submit" class="form-control4">Send Your Message</button>
        </div>

    </form>
<div class="icone">
    <img src="/svg/locale.svg" width="20px" height="20px">
    <p>Adress:Sfax Medina </p>
    <img src="/svg/telephone.svg" width="20px" height="20px">
    <p>Emergency Call:+216 80 102 021</p>
</div>

<footer>
    <h6>Copyright &copy;  CoronaVirus, All Rights Reserve . </h6>
</footer>
</body>
</html>
