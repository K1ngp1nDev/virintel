<template>
    <header class="header">
        <div class="container">
            <nav class="row header-nav">
                <div class="header-logo-wrapper">
                    <a href="/" class="handle_margin_nav">
                        <img src="../assets/Logo.svg" alt="logo" class="logo">
                    </a>
                </div>
                <div class="header-nav-reffs-wrapper  d-none d-lg-flex">
                    <ul class="header-nav-list">
                        <li class="header-nav-item"><a href="/">Home</a></li>
                        <li class="header-nav-item"><a href="#">News</a></li>
                        <li class="header-nav-item"><a href="/about">About us</a></li>
                        <li class="header-nav-item"><a href="#">Contact us</a></li>
                        <router-link to="/sign-select" class="login">
                            <li class="header-nav-item">Log in </li>
                        </router-link>
                    </ul>
                </div>
                <div class="burger--wrapper d-lg-none d-xl-none">
                    <router-link to="/sign-select" >
                        <img src="../assets/burger.svg" alt="login" class="icon-login">
                    </router-link>
                    <div class="nav-item dropdown d-lg-none d-xl-none">

                        <a class="nav-link dropdown-toggle"
                           href="#" id="navbardrop" data-toggle="dropdown">
                            <div id="header-nav-burger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>

                        <div class="dropdown-menu">
                            <p><a href="/" class="dropdown-item">Home</a></p>
                            <p><a href="#" class="dropdown-item">News</a></p>
                            <p><a href="/about" class="dropdown-item">About us</a></p>
                            <p><a href="#" class="dropdown-item">Contact us</a></p>
                            <div class="dropdown-divider"></div>
                            <p><router-link to="/sign-select" class="dropdown-item">Log in</router-link></p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
<!--    <router-view/>-->
</template>

<script>
export default {
    name: "Head"
}
</script>

<style scoped>
.header {
    box-shadow: 0 4px 10px rgba(234, 234, 234, 0.5);
    background-color: #fff;
    font-size: 15px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
}
.header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}
.header-nav-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.header-nav-item {
    display: inline-block;
    margin-right: 35px;
}
/*.header-nav-item:last-of-type {*/
/*    margin-right: 0;*/
/*    background: #15416B;*/
/*    border-radius: 15px;*/
/*    padding: 5px 30px;*/
/*}*/
.header-nav-item a {
    color: #7D7D7D;
}

.header-nav-item a:hover {
    color: #15416B;
    text-decoration: none;
}

#header-nav-burger-icon {
    width: 26px;
    height: 40px;
    position: relative;
    /*margin: 30px auto;*/
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    color: #fff;
}

#header-nav-burger-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #15416B;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#header-nav-burger-icon span:nth-child(1) {
    top: 8px;
}

#header-nav-burger-icon span:nth-child(2) {
    top: 17px;
}

#header-nav-burger-icon span:nth-child(3) {
    top: 26px;
}

#header-nav-burger-icon.open span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

#header-nav-burger-icon.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

#header-nav-burger-icon.open span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
#header-nav-burger-icon.open span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

#header-nav-burger-icon.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

#header-nav-burger-icon.open span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
}
.dropdown-toggle::after {
    display: none;
}
.burger--wrapper {
    position: relative;
    margin-right: 15px;
}
.icon-login {
    position: absolute;
    max-width: 33px;
    top: 11px;
    left: -30px;
    /*background-color: #15416B;*/
    /*display: block;*/
    /*color: #15416b !important;*/
    /*z-index: 999;*/
    /*font-size: 20px;*/
}

.header-nav-item a {
    color: #7D7D7D;
}
.login {
    margin: 0 0 0 35px;
    background: #15416B;
    border-radius: 15px;
    padding: 5px 30px;
    cursor: pointer;
    color: #fff !important;
    border: 0.3px solid #15416B;
}
.login:hover {
    background: transparent;
    color: #15416B !important;
}
.header-nav-item:last-of-type {
    margin-right: 0;
}
</style>