<template>
    <div class="content">
        <div class="big_content">
            <div class="content_nav">
                <div class="content_nav_left"><img src="../../img/page/logo/Shoppinglogo.png" alt=""></div>
                <div class="content_nav_middle">
                    <ul>
                        <li><a href="javascript:;">家庭影院</a></li>
                        <li><a href="javascript:;">智能家居</a></li>
                        <li><a href="javascript:;">新风系统</a></li>
                        <li><a href="javascript:;">净水系统</a></li>
                        <li><a href="javascript:;">智能窗帘</a></li>
                        <li><a href="javascript:;">家庭KTV</a></li>
                    </ul>
                </div>
                <div class="content_nav_right">
                    <input type="text" placeholder="请输入您所搜索的商品">
                    <i><img src="../../img/page/logo/search.png" alt=""></i>
                </div>
            </div>
            <div class="content_banner">
                <div>
                    <ul>
                       <li><img src="../../img/page/banner/banner1.png" alt=""></li>
                    </ul>
                </div>
                <div class="sidebar">
                    <ul>
                        <li><a href="javascript:;">家庭影院</a><i>></i></li>
                        <li><a href="javascript:;">智能家居</a><i>></i></li>
                        <li><a href="javascript:;">新风系统</a><i>></i></li>
                        <li><a href="javascript:;">净水系统</a><i>></i></li>
                        <li><a href="javascript:;">空调地暖</a><i>></i></li>
                        <li><a href="javascript:;">安防监控</a><i>></i></li>
                        <li><a href="javascript:;">家庭ktv</a><i>></i></li>
                        <li><a href="javascript:;">智能窗帘</a><i>></i></li>
                        <li><a href="javascript:;">太阳能光热</a><i>></i></li>
                    </ul>
                </div>
            </div>
            <div class="classification">
                <div class="classification_left">
                    <ul>
                        <!--<li v-for="item in classification">-->
                        <li>
                            <i><img src="../../img/page/icon/icon-1.png" alt=""></i>
                            <a href="javascript:;">商品分类</a>
                        </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-2.png" alt=""></i>
                        <a href="javascript:;">购物车</a>
                      </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-3.png" alt=""></i>
                        <a href="javascript:;">积分兑换</a>
                      </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-4.png" alt=""></i>
                        <a href="javascript:;">优惠活动</a>
                      </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-5.png" alt=""></i>
                        <a href="javascript:;">收藏</a>
                      </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-6.png" alt=""></i>
                        <a href="javascript:;">订单中心</a>
                      </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-7.png" alt=""></i>
                        <a href="javascript:;">个人中心</a>
                      </li>
                      <li>
                        <i><img src="../../img/page/icon/icon-8.png" alt=""></i>
                        <a href="javascript:;">信息中心</a>
                      </li>
                    </ul>
                </div>
                <!--<div class="classification_right" v-for="(item, index) in CategoryImg">-->
                <div class="classification_right">
                    <div class="classification_img" v-for="item in list">
                        <img v-lazy="item.IndexIcon" alt="" data-src="../../img/page/logo/Shoppinglogo.png">
                    </div>
                </div>

            </div>
            <div class="SuperBrandDay">
                <p>超级品牌日</p>
                <div class="SuperBrand">
                    <div class="SuperBrand_Cont" v-for="item in supper">
                        <i><img v-lazy="item.SupperImg" alt=""  data-src="../../img/page/logo/Shoppinglogo.png"></i>
                    </div>
                </div>
            </div>
            <div class="advertisement" v-for="item in advertisement1">
                <img v-lazy="item.advertisement" alt=""  data-src="../../img/page/logo/Shoppinglogo.png">
            </div>
            <div class="HotSellingActivities">
                <p>热销活动</p>
                <div class="HotSell">
                    <a href="javascript:;">查看全部</a><i>></i>
                </div>
                <div class="HotSellingActivities_img">
                    <div class="HotSellingActivities_banner"><img src="../../img/page/banner/banner1.png" alt=""></div>
                    <ul>
                        <li v-for="item in HotSell">
                            <img v-lazy="item.HotSellImg" alt=""  data-src="../../img/page/logo/Shoppinglogo.png">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="advertisement" v-for="item in advertisement2">
                <img v-lazy="item.advertisement" alt=""  data-src="../../img/page/logo/Shoppinglogo.png">
            </div>
            <div class="Boutique">
                <p>精品推荐</p>
                <ul>
                    <li v-for="item in Boutique">
                        <img v-lazy="item.BoutiqueImg" alt=""  data-src="../../img/page/logo/Shoppinglogo.png">
                    </li>
                    <li class="last_Boutique">
                        <img src="../../img/page/banner/banner1.png" alt=""  data-src="../../img/page/logo/Shoppinglogo.png" class="last_Boutique_top">
                        <div class="last_Boutique_bottom">
                          <a href="javascript:;">浏览更多</a>
                          <i><img src="../../img/page/icon/arrow.png" alt="" class="arrow"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  // import {CategoryImg} from '../../js/HomePage.js'
    export default {
        name: "index",
        data(){
            return{
                list:[
                    {IndexIcon: require('../../img/page/banner/banner1.png')},
                    {IndexIcon: require('../../img/page/banner/banner2.png')},
                    {IndexIcon: require('../../img/page/banner/banner3.png')}
                ],
                supper:[
                    {SupperImg: require('../../img/page/banner/banner1.png')},
                    {SupperImg: require('../../img/page/banner/banner2.png')},
                    {SupperImg: require('../../img/page/banner/banner3.png')},
                    {SupperImg: require('../../img/page/banner/banner4.png')},
                    {SupperImg: require('../../img/page/banner/banner1.png')}
                ],
                advertisement1:[
                    {advertisement: require('../../img/page/banner/banner1.png')}
                ],
                advertisement2:[
                    {advertisement: require('../../img/page/banner/banner2.png')}
                ],
                HotSell:[
                    {HotSellImg: require('../../img/page/banner/banner1.png')},
                    {HotSellImg: require('../../img/page/banner/banner2.png')},
                    {HotSellImg: require('../../img/page/banner/banner3.png')},
                    {HotSellImg: require('../../img/page/banner/banner4.png')},
                    {HotSellImg: require('../../img/page/banner/banner1.png')},
                    {HotSellImg: require('../../img/page/banner/banner2.png')},
                    {HotSellImg: require('../../img/page/banner/banner3.png')},
                    {HotSellImg: require('../../img/page/banner/banner4.png')}
                ],
                Boutique:[
                    {BoutiqueImg: require('../../img/page/banner/banner1.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner2.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner3.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner4.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner1.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner2.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner3.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner4.png')},
                    {BoutiqueImg: require('../../img/page/banner/banner1.png')}
                ]
            }
        }
        // data:{
        //     classification:[
        //         {
        //             // CategoryImg:"../../img/page/icon-1.png",
        //             CategoryCont:"商品分类"
        //         }
        //     ]
        // }
    }
</script>

<style scoped>

</style>
