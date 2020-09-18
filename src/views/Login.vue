<template>
    <div>
        <OuterHeader/>
        <main class="main">
            <div class="container ">
                <div class="row main-content--wrapper">
                    <section class="main-content">
                        <h1>Welcome back!</h1>
                        <span class="signin">Let's get started!</span>
                        <form class="login-form">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control input-field" placeholder="Email" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input id="password-field" type="password" class="form-control input-field" name="password"
                                           placeholder="Password" required>
                                    <span
                                            class="field-icon toggle-password"
                                            v-bind:class="{ 'fa fa-eye fa-eye-slash': slash,
                                                                'fa fa-fw fa-eye' : !slash}"
                                            v-on:click="slash = !slash"
                                            @click="togglePassword">
                                    </span>
                                </div>
                            </div>
                            <input type="submit" value="Sign in" class="handle-btn-sbm"/>
                        </form>
                        <span>Don’t have an account? </span><router-link to="/sign-select" class="already-have-acc"> Sign up</router-link>

                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import OuterHeader from '@/components/OuterHeader.vue';

export default {
    name: 'Login',
    components: {
        OuterHeader
    },
    data() {
        return {
            slash:  false
        }
    },

    methods: {

        togglePassword ()  {
            const passField  =
                document.getElementById('password-field');
            if ( passField.getAttribute('type') == "password" ) {
                passField.setAttribute('type', 'text');
            } else {
                passField.setAttribute('type', 'password');
            }
        },
    }
}
// @Component({
//     components: {
//         OuterHeader: OuterHeader,
//     },
// })
</script>
<style scoped>
.main {
    min-height: calc(100vh - 140px);/*header*/
    margin-top: 60px;
}
.main-content {
    text-align: center;
    font-size: 15px;
    max-width: 350px;
    width: 100%;
}
.main-content--wrapper {
    display: flex;
    justify-content: center;
}
.signin {
    display: inline-block;
    margin-bottom: 10px;
}
.input-field {
    margin-top: 5px;
    margin-left: 5px;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    border-radius: 0;
    position: relative;
}
.star {
    position: absolute;
    right: 15px;
    top: 20px;
}
.main-content h1 {
    margin: 30px 0 10px 0;
    font-size: 21px;
    font-weight: bold;
}
.handle-btn-sbm {
    width: 163px;
    height: 40px;
    background: #15416B;
    border-radius: 20px;
    align-self: center;
    color: #fff;
    margin: 30px 0 30px 12px;
    border-width: 0;
    border-style: unset;
    cursor: pointer;
}
.form-control:focus {
    border-color: #ced4da !important;
    box-shadow: 0 0 0 0 rgba(0,0,0,.0) !important;
}
.toggle-password {
    position: absolute;
    right: 8px;
    top: 17px;
}
.main-content span {
    color: #7d7d7d;
}
</style>