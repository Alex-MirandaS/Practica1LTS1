<!DOCTYPE html>
<html lang="es">

<head>
    <link rel="stylesheet" href="../CSS/StyleLog.css">
    <title>LOGIN</title>
</head>

<body>
    <div class="container">
        <div class="screen">
            <div class="screen__content">
                <form class="login" method="post">
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" name="nickname" placeholder="Nickname">
                    </div>
                    <button class="button login__submit" name="register">
                        <span class="button__text">Ingresar</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>
                </form>
                <?php
                include("Registrar.php");
                ?>
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>
        </div>
    </div>
</body>

</html>