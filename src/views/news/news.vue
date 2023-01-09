<template>
    <div>
        <div class="topimg newtopimg">
            <img src="../../img/20220911014026.png" alt="" class="extent_box">
        </div>
        <div class="content">
            <a-breadcrumb class="newbread">
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'home' }">
                        <span class="ishover">Home</span>
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>NEWS</a-breadcrumb-item>
            </a-breadcrumb>
            <div class="extent_box flex_b news_c">


                <div class="new_item" v-for="(item,index) in newsdata" :key="index">
                    <router-link :to="{'name':'news_detail','query':{'id':item.id,'choice_type':item.type}}">
                        <div class="extent_box new_i_c flex_fs">
                            <div>
                                <img :src="item.picture" alt="" class="newsimg">
                            </div>
                            <div class="new_i_cr">
                                <h2 class="new_i_crt">{{item.title}}</h2>
                                <h2>{{item.short_desc | toelis(120)}}</h2>
                                <h2 class="new_i_crb">{{item.date}}</h2>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="ispagination flex_a news_fool">
                <a-pagination :current="pagination.current" :total="pagination.total" @change="onchange">
                </a-pagination>

            </div>
        </div>
    </div>
</template>
<script>
import { Mixin1 } from '../../utils/mixins'
import resdata from './index.json'
export default {
    mixins: [Mixin1],
    data() {
        return {
            pagination: {
                "total": 0, //总页数
                "pageSize": 12, //每页中显示10条数据
                "showSizeChanger": true,
                "current": 1, //当前页
                "page": 1, //几页
                "size": "default",
            },
            newsdata: '',
        }
    },
    methods: {
        onchange() {

        },
        async getNewsAndCasesList() {
            // let res = resdata
            // this.newsdata=res.data.news
            let res = await this.$http.get(this.$api.getNewsAndCasesList)
            if (res.data.code == 200) {
                this.newsdata = res.data.data.news
            } else {
                this.$message.error(res.data.msg)
            }
        }
    },
    created() {
        this.getNewsAndCasesList()
    }

}
</script>
<style scoped>
.newbread {
    margin-top: 20px;
    margin-bottom: 50px;
}

.news_c {
    flex-wrap: wrap;
}

.new_item {
    width: 50%;
    height: 144px;
    padding-right: 28px;
    margin-bottom: 20px;
    cursor: pointer;
}

.newsimg {
    width: 150px;
    height: 120px;
}

.new_i_c {
    padding: 12px;
}

.new_i_cr {
    flex: 1;
    padding-left: 4px;
}

.new_i_c:hover {
    box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
}

.new_i_crt {
    font-size: 16px;
    font-weight: bold;
}

.new_i_crb {
    color: #c2c2c2;
}

.news_fool {
    margin-top: 32px;
    margin-bottom: 60px;
}
</style>