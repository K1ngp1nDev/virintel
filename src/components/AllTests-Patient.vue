<template>

            <div>
                <div class="my-tests-title--wrapper"><span class="caption">My Tests</span>
                    <button class="handle-btn-order">Order a test</button></div>

                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col" class="th-title">ID</th>
                        <th scope="col" class="th-title">Date</th>
                        <th scope="col" class="th-title">Name</th>
                        <th scope="col" class="th-title">Doctor</th>
                        <th scope="col" class="th-title">Status</th>
                        <th scope="col" class="th-title">Access</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style="border-bottom: 0.3px solid #d8d8d8;">
                        <td aria-label="ID" scope="row" >123456</td>
                        <td aria-label="Date">28/07/2020 </td>
                        <td aria-label="Name">Coronavirus</td>
                        <td aria-label="Doctor">John Smith</td>
                        <td aria-label="Status" class="status-done">Done</td>
                        <router-link to="/patient/test/id"><td aria-label="Info">More</td></router-link>
                    </tr>

                    <tr style="border-bottom: 0.3px solid #d8d8d8;">


                        <td aria-label="ID" scope="row">123456</td>
                        <td aria-label="Date">28/07/2020 </td>
                        <td aria-label="Name">Coronavirus</td>
                        <td aria-label="Doctor">John Smith</td>
                        <td aria-label="Status" class="status-assigned">Assigned</td>
                        <router-link to="/patient/test/id"><td aria-label="Info">More</td></router-link>
                    </tr>

                    </tbody>
                </table>
            </div>
</template>

<script>
export default {
name: "AllTests"
}
</script>

<style scoped>
.main-content {
    border-left: 0.3px solid #C1C1C1;
    min-height: calc(100vh - 70px);/*header*/
}
.main-content div:first-child {
    margin-top: 10px!important;
}
.main-content h5,
.col-form-label{
    font-size: 16px;
    text-align: left;
}
h5 {
    font-weight: 600;
}
.btn-back {
    position: relative;
    padding: 40px 0 40px 0;
    /*line-height: 30px;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*align-content: center;*/
}
.back-icon {
    /*height: 30px;*/
}
.back-icon:before {
    position: absolute;
    /*display: ;*/
    content: url("../assets/img/back_btn.svg");
    left: 10px;
    top: 20px;
    /*padding-top: 0px;*/
    /*left: 15px;*/
    /*width: 25px;*/
    /*height: 25px;*/
}
.back-icon:after {
    content: 'Back';
    position: absolute;
    font-weight: 600;
    font-size: 15px;
    color: #15416B;
    top: 20px;
    left: 35px;

}
.back-ref {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
}
.caption {
    font-weight: 600;
    font-size: 15px;
}
.table td, .table th {
    border: 0 !important;
    padding-left: 0;

}
.th-title {
    font-weight: 600;
    font-size: 15px;
    color: #C1C1C1;
}
.accept {
    content: url("../assets/img/access_icon.svg");
    cursor: pointer;
}
.denied {
    content: url("../assets/img/denied_icon.svg");
    cursor: pointer;
}
.status-assigned {
    color: #C79600;
}
.status-new {
    color: #FF4D4D;
}
.status-done {
    color: #27AE60;
}
.status-process {
    color: #1E86EB;
}
.my-tests-title--wrapper {
    display: flex;
    justify-content: space-between;
}
.handle-btn-order {
    width: 190px;
    height: 34px;
    background: #15416B;
    border-radius: 20px;
    align-self: center;
    color: #fff;
    border-width: 0;
    border-style: unset;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    .details {
        position: absolute;
        right: 25px;
    }
    .table thead {
        display: none;
    }

    .table tr {
        display: block;
        margin-bottom: 1rem;
        /*border-bottom: 2px solid #e8e9eb;*/
    }

    .table td {
        display: block;
        text-align: right;
    }

    .table td:before {
        content: attr(aria-label);
        float: left;
        font-weight: bold;
        color: #C1C1C1;
    }

}
</style>