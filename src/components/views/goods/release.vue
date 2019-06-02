<template>
  <div style="position: relative;">
    <div class="shop_audit">
      <h3>审核结果</h3>
      <p>1、商品属性未设置5个及以上</p>
      <p>2、商品名称有错别字</p>
      <p>2、商品名称有错别字</p>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <div>
        <div class="form_wrap">

          <!--商品基本信息-->
          <div class="form_span">
            <span>商品基本信息 </span>
            <i>不知道怎么录入商品？<a href="#">点击查看录入帮助</a></i>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <el-form-item label="商品类目：">
              <span>{{goodsCate.title}}</span>
              <a href="javascript: void(0);" @click="goCateClass" class="release_a">切换类目</a>
            </el-form-item>

            <el-form-item label="商品名称：" prop="shop_name">
              <el-input style="width: 440px;" v-model="ruleForm.shop_name" clearable placeholder="为增加搜索/导购机会，建议输入15字以上"></el-input>
              <label class="shop_count"><i>0</i>/<i>30</i></label>
            </el-form-item>

            <el-form-item label="商品卖点：">
              <el-input
                style="width: 440px;"
                type="textarea"
                :rows="6"
                placeholder="为增加搜索/导购机会，请输入商品的特色、卖点"
                v-model="ruleForm.shop_explain">
              </el-input>
              <label class="shop_count"><i>0</i>/<i>30</i></label>
            </el-form-item>

            <el-form-item label="商品品牌：">
              <el-select v-model="ruleForm.shopBrand" placeholder="请选择" style="width: 440px;">
                <el-option
                  v-for="(item, i) in brandOptions"
                  :key="i"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="release_span1">未找到需要的品牌？</span>
              <a href="#" class="release_a marLeft_0">点此申请</a>
            </el-form-item>

            <el-form-item label="商品自定义分类：" prop="shopClass">
              <el-select v-model="ruleForm.shopClass" placeholder="请选择" style="width: 440px;">
                <el-option
                  v-for="item in classOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <small class="refresh_icon">刷新</small>
              <span class="release_span1">未找到自定义分类？</span>
              <a href="#" class="release_a marLeft_0">点此设置</a>
            </el-form-item>

            <div class="before_span">
              <el-form-item label="商品规格：">
                <div class="specs_box">
                  <div class="specs_top">
                    <span>颜色/型号</span>
                    <p>
                      选择标准颜色可增加搜索/导购机会，标准颜色还可填写颜色备注信息（偏深、偏亮等）
                      建议上传 <i>600*600</i> 像素的图片，支持<i>JPG，JEPG，PNG</i>格式
                    </p>
                  </div>

                  <ul class="specs_color">
                    <li>
                      <div>
                        <span @click="addSpecs">添加</span>
                        <span class="specs_input">
                          <el-input style="width: 350px;" v-model="ruleForm.colorSpecs" @focus="colorFocus" @input="colorChange" @blur="colorBlue" clearable placeholder="请选择或输入规格"></el-input>
                        </span>
                        <label style="height: 40px; overflow: hidden;">
                          <input type="file">
                          <button>上传图片</button>
                        </label>
                        <em>请上传图片</em>

                        <div class="standardColor" v-if="standardColorVisible">
                          <div class="standardColor_box">
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span class="on">标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                            <span>标准色</span>
                          </div>
                        </div>

                        <div class="color" v-if="colorVisible">
                          <div class="color_box">
                            <div class="color_box_left">
                              <span> <small style="background: #fff;"></small> 白色系</span>
                              <span> <small style="background: #000;"></small> 黑色系</span>
                              <span class="on"> <small style="background: #ff0100;"></small> 红色系</span>
                              <span> <small style="background: #ffff00;"></small> 黄色系</span>
                              <span> <small style="background: #008100;"></small> 绿色系</span>
                              <span> <small style="background: #0000ff;"></small> 蓝色系</span>
                              <span> <small style="background: #810081;"></small> 紫色系</span>
                              <span> <small style="background: #7c4a00;"></small> 棕色系</span>
                              <span> <small style="background: #d3a268;"></small> 花色系</span>
                              <span> <small :style="{backgroundImage: 'url(' + transparent_bg + ')' }"></small> 透明系</span>
                            </div>
                            <div class="color_box_right">
                              <h3>常用标准颜色：</h3>
                              <div>
                                <span> <small style="background: #ff7500;"></small> 橘红色</span>
                                <span> <small style="background: #df1b76;"></small> 玫红色</span>
                                <span> <small style="background: #ffb6c1;"></small> 粉红色</span>
                                <span> <small style="background: #ff0000;"></small> 红色</span>
                                <span> <small style="background: #eed0d8;"></small> 藕色</span>
                                <span> <small style="background: #f05654;"></small> 西瓜红</span>
                                <span> <small style="background: #990000;"></small> 酒红色</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div>
                        <span>删除</span>
                        <span class="specs_input">
                          <el-input style="width: 350px;" clearable placeholder="请选择或输入规格"></el-input>
                        </span>
                        <div class="specs_viewer">
                          <viewer :images="['https://picsum.photos/200/200']">
                            <img class="vue-lazyload avatar" v-lazy="`https://picsum.photos/200/200`" alt="" title="点击查看大图">
                          </viewer>
                        </div>
                        <small class="delete_icon"></small>
                      </div>
                    </li>
                  </ul>

                  <div class="size_box">
                    <div class="size_top">
                      <span>尺码</span>
                    </div>
                    <div class="size_center">
                      <span>
                        <el-checkbox>165/80A</el-checkbox>
                      </span>
                      <span>
                        <el-checkbox>170/84A</el-checkbox>
                      </span>
                      <span>
                        <el-checkbox>175/88A</el-checkbox>
                      </span>
                      <span>
                        <el-checkbox>180/92A</el-checkbox>
                      </span>
                      <span>
                        <el-checkbox>185/96A</el-checkbox>
                      </span>
                      <span>
                        <el-checkbox>
                          <el-input style="width: 120px;" clearable placeholder="请输入尺码"></el-input>
                        </el-checkbox>
                        <em>删除</em>
                      </span>
                      <i>+ 添加</i>
                    </div>
                  </div>

                </div>
              </el-form-item>
            </div>

            <el-form-item label="价格及库存：">
              <div class="price_box">
                <div class="price_box_top">
                  <el-button type="primary" @click="batchFilling">批量填写</el-button>
                  <span>请在表格中填写商品价格及库存信息，或者批量填写</span>
                </div>

                <div class="price_box_center">
                  <div class="price_table">
                    <div class="price_table_top">
                      <span>颜色</span>
                      <span>尺码</span>
                      <span><i>*</i>单位</span>
                      <span><i>*</i>原价(元)</span>
                      <span><i>*</i>售价(元)</span>
                      <span><i>*</i>库存</span>
                      <span><i>*</i>商品编码</span>
                      <span>操作</span>
                    </div>
                    <div class="price_table_center">
                      <ul>
                        <li v-for="item in priceTableData">
                          <div>{{item.color}}</div>
                          <ul>
                            <li v-for="specsItem in item.specsList">
                              <span>{{specsItem.size}}</span>
                              <span><input v-model="specsItem.unit" type="text"></span>
                              <span><input v-model="specsItem.originalPrice" type="text"></span>
                              <span><input v-model="specsItem.salePrice" type="text"></span>
                              <span><input v-model="specsItem.stock" type="text"></span>
                              <span><input v-model="specsItem.code" type="text"></span>
                              <span><button type="button">删除</button></span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="price_table_bottom">
                      <div class="price_bottom_left">
                        <i>*</i>单位换算
                      </div>
                      <div class="price_bottom_right">
                        <span>
                          <label><i>*</i> 最小单位</label>
                          <el-select placeholder="请选择" style="width: 100px;">
                            <el-option
                              v-for="item in unitOption"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </span>
                        <span>
                          <el-input style="width: 100px;"></el-input>
                          <span>箱 = </span>
                          <el-input style="width: 100px;"></el-input>
                          <span>瓶</span>
                        </span>
                        <span>
                          <el-input style="width: 100px;"></el-input>
                          <span>打 = </span>
                          <el-input style="width: 100px;"></el-input>
                          <span>瓶</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p>调高售价将提交平台审核 库存为 0 的商品规格，在商品详情页不展示</p>
                </div>
              </div>
            </el-form-item>

            <el-form-item label="商品属性：">
              <div class="shop_attr_box">
                <p>商品属性需要设置5个及以上!错误填写商品属性，可能会引起搜索流量减少，影响您的正常销售，请认真准确填写！</p>
                <div class="shop_attr">
                  <ul>
                    <li v-for="item in shopAttrData">
                      <span> <i v-if="item.isNecessary">*</i> {{item.name}}</span>
                      <span class="shop_attr_select">
                        <input v-if="item.name !== '材质成分'" type="text" v-model="item.value" />

                        <el-select style="width: 370px;" v-if="item.name === '材质成分'" placeholder="" v-model="item.value" multiple>
                          <el-option
                            v-for="item in materialOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="shop_attr_add">
                  <p>如上述列表缺少想要的属性，请自行添加</p>
                  <div>
                    <span>
                      <label>属性名称</label>
                      <el-input style="width: 180px;" clearable placeholder="例如：颜色"></el-input>
                    </span>
                    <span>
                      <label>属性内容</label>
                      <el-input style="width: 180px;" clearable placeholder="例如：深红色"></el-input>
                    </span>
                    <el-button type="primary">添加属性</el-button>
                  </div>
                </div>

              </div>
            </el-form-item>

            <el-form-item label="体积重量：">
              <div class="shop_vh">
                <div>
                  <span>
                    <label> <i>*</i> 包装重量（kg）</label>
                  </span>
                  <el-input style="width: 200px;" clearable></el-input>
                  <span class="tips lineHeight_16">如果未设置商品包邮，运费将按照设置的运费模板里的重量和体积（折算成重量）进行计算</span>
                </div>

                <div>
                  <span>
                    <label> <i>*</i> 包装体积（cm³）</label>
                  </span>
                  <el-input style="width: 100px;" clearable></el-input>
                  <i> - </i>
                  <el-input style="width: 100px;" clearable></el-input>
                  <i> - </i>
                  <el-input style="width: 100px;" clearable></el-input>
                  <span class="tips">体积将换算成重量进行计算，公式为：（长*宽*高）/6000</span>
                </div>
              </div>
            </el-form-item>
          </div>

          <!--商品详情-->
          <div class="form_span">
            <span>商品详情</span>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <div class="shop_detail">
              <div class="shop_detail_left">
                <div class="left_box">
                  <span v-for="item in detailPicData">
                  <span>
                    <i class="on">上移</i>
                    <i>下移</i>
                    <i>
                      <em>替换</em>
                      <input type="file">
                    </i>
                    <i>删除</i>
                  </span>
                  <img :src="item.src" alt="">
                </span>
                </div>
              </div>

              <div class="shop_detail_right">
                <h3>图片上传说明</h3>
                <p>1、图片总张数建议大于 5 张，但不超过 10 张</p>
                <p>2、图片大小：每张图片不可超过 3M</p>
                <p>3，图片尺寸：宽度建议 750 ~ 900 像素之间，所有图片宽度一致，单张图片高度不超过 6000 像素</p>
                <p>4、支持格式：JPG，JEPG，PNG</p>

                <h3 class="marTop_20">图片质量说明：</h3>
                <p>1、请尽量上传商品各个角度拍摄的照片，比如：正面，侧面，背面，内部等</p>
                <p>2、请确保图片美观度高，品质感强，构图明快简洁，商品主体突出，每张图片中不可出现 过多相同主体，建议不大于3个</p>
                <p>3、图片中商品主体完整，不要产品的一部分不在图片中，商品展现比例不要过小，要居中 不要靠边</p>
                <p>4、建议上传商品及包装内附件，比如：商品说明书，品牌证书，配件，以及面料展示等</p>
                <p>5、建议上传商品的使用场景图，引起用户共鸣，增加购买欲望，比如将食品放置在精致餐盘精美餐桌上拍摄</p>

                <div class="marginTop_30 shop_detail_upload">
                  <el-button type="primary">添加图片</el-button>
                  <input type="file">
                </div>
              </div>
            </div>
          </div>

          <!--商品主图-->
          <div class="form_span">
            <span>商品主图</span>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <div class="shop_main_pic">
              <ul> <!--拖动调整图片顺序（vue.Draggable ）-->
                <draggable
                  :list="mainPicData"
                  :disabled="!enabled"
                  class="list-group"
                  ghost-class="ghost"
                  @start="dragging = true"
                  @end="dragging = false"
                >
                  <li v-for="(item, index) in mainPicData">
                    <input type="file" title="点击上传图片" />
                    <img :src="item.src" alt="" title="点击查看大图" />
                    <span v-if="index === 0 && item.src !== ''">商品主图</span>
                    <span v-if="item.src === ''">上传图片</span>
                  </li>
                </draggable>
              </ul>
              <div class="main_pic_tips">
                <h3>图片上传说明</h3>
                <p>1、最少上传3张商品主图，最多上传 5 张商品主图</p>
                <p>2、建议上传 600*600 像素的图片，支持JPG，JEPG，PNG格式</p>
                <p>3、点击拖动调整图片顺序</p>
              </div>
            </div>
          </div>

          <!--商品物流服务-->
          <div class="form_span">
            <span>商品物流服务</span>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <div class="shop_logistics">
              <div class="shop_vh">
                <div>
                  <span>
                    <label>发货地</label>
                  </span>

                  <el-select v-model="ruleForm.shopBrand" placeholder="请选择" style="width: 200px; margin-right: 10px;">
                    <el-option
                      v-for="(item,i) in brandOptions"
                      :key="i"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>

                  <el-select v-model="ruleForm.shopBrand" placeholder="请选择" style="width: 200px;">
                    <el-option
                      v-for="(item,i) in brandOptions"
                      :key="i"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>

                <div>
                  <span>
                    <label>运费模板</label>
                  </span>

                  <el-select v-model="ruleForm.shopBrand" placeholder="请选择" style="width: 200px; margin-right: 10px;">
                    <el-option
                      v-for="(item,i) in brandOptions"
                      :key="i"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <small class="refresh_icon">刷新</small>
                  <a href="#" class="release_a" style="margin-left: 20px;">点此前往设置</a>
                </div>

                <div class="logistics_tips">
                  <p>大部分地区：首重10元 /kg ， 续重3元/kg ，偏远地区除外<a href="#">查看详情</a></p>
                </div>

                <div class="logistics_mark">
                  <p>此模板运费已超出快递公司统一标准20%，建议使用快递公司统一收费标准设置商品运费</p>
                </div>

                <div>
                  <span>
                    <label> <i>*</i> 物流重量（kg）</label>
                  </span>
                  <el-input style="width: 200px;" clearable></el-input>
                  <span class="tips">当前运费模板，按物流重量（含包装）计费</span>
                </div>

                <div>
                  <span>
                    <label> <i>*</i> 物流体积（cm³）</label>
                  </span>
                  <el-input style="width: 100px;" clearable></el-input>
                  <i> - </i>
                  <el-input style="width: 100px;" clearable></el-input>
                  <i> - </i>
                  <el-input style="width: 100px;" clearable></el-input>
                  <span class="tips lineHeight_16">当前运费模板，按物流重量（含包装）计费。体积将换算成重量进行计算，公式为：（长*宽*高）/6000</span>
                </div>
              </div>
            </div>
          </div>

          <!--安装服务-->
          <div class="form_span">
            <span>安装服务</span>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <div class="shop_vh">
              <div>
                <span>
                  <label></label> <!--用于占位-->
                </span>

                <el-radio-group v-model="taxationValue">
                  <el-radio :label="1">提供安装服务</el-radio>
                  <el-radio :label="2">不提供安装服务</el-radio>
                </el-radio-group>
              </div>

              <div>
                <span>
                  <label>安装模板</label>
                </span>

                <el-select v-model="ruleForm.shopBrand" placeholder="请选择" style="width: 300px; margin-right: 10px;">
                  <el-option
                    v-for="(item,i) in brandOptions"
                    :key="i"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <a href="#" class="release_a" style="margin-left: 10px;">点击前往设置</a>
              </div>
            </div>
          </div>

          <!--服装裁剪服务-->
          <div class="form_span">
            <span>服装裁剪服务</span>
            <em>请选择店铺所支持的服务，裁剪后不能退换货</em>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <div class="shop_tailoring">
              <div>
                <el-checkbox>裤脚裁剪费用（元）</el-checkbox>
                <el-input style="width: 100px;"></el-input>
              </div>

              <div>
                <el-checkbox>裤腰裁剪费用（元）</el-checkbox>
                <el-input style="width: 100px;"></el-input>
              </div>
            </div>
          </div>

          <!--全球购商品-->
          <div class="form_span">
            <span>全球购商品</span>
          </div>
          <div class="form_box" style="margin-bottom: 20px;">
            <div class="shop_vh">
              <div>
                <span>
                  <label>国家或地区</label>
                </span>

                <el-select v-model="ruleForm.shopBrand" placeholder="请选择" style="width: 440px; margin-right: 10px;">
                  <el-option
                    v-for="(item,i) in brandOptions"
                    :key="i"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div>
                <span style="position: relative; top: -110px;">
                  <label>中国说明书</label>
                </span>

                <el-input
                  style="width: 440px;"
                  type="textarea"
                  :rows="6"
                  placeholder="请输入说明书">
                </el-input>
              </div>

              <div>
                <span>
                  <label>税费</label>
                </span>

                <el-radio-group v-model="taxationValue">
                  <el-radio :label="1">商家承担</el-radio>
                  <el-radio :label="2">额外税费需用户承担</el-radio>
                </el-radio-group>
              </div>

              <div>
                <span>
                  <label>保险</label>
                </span>

                <el-input style="width: 200px;"></el-input>
                <span class="tips">金额（元）</span>
              </div>

              <div>
                <span>
                  <label></label> <!--用于占位-->
                </span>

                <el-radio-group v-model="taxationValue">
                  <el-radio :label="1">商家承保</el-radio>
                  <el-radio :label="2">商家代买，用户需额外支付保险费用</el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>

          <!--服无承诺-->
          <div class="form_span">
            <span>服无承诺</span>
          </div>
          <div class="form_box">
            <div class="shop_service">
              <div class="service_part1">
                <div>
                  <span class="icon1">
                    <i>正品保障</i>
                    <i>保证出售商品是正品</i>
                  </span>
                </div>
                <div>
                  <span class="icon2">
                    <i>售后包修服务</i>
                    <i>提供售后保修期包修服务</i>
                  </span>
                </div>
              </div>

              <div class="service_part2">
                <div>
                  <label>请选择服务承诺：</label>
                  <el-checkbox>支持七天无理由退</el-checkbox>
                </div>
                <div>
                  <label>请选择售后保修服务：</label>
                  <!--<el-radio-group v-model="serviceValue">
                    <el-radio :label="1">全国联保</el-radio>
                    <el-radio :label="2">商家售后</el-radio>
                  </el-radio-group>-->
                </div>
              </div>

              <div class="service_part3">
                <p>一、售后服务规则</p>
                <p>1、正品保障：我们承诺：平台上所售商品均为正品行货，并由平台商家提供相应的售后服务，其中符合全国联保均有注明。请您放心购买！</p>
                <p>2、提供发票：对于在满集网平台购物的买家均提供商品发票。</p>
                <p>3、七天无忧退换货：该商品自签收之日起7天内支持7天无理由退货：</p>
                 <p>（1）商品外包装完整，（若有）塑封包装未拆封；相关附（配）件齐全；</p>
                 <p>（2）商品表面无划痕、无磨损、无磕碰、无使用、无拆卸等痕迹；（若有）原厂屏幕贴膜不能被撕毁；</p>
                 <p>（3）（若有）防伪标识码未刮开或撕损；</p>
                 <p>（4）可申请无理由退货，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。</p>
                 <p>（5）具体详情请仔细阅读《食品茶酒至宠物用品退换货规则》</p>
                <p>4、售后保修服务：</p>
                 <p>商家售后：客户在满集网购买商品后，除按照《中华人民共和国产品质量法》、《中华人民共和国消费者权益保护法》以及国家关于产品修理、更换、退货的规定，享受商家提供的相应服务。</p>
                 <p>温馨提示：若商家不履行上诉服务义务，满集网将按照《满集网商家管理办法》进行相应处理。客户在购物过程中对商家服务不满意，可向满集网发起投诉，满集网将依据客观事实，公正且透明的处理，保障双方的正当权益。</p>
              </div>

              <div class="service_part2">
                <el-checkbox>是否是季节性商品</el-checkbox>
              </div>

            </div>
          </div>
        </div>

        <div class="marginTop_30">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">发布商品</el-button>
            <span class="btn_draft">
              <div class="exist_draft" v-if="isShowDraft" @mouseenter="showDraft" @mouseleave="hideDraft">
                <p>你在当前目录下的草稿（<span>1</span>）</p>
                <ul>
                  <li>
                    <span class="color_00a2ff">测试</span>
                    <i class="delete_draft">删除</i>
                  </li>
                  <li>
                    <span>2017-10-27</span>
                    <i>14:24:12</i>
                  </li>
                </ul>
              </div>

              <el-button>
                <span class="release_btn">
                  <span>
                    <span @click="saveDraft">
                      <i>保存草稿</i>
                      <em>最多是10条</em>
                    </span>
                    <small @mouseenter="showDraft" @mouseleave="hideDraft"></small>
                  </span>
                  <small>3</small>
                </span>
              </el-button>
            </span>
            <el-button @click="goBack">上一步</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>

    <!--价格及库存批量填写的弹框-->
    <el-dialog
      title="批量填写"
      :visible.sync="dialogFormVisible"
      width="600px">
      <el-form :model="form">
        <el-form-item label="原价：" label-width="100px">
          <el-input v-model="form.originalPrice"></el-input>
        </el-form-item>
        <el-form-item label="售价：" label-width="100px">
          <el-input v-model="form.salePrice"></el-input>
        </el-form-item>
        <el-form-item label="库存：" label-width="100px">
          <el-input v-model="form.stock"></el-input>
        </el-form-item>
        <el-form-item label="商品编码：" label-width="100px">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!--发布商品时，上传了资质证件的弹框-->
    <!--<el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="500px">
      <span>修改信息将提交平台审核，确定提交公司信息变更吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitData">确 定</el-button>
      </span>
    </el-dialog>-->

    <!--发布商品时，没有上传资质证件的弹框-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="780px">

      <div class="uploadDialog">
        <h3>该商品需上传以下资质证件，否则将审核不通过</h3>
        <p>如有疑问请致电全国统一服务热线：400-6766-999</p>
        <div class="upload">
          <div>
            <viewer :images="['https://picsum.photos/600/500']">
              <img class="vue-lazyload avatar" v-lazy="`https://picsum.photos/340/200`" alt="" title="点击查看大图">
            </viewer>
            <span>
              <i>婴儿食品：食品经营许可证/食品流通许可证</i>
              <label>
                <button>点击上传</button>
                <input type="file" title="请选择图片" />
              </label>
            </span>
          </div>

          <div>
            <viewer :images="['https://picsum.photos/600/500']">
              <img class="vue-lazyload avatar" v-lazy="`https://picsum.photos/340/200`" alt="" title="点击查看大图">
            </viewer>
            <span>
              <i>婴儿食品：食品经营许可证/食品流通许可证</i>
              <label>
                <button>点击上传</button>
                <input type="file" title="请选择图片" />
              </label>
            </span>
          </div>
        </div>
        <span class="tips">资质证件图片上传要求：尺寸800x800像素以上、大小不超过5M的正方形图片若使用手机照，请采用横屏拍摄，请确保图片清晰。</span>
        <div class="upload_btn">
          <el-button type="default" @click="dialogVisible = false">仅发布商品，稍后上传证件</el-button>
          <el-button type="primary" @click="dialogVisible = false">提交证件，并发布商品</el-button>
        </div>
      </div>
    </el-dialog>

    <!--输入草稿名称弹框-->
    <el-dialog
      title="草稿名称"
      :visible.sync="draftVisible"
      width="500px">
      <div>
        <el-input placeholder="请输入草稿名称"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="draftVisible = false">取 消</el-button>
        <el-button type="primary" @click="draftVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import draggable from "vuedraggable";

  export default {
    components: {
      draggable
    },
    data () {
      return {
        goodsCate: '',
        dialogVisible: false, // 点击修改时的确认提示
        draftVisible: false, // 设置草稿名称弹框
        isShowDraft: false, // 当前草稿箱是否显示
        ruleForm: {
          shop_name: '',
          shop_explain: '',
          shopBrand: '选项1',
          shopClass: '',
          colorSpecs: '',
        },
        rules: {
          shop_name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
          ],
          shopClass: [
            { required: true, message: '请选择商品自定义分类', trigger: 'change' },
          ]
        },

        brandOptions: [{ // 商品品牌选项
          value: '选项1',
          label: '宝马'
        }, {
          value: '选项2',
          label: '奔驰'
        }],

        classOptions: [{ // 商品自定义分类选项
          value: '选项1',
          label: '服装/女装'
        }, {
          value: '选项2',
          label: '服装/男装'
        }],

        transparent_bg: require('./img/transparent_icon.png'),
        standardColorVisible: false,
        colorVisible: false,

        priceTableData: [{ // 价格及库存数据
          color: '黑色',
          specsList: [
            {
              size: '165/80A',
              unit: '',
              originalPrice: '',
              salePrice: '',
              stock: '',
              code: '',
            }, {
              size: '170/84A',
              unit: '',
              originalPrice: '',
              salePrice: '',
              stock: '',
              code: '',
            }, {
              size: '175/88A',
              unit: '',
              originalPrice: '',
              salePrice: '',
              stock: '',
              code: '',
            }
          ]
        }, {
          color: '红色',
          specsList: [
            {
              size: '165/80A',
              unit: '',
              originalPrice: '',
              salePrice: '',
              stock: '',
              code: '',
            }
          ]
        }],

        unitOption: [{ // 单位选择的数据
          value: '选项1',
          label: '瓶'
        }, {
          value: '选项2',
          label: '箱'
        }, {
          value: '选项3',
          label: '打'
        }],
        dialogFormVisible: false, // 批量填写弹框
        form: {
          originalPrice: '',
          salePrice: '',
          stock: '',
          code: ''
        },

        shopAttrData: [{ // 商品属性数据
          name: '尺寸',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '主要颜色',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '是否商场同款',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '材质成分',
          value: '',
          type: '',
          isNecessary: true
        }, {
          name: '袖长',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '销售渠道类型',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '货号',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '上市时间',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '产地',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '适用对象',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '材质',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '领型',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '休闲衣类别',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '商品系列',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '适用季节',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '衣长',
          value: '',
          type: '',
          isNecessary: true
        }, {
          name: '基础风格',
          value: '',
          type: '',
          isNecessary: false
        }, {
          name: '季节',
          value: '',
          type: '',
          isNecessary: true
        }],

        materialOptions: [{ // 材质成分下拉选项
          value: '选项1',
          label: '绵'
        }, {
          value: '选项2',
          label: '麻'
        }, {
          value: '选项3',
          label: '蚕丝'
        }, {
          value: '选项4',
          label: 'LYCRA莱卡'
        }, {
          value: '选项5',
          label: '粘胶'
        }],

        detailPicData: [{ // 商品详情图片数据
          src: 'https://picsum.photos/id/237/200/300'
        }, {
          src: 'https://picsum.photos/200'
        }],

        mainPicData: [{ // 商品主图图片数据
          src: 'https://picsum.photos/id/237/200/300'
        }, {
          src: 'https://picsum.photos/200'
        }, {
          src: 'https://picsum.photos/200'
        }, {
          src: 'https://picsum.photos/200'
        }, {
          src: ''
        }],
        enabled: true, // 图片拖动参数
        dragging: false,

        taxationValue: 1, // 税费（全球购模块）
        serviceValue: 1, // 售后保修服务值

      };
    },

    methods: {
      /**
       * 表单提交
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid,x) => {
          console.log(x);
          console.log(formName, "formName==================");
          if (valid) {
            alert('submit!');
            this.dialogVisible = true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /**
       *
       */
      goCateClass() {
        this.$router.push({ name: 'GoodsReleaseClass' })
      },

      /**
       * 请求接口，提交数据
       */
      submitData() {
        this.dialogVisible = false;
        this.$message({ message: '修改成功', type: 'success' });
      },

      /**
       * 添加商品规格
       */
      addSpecs () {
        console.log(123);
      },

      /**
       * 颜色规格获取焦点事件
       */
      colorFocus () {
        this.colorVisible = true;
        this.standardColorVisible = false;
      },

      /**
       * 颜色规格改变事件
       */
      colorChange () {
        if (this.ruleForm.colorSpecs === '') {
          this.standardColorVisible = false;
          this.colorVisible = true;
        } else {
          this.standardColorVisible = true;
          this.colorVisible = false;
        }
      },

      /**
       * 颜色规格失去焦点事件
       */
      colorBlue () {
        this.standardColorVisible = false;
        this.colorVisible = false;
      },

      /**
       * 批量填写事件
       */
      batchFilling () {
        this.dialogFormVisible = true;
      },

      /**
       * 保存草稿事件
       */
      saveDraft () {
        this.draftVisible = true;
      },

      /**
       * 当前草稿箱显示
       */
      showDraft () {
        this.isShowDraft = true;
      },

      /**
       * 当前草稿箱隐藏
       */
      hideDraft () {
        this.isShowDraft = false;
      },

      /**
       * 上一步（返回）
       */
      goBack() {
        this.$router.go( -1 );
      },
    },
    created() {
      this.goodsCate = JSON.parse(sessionStorage.getItem('goodsCate'));
    },
  }
</script>

<style lang="less" scoped>
  @import "./less/release.less";
</style>
