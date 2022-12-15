<template>
    <div style="margin-bottom:60px">
        <div class="content">
            <div class="newdelbread">
                <a-breadcrumb>
                    <a-breadcrumb-item>
                        <router-link :to="{ 'name': 'home' }">
                            <span class="ishover">Home</span>
                        </router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <router-link :to="{'name':'products','query':{'id':''}}">
                            <span class="ishover">PRODUCTS</span>
                        </router-link>
                    </a-breadcrumb-item>
                    <!-- <a-breadcrumb-item>{{newsinfo.title}}</a-breadcrumb-item> -->
                </a-breadcrumb>
            </div>
            <div class="pro_del_t flex_fs">
                <div class="pro_del_tl">
                    <img :src="gallerylist[listid]" alt="" class="pro_del_tl_img">
                    <div class="pro_del_tlb flex_fs">
                        <div class="pro_del_tlb_i" v-for="(item,index) in gallerylist" :key="index">
                            <img :src="item" alt="" class="extent_box" @mouseenter="changeimg(index)">
                        </div>
                    </div>
                </div>
                <div class="pro_del_tr flex_col_fs">
                    <div class="font_30" style="margin-bottom:20px">
                        {{detaildata.title}}
                    </div>
                    <div class="pro_del_tr_i font_16 flex_fs">
                        <div class="pro_del_tr_il"> Function</div>
                        <div class="pro_del_tr_ir">{{detaildata.algorithm}}</div>
                    </div>
                    <div class="pro_del_tr_i font_16 flex_fs">
                        <div class="pro_del_tr_il"> Specifications</div>
                        <div class="pro_del_tr_ir"> {{detaildata.hashrate|filnum(detaildata.hashrate)}} | <span>
                                {{detaildata.power_watt|filnum(detaildata.power_watt)}}</span> | <span>
                                {{detaildata.power_jth|filnum(detaildata.power_jth)}}</span>
                        </div>
                    </div>
                    <div class="pro_del_tr_i font_16 flex_fs">
                        <div class="pro_del_tr_il"> Shipping Date</div>
                        <div class="pro_del_tr_ir">{{detaildata.shipping}}</div>
                    </div>
                    <div class="pro_del_tr_i font_16 flex_fs">
                        <div class="pro_del_tr_il"> Payment Method</div>
                        <div class="pro_del_tr_ir">{{detaildata.payment}}</div>
                    </div>
                    <div class="btn_box" @click="changevisi(detaildata)" style="margin-top:60px">
                        <div class="btn">Get Best Price
                        </div>
                    </div>
                </div>
            </div>
            <div class="entent_box flex_fs font_22">
                <div class="half" :class="type?'line_b':''" @click="changetype(true,1)" style="height:60px">Specifications</div>
                <div class="half" :class="type?'':'line_b'" @click="changetype(false,2)"  style="height:60px">Purchasing Guidelines</div>
            </div>
            <div class="specifications" id="specifications">
                <div class="color1 specifications_title">Product Glance</div>
                <p></p>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Version</div>
                    <div class="half_l">{{detaildata.version}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Model No.</div>
                    <div class="half_l">{{detaildata.model_no}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Crypto Algorithm</div>
                    <div class="half_l">{{detaildata.algorithm}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Hashrate, TH/s</div>
                    <div class="half_l">{{detaildata.hashrate}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Power on wall @25°C, Watt</div>
                    <div class="half_l">{{detaildata.power_watt}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Power efficiency on wall @25°C, J/TH</div>
                    <div class="half_l">{{detaildata.power_jth}}</div>
                </div>
                <!--Detailed Characteristics-->
                <div class="color1 specifications_title">Detailed Characteristics</div>
                <p></p>
                <p>Power Supply</p>
                <p></p>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Power supply AC Input voltage, Volt(1-1)</div>
                    <div class="half_l">{{detaildata.version}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Power supply AC Input Frequency Range, Hz</div>
                    <div class="half_l">{{detaildata.version}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Power supply AC Input current, Amp(1-2)</div>
                    <div class="half_l">{{detaildata.version}}</div>
                </div>
                <p></p>
                <p>Hardware Configuration</p>
                <p></p>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Networking connection mode</div>
                    <div class="half_l">{{detaildata.connection_mode}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Miner Size (Length*Width*Height, w/o package),mm(2-1)</div>
                    <div class="half_l">{{detaildata.miner_size_womm}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Miner Size (Length*Width*Height, with package),mm</div>
                    <div class="half_l">{{detaildata.miner_size_withmm}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Net weight, kg(2-2)</div>
                    <div class="half_l">{{detaildata.net_weight}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Gross weight, kg</div>
                    <div class="half_l">{{detaildata.gross_weight}}</div>
                </div>
                <p></p>
                <p>Environment Requirements</p>
                <p></p>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Operation humidity(non-condensing) , RH</div>
                    <div class="half_l">{{detaildata.operation_humidity}}</div>
                </div>
                <div class="specifications_i flex_fs">
                    <div class="half_l">Operation altitude, m(3-1)</div>
                    <div class="half_l">{{detaildata.operation_altitude}}</div>
                </div>
            </div>
            <p></p>
            <div class="purchasing" id="purchasing"><span class="font_18">Purchasing Guidelines</span></div>
            <a-divider />
            <div v-html="detaildata.purchasing_guidelines" class="purchasing_art"></div>
        </div>
        <subdialogVue :visitype="visitype" @toclose="toclose" :pro_detail="detaildata"></subdialogVue>
    </div>
</template>
<script>
import subdialogVue from '../../components/dialog/subdialog.vue'
import { issubdialog, Mixin1 } from '../../utils/mixins'
import resdata from './detail.json'
export default {
    mixins: [issubdialog, Mixin1],
    components: { subdialogVue },
    data() {
        return {
            detaildata: '',
            gallerylist: [],
            listid: 0,
            type:true
        };
    },
    methods: {
        async getMachineInfo() {
            // let res = resdata
            // this.detaildata = res.data[0]
            let params = {
                goods_id: this.$route.query.goods_id,
            }
            let res = await this.$http.post(this.$api.getMachineInfo,params)
            if(res.data.code==200){
                this.detaildata=res.data.data[0]
                this.gallerylist = this.detaildata.gallery.split('|')
            }else {
              this.$message.error(res.message)
            }
            
        },
        changeimg(index) {
            this.listid = index
        },
        scrollId(id) {
            document.getElementById(id).scrollIntoView()

        },
        changetype(type,id){
            this.type=type
            if (id==1) {
                document.getElementById('specifications').scrollIntoView(true)
            }
            if (id==2) {
                document.getElementById('purchasing').scrollIntoView(true)
            }
        }
    },
    created() {
        this.getMachineInfo()
    },
    mounted() {
    }
};
</script>
<style scoped>
.pro_del_t {
    width: 100%;
    height: 588px;
}

.pro_del_tl_img {
    width: 540px;
    height: 405px;
}

.pro_del_tlb {
    margin-top: 50px;
}

.pro_del_tr {
    height: 100%;
    flex: 1;
    padding-left: 20px;
}

.pro_del_tlb_i {
    width: 68px;
    height: 64px;
    margin-right: 20px;
}

.pro_del_tr_i {
    width: 100%;
    height: 60px;
    background-color: #fafafa;
    line-height: 60px;
    padding-left: 10px;
}

.pro_del_tr_il {
    width: 20%;
}

.pro_del_tr_ir {
    flex: 1
}

.Anchor_item {
    margin-right: 60px;
    cursor: pointer;
}

.specifications {
    font-size: 16px;
}

.specifications_title {
    margin-top: 60px;
    margin-bottom: 20px;
}

.specifications_i {
    text-align: left;
    border: 1px solid #dedede;
    height: 50px;
    line-height: 50px;
}

.specifications_i:nth-child(2n-1) {
    border-bottom: none;
    background-color: #f9f9f9;
}

.specifications_i:nth-child(2n) {
    border-bottom: none;
    background-color: #f3f4f6;
}

.specifications_i:last-child {
    border-bottom: 1px solid #dedede;
}
.purchasing{
    margin-top: 40px;
    font-style: 18px;
    height: 30px;
    border-left: 2px solid #ff4500;
    padding-left: 10px;
    font-weight: bold;
}
.purchasing_art{
    font-size: 16px;
}
.line_b{
    border-bottom: 1px solid #ff4500;
    color: #ff4500;
}
</style>
