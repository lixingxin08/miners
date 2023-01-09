<template>
    <div>
        <div class="content" style="margin-bottom:60px">
            <a-breadcrumb class="newdelbread">
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'home' }">
                        <span class="ishover">Home</span>
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>CASES</a-breadcrumb-item>
            </a-breadcrumb>
            <div class="flex_fs caseitem">
                <div class="case_i" v-for="(item,index) in caselist" :key="index">
                        <div class="case_iimg">
                            <router-link :to="{'name':'casesdetail','query':{'id':item.id,'choice_type':item.type}}">
                            <img :src="item.picture" alt="" class="toscaleimg case_iimg">
                        </router-link>
                        </div>
                        <div class="case_ic">
                            <router-link :to="{'name':'casesdetail','query':{'id':item.id,'choice_type':item.type}}">
                            <div class="ishover case_ict">{{item.title}}</div></router-link>
                            <p></p>
                            <p class="col_9">{{item.data}}</p>
                            <router-link :to="{'name':'casesdetail','query':{'id':item.id,'choice_type':item.type}}">
                            <div class="col_9 iscursor">{{item.short_desc}}</div></router-link>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import caseres from './case.json'
export default {
    data(){
        return{
            caselist:''
        }
    },
    methods:{
        async getNewsAndCasesList() {
            // let res = caseres
            // this.caselist=res.data
            let res = await this.$http.get(this.$api.getNewsAndCasesList)
            if(res.data.code==200){
                this.caselist=res.data.data.cases
            }else {
          this.$message.error(res.data.msg)
        }
        },
    },
    created() {
        this.getNewsAndCasesList()
    },
}
</script>
<style scoped>
.newdelbread{
    margin-top: 20px;
    margin-bottom: 32px;
}
.case_i{
    width: 32%;
    height: 460px;
    margin-bottom: 10px;
}
.case_i:hover{
    box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
}
.case_iimg{
    width: 100%;
    height: 270px;
    overflow: hidden;
}
.caseitem{
    flex-wrap: wrap;
}
.case_ic{
    padding: 20px;
}
.case_ict{
    font-size: 18px;
    font-weight: bold;

}
</style>