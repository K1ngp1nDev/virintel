<template>
    <div>
        <OuterHeader/>
        <main class="main">
            <div class="container">
                <div class="row  selected-main">
                    <section class="main-content">
                        <h1>Welcome!</h1>
                        <span class="signup">Sign up</span>
                        <form >
                            <input type="radio" name="select" value="/sign-up/patient" v-model="link"
                                   id="patient" class="hidden-checkbox" checked>
                            <label for="patient" class="handle-btn-as ellipse-btn">As a Patient</label>
                            <span class="separator-or">or</span>
                            <input type="radio" name="select" value="/sign-up/doctor" v-model="link"
                                   id="doctor" class="hidden-checkbox">
                            <label for="doctor" class="handle-btn-as ellipse-btn">As a Doctor</label>
                            <router-link :to="link"  class="handle-btn-continue ellipse-btn">
                                <p class="submit-btn" @click="submit">Continue</p>
                            </router-link>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import OuterHeader from '@/components/OuterHeader.vue';

// @Component({
//     components: {
//         OuterHeader: OuterHeader,
//     },
// })
export default  {
    name: 'SignSelect',
    components: {
        OuterHeader
    },
    data() {
        return {
            link: '',
        }
    },
    methods: {
        submit ()  {
            // this.$refs.main.style.display = 'none';
            // console.log(this.$refs.main.innerText  = 'ololo', ' test');
            // this.$refs.mainю
            // this.$refs.main.
        }
    },

}

</script>

<style scoped>
.main {
    min-height: calc(100vh - 140px);/*header*/
    margin-top: 60px;
}
.selected-main {
    /*display: block;*/
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.main-content {
    text-align: center;
    font-size: 15px;
}
.signup {
    display: inline-block;
    margin-bottom: 30px;
}
.main-content h1 {
    margin: 30px 0 10px 0;
    font-size: 21px;
    font-weight: bold;
}
.main-content span {
    color: #7d7d7d;
}
.separator-or {
    margin-bottom: 10px;
}
.main-content form {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.hidden-checkbox {
    display: none;
}
.handle-btn-as {
    color: #a1a1a1;
    border: 1px solid #A1A1A1;
    font-weight: 600;
    line-height: 35px;
    border-radius: 20px;
    width: 300px;
    height: 40px;
    align-self: center;
    cursor: pointer;
}

.hidden-checkbox:checked + label {
    border: 1px solid #15416B;
    color: #15416b;
    font-weight: 600;
}

.handle-btn-continue {
    width: 163px;
    height: 40px;
    background: #15416B;
    border-radius: 20px;
    align-self: center;
    color: #fff;
    margin-top: 30px;
    border-width: 0;
    border-style: unset;
    cursor: pointer;
}
.submit-btn {
    display: inline-block;
    margin-top: 7px;
}
</style>