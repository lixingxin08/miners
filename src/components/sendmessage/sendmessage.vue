<template>
    <div class="send_box">
        <div class="send_title">LEAVE A MESSAGE</div>
         <div class="flex_b send_t">
            <div class="send_titem">
                <input class="send_inp"  placeholder="Name" />
            </div>
            <div class="send_titem">
                <input class="send_inp"  placeholder="* Email"  />
            </div>
            <div class="send_titem">
                <input class="send_inp"  placeholder="Phone"  />
            </div>
         </div>
         <div class="flex_b send_t send_c">
                <input class="send_inp" placeholder="* Message" />
         </div>
         <div class="btn_box2 send_b">
            <div class="btn">Submit</div>
          </div>
         
    </div>
</template>
<style scoped>
    .send_title{
        font-style: 18px;
        font-weight: bold;
    }
.send_t{
    width: 100%;
    margin-top: 32px;
}
.send_titem{
    width: 32%;
    border-bottom: 1px solid #dcdcdc;
}
.send_c{
    border-bottom: 1px solid #dcdcdc; 
}
.send_inp{ 
    width: 100%;
    height: 35px;
    border: 0px;
    outline: none;;
}
.send_b{
    width: 178px;
    margin-top: 32px;
}
</style>