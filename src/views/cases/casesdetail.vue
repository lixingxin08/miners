<template>
    <div class="content" style="min-height: 500px;margin-bottom:60px;">
        <div class="flex_column">
            <a-breadcrumb class="newsdelbread">
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'home' }">
                        <span class="ishover">Home</span>
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'cases' }">
                        <span class="ishover">CASES</span>
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>{{caseinfo.title}}</a-breadcrumb-item>
            </a-breadcrumb>
            <div class="newsdet_title">{{caseinfo.title}}</div>
            <div class="newsdet_time"> {{caseinfo.create_time|timestampToTime(caseinfo.create_time)}}</div>   
        </div>
        <div class="content infoimg" v-html="caseinfo.news_desc"></div>
    </div>
</template>
<script>
import caseres from './caseinfo.json'
export default {
    data() {
        return {
            caseinfo: ''
        }
    },
    methods: {
        async getNewsAndCasesInfo() {
            // let res = resdata.data
            // this.caseinfo = res
            let params = {
                id: this.$route.query.id,
                choice_type: this.$route.query.choice_type,
            }
            let res = await this.$http.post(this.$api.getNewsAndCasesInfo, params)
            if (res.data.code == 200) {
                this.caseinfo = res.data.data
            } else {
                this.$message.error(res.data.msg)
            }
        }
    },
    created() {
        this.getNewsAndCasesInfo()
    },
    filters: {
        timestampToTime(value) {
            let date = new Date(value * 1000);
            var Y = date.getFullYear();
            var M = date.getMonth() + 1;
            var D = date.getDate();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            return Y + "-" + M + "-" + D + " " + h + ":" + (m < 10 ? "0" + m : m);
        },
    },
}
</script>
<style scoped>
.newsdelbread {
    width: 100%;
    text-align-last: left;
    margin-top: 20px;
    margin-bottom: 20px;
}

.newsdet_title {
    font-size: 28px;
    font-weight: bold;
}

.newsdet_time {
    margin-top: 20px;
    margin-bottom: 30px;
    color: #999;
}

.newsdet_img {
    width: 500px;
    height: 375px;
    margin-bottom: 30px;
}

.newsdet_descriptions {
    width: 649px;
}

.newsdet_img_b {
    width: 500px;
    height: 88px;
    margin-bottom: 60px;
}
</style>