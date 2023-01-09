<template>
    <div>
        <div class="content" style="margin-bottom:60px;min-height: 500px;padding-top: 20px;">
            <a-breadcrumb class="newdelbread">
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'home' }">
                        <span class="ishover">Home</span>
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'news' }">
                        <span class="ishover">NEWS</span>
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>{{newsinfo.title}}</a-breadcrumb-item>
            </a-breadcrumb>
            <div class="newsdel_i">
                <div class="newsdel_it">{{newsinfo.title}}</div>
                <div class="newsdel_itime col_9">{{newsinfo.create_time|timestampToTime(newsinfo.create_time)}}</div>
                <div class="infoimg" v-html="newsinfo.news_desc"></div>
            </div>
        </div>
    </div>
</template>

<script>
import resdata from './detail.json'
export default {
    data() {
        return {
            newsinfo: ''
        }
    },
    methods: {
        async getNewsAndCasesInfo() {
            // let res = resdata.data
            // this.newsinfo = res
            let params = {
                id: this.$route.query.id,
                choice_type: this.$route.query.choice_type,
            }
            let res = await this.$http.post(this.$api.getNewsAndCasesInfo, params)
            if (res.data.code == 200) {
                this.newsinfo = res.data.data
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
.newsdel_i {
    width: 800px;
    margin: 0 auto;
    text-align: center;
}

.newsdel_it {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
}

.newsdel_itime {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}

.news_delimg {
    width: 800px;
    height: 400px;
}

.news_delimg2 {
    width: 650px;
    height: 498px;
    margin-bottom: 4px;
}
</style>