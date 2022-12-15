// export const domain= process.env.API_ROOT; //silke矿池接口线上环境
import base from './base_url.js'

export default {
  getBanner:  `/api/getBanner`, //获取首页banner图
  getProductsInfo: `/api/getProductsInfo`, //获取单一产品的所有商品
  getNewsInfo:`/api/getNewsInfo`, //获取新闻详情
  getNewsList: `/api/getNewsList`, //新闻列表
  getMachineInfo:  `/api/getMachineInfo`, //商品详情信息
  getAllMachineInfo: `/api/getAllMachineInfo`, //获取所有产品的标题和图片
  getProductsMachineInfo:  `/api/getProductsMachineInfo`, //获取大类商品
  getCompanyMachineInfo: `/api/getCompanyMachineInfo`, //查看公司商品
  feedback:  `/api/feedback`, //用户询单信息
  getCompanyInfo:  `/api/getCompanyInfo`, //公司详细信息
  getProductsList: `/api/getProductsList`, //获取产品列表
  getCasesInfo:  `/api/getCasesInfo`, //案例详情
  getCasesList:  `/api/getCasesList`, //获取案例列表
  getNewsAndCasesList:  `/api/getNewsAndCasesList`, //获取news和cases的列表
  getNewsAndCasesInfo: `/api/getNewsAndCasesInfo`, //获取案例列表
  getMachineList: `/api/getMachineList`, //根据参数来获取数据（产品和公司）
  

}
