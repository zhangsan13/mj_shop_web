<template>
  <div>
    <div class="main_message">
      <div>
        <h3>商品调价</h3>
        <p><span>5</span> 个改价待审核</p>
        <p><span>5</span> 个改价审核未通过，价格未更新</p>
        <p><span>5</span> 个改动审核已通过，价格已更新 <a href="javascript: void(0);" @click="modifyPriceDetailVisible = true">查看详情</a></p>
      </div>

      <div>
        <h3>商品上架提醒</h3>
        <p>【go脆香脆面...】，上架提醒日期为：2017-09-18</p>
        <div>
          <a href="javascript: void(0);" @click="shelfReminderVisible = true">查看全部</a>
        </div>
      </div>
    </div>
    <div class="main_table">
      <!--操作按钮切换 start-->
      <div class="main_top">
        <div class="radio_left">
          <el-radio-group v-model="queryCondition.type" @change="initTableDataByGoods()">
            <el-radio-button label="0" :value="0">出售中的商品({{GoodsStatisticeCount.onOffer}})</el-radio-button>
            <el-radio-button label="1" :value="1">仓库中的商品({{GoodsStatisticeCount.warehouse}})</el-radio-button>
            <el-radio-button label="2" :value="2">强制下架的商品({{GoodsStatisticeCount.soldOut}})</el-radio-button>
            <el-radio-button label="3" :value="3">待核对商品({{GoodsStatisticeCount.awaitAudit}})</el-radio-button>
          </el-radio-group>
        </div>

        <div class="radio_left">
          <span>商品总数：20</span>
        </div>

        <div class="radio_right">
          <a href="javascript: void(0);" @click="goRecycleBin">商品回收站</a>
        </div>
      </div>
      <!--操作按钮切换 end-->

      <!--条件筛选开始-->
      <div class="screen">
        <el-form :inline="true" class="demo-form-inline" label-width="120px">

          <el-form-item label="商品分类：">
            <el-cascader
              :options="shopOptions"
              :show-all-levels="false">
            </el-cascader>
          </el-form-item>

          <el-form-item label="自定义分类：">
            <el-select v-model="customValue" placeholder="请选择">
              <el-option
                v-for="(item, i) in customOptions"
                :key="i"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="商品名称：">
            <el-input placeholder="请输入商品名称" v-model="queryCondition.title"></el-input>
          </el-form-item>

          <el-form-item label="审核状态：">
            <el-select v-model="queryCondition.auditState" placeholder="请选择">
              <el-option
                v-for="(item, i) in auditOptions"
                :key="i"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="销售价：">
            <el-input style="width: 92px" v-model="queryCondition.minSellPrice"></el-input>
            <span style="display: inline-block; margin: 0 6px;">到</span>
            <el-input style="width: 92px" v-model="queryCondition.maxSellPrice"></el-input>
          </el-form-item>

          <el-form-item label="已售数量：">
            <el-input style="width: 92px" v-model="queryCondition.minSellCount"></el-input>
            <span style="display: inline-block; margin: 0 6px;">到</span>
            <el-input style="width: 92px" v-model="queryCondition.maxSellCount"></el-input>
          </el-form-item>

          <el-form-item>
            <div class="searchMean">
              <el-checkbox v-model="queryCondition.isJoinActivity">参加活动商品</el-checkbox>
            </div>
          </el-form-item>

          <el-form-item>
            <div class="searchMean">
              <el-button type="primary" @click="initTableDataByGoods()">搜索商品</el-button>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="default">导出库存</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="default">导入库存</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="default" @click="upperShelf">已核对，批量上架</el-button>
          </el-form-item>

          <el-form-item>
            <div class="searchMean">
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="cate">批量设置自定义分类</el-dropdown-item>
                  <el-dropdown-item command="stock">批量设置库存</el-dropdown-item>
                  <el-dropdown-item command="price">批量调整价格</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <!--条件筛选结束-->

      <!--表格 start-->
      <div class="table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            align="center"
            width="55">
          </el-table-column>

          <el-table-column
            label="商品图片"
            fixed
            align="center"
            width="80">
            <template slot-scope="scope">
              <viewer :images="scope.row.pic">
                <img class="vue-lazyload pic" v-lazy="scope.row.img" alt="" title="点击查看大图">
              </viewer>
            </template>
          </el-table-column>

          <el-table-column
            label="商品名称"
            align="center"
            width="320">
            <template slot-scope="scope">
              <div class="shopName">
                <p style="text-align: left;">
                  <a href="javascript: void(0);" @click="goDetail">{{scope.row.title}}</a>
                  <span v-show="scope.row.isJoinActivity == 1" class="acitivity">活动中</span>
                </p>
                <i class="el-icon-edit" @click="uploadShopNameVisible = true"></i>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            label="自定义分类"
            align="center"
            width="110">
            <template slot-scope="scope">
              <div class="shopName">
                <p style="width: 56px; text-align: center;">
                  <em>{{scope.row.userCategory}}</em>
                </p>
                <i class="el-icon-edit" @click="setCustomizationVisible = true"></i>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            label="已售数量">
            <template slot-scope="scope">
              <a style="text-decoration: underline;" href="javascript: void(0);" @click="sellDetailVisible = true">{{scope.row.sellCount}}</a>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            label="市场价(元)">
            <template slot-scope="scope">
              <div>{{scope.row.marketPrice}}</div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            label="销售价(元)">
            <template slot-scope="scope">
              <div>{{scope.row.sellPrice}}</div>
            </template>
          </el-table-column>

          <el-table-column
            label="库存"
            align="center"
            width="110">
            <template slot-scope="scope">
              <div class="shopName">
                <p style="width: 60px;"><em>{{scope.row.store}}</em></p>
                <i class="el-icon-edit" @click="modifyPriceVisible = true"></i>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            label="更新时间">
            <template slot-scope="scope">
              <div>{{scope.row.updateTime}}</div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            label="审核状态">
            <template slot-scope="scope">
              <div>{{scope.row.statusDesc}}</div>
            </template>
          </el-table-column>

          <el-table-column
            label="操作"
            align="center"
            fixed="right"
            width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="commodityShelvesVisible = true">下架</el-button>
              <el-button size="mini" type="text" @click="edit">编辑</el-button>
              <el-button size="mini" type="text" @click="deleteVisible = true">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--表格 end-->

      <!--页码开始-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 30, 50, 100]"
          :page-size="page.currentPageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.listTotal">
        </el-pagination>
      </div>
      <!--页码结束-->
    </div>

    <!--商品调价详情弹框 start-->
    <el-dialog
      title="商品调价详情"
      :visible.sync="modifyPriceDetailVisible"
      width="85%">
      <div class="modifyPriceDetail_box">
        <el-table
          :data="modifyPriceData"
          :span-method="modifyPriceMethod"
          border
          style="width: 100%;">
          <el-table-column
            label="商品名称"
            align="center"
            width="180">
            <template slot-scope="scope">
              <a style="text-decoration: underline;" href="javascript: void(0);" @click="goDetail">{{scope.row.name}}</a>
            </template>
          </el-table-column>
          <el-table-column
            prop="rules"
            label="商品规格"
            align="center">
          </el-table-column>
          <el-table-column
            prop="originalSellPrice"
            label="原售价（元）"
            align="center">
          </el-table-column>
          <el-table-column
            prop="auditSellPrice"
            label="申请售价（元）"
            align="center">
          </el-table-column>
          <el-table-column
            prop="state"
            label="审核状态"
            align="center">
          </el-table-column>
          <el-table-column
            prop="reason"
            label="原因"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="modifyPriceDetailVisible = false">知道了</el-button>
        </span>
    </el-dialog>
    <!--商品调价详情弹框 end-->

    <!--商品上架提醒弹框 start-->
    <el-dialog
      title="商品上架提醒"
      :visible.sync="shelfReminderVisible"
      width="600px">
      <div class="modifyPriceDetail_box">
        <el-table
          :data="shelfReminderData"
          border
          style="width: 100%;">
          <el-table-column
            label="商品"
            align="center">
            <template slot-scope="scope">
              <a style="text-decoration: underline;" href="javascript: void(0);" @click="goDetail">{{scope.row.name}}</a>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="上架提醒日期"
            align="center"
            width="180">
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="shelfReminderVisible = false">知道了</el-button>
        </span>
    </el-dialog>
    <!--商品上架提醒弹框 end-->

    <!--批量设置自定义分类弹框 start-->
    <el-dialog
      title="批量设置自定义分类 [已选38个商品]"
      :visible.sync="settingCustomizationVisible"
      width="600px">
      <el-form>
        <el-form-item label="一级分类：" label-width="120px">
          <el-select style="width: 350px;" v-model="cateValue" placeholder="请选择">
            <el-option
              v-for="item in firstCateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类：" label-width="120px">
          <el-select style="width: 350px;" v-model="cateValue" placeholder="请选择">
            <el-option
              v-for="item in firstCateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <div class="settingCustomization_div">
          <span class="icon">未找到自定义分类？</span>
          <a href="#">点击设置分类</a>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="settingCustomizationVisible = false">取 消</el-button>
        <el-button type="primary" @click="settingCustomizationVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--批量设置自定义分类弹框 end-->

    <!--批量设置库存弹框 start-->
    <el-dialog
      title="批量设置库存 [已选38个商品]"
      :visible.sync="setStockVisible"
      width="600px">
      <el-form>
        <el-form-item label="库存：" label-width="120px">
          <el-input style="width: 300px;"></el-input>
        </el-form-item>
        <div class="settingCustomization_div">
          <span>设置后，已选择的商品每个规格的库存将调整至填写数字，请谨慎操作</span>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setStockVisible = false">取 消</el-button>
        <el-button type="primary" @click="setStockVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--批量设置库存弹框 end-->

    <!--批量调整售价弹框 start-->
    <el-dialog
      title="批量调整售价 [已选38个商品，其中有两个是平台活动商品，不能调价]"
      :visible.sync="setPriceVisible"
      width="650px">
      <el-form>
        <el-form-item label="讲价百分比：" label-width="120px">
          <el-input style="width: 200px;"></el-input>
          <span class="color_666"> % </span>
        </el-form-item>
        <div class="settingCustomization_div">
          <span>设置后，已选择的商品每个规格的价格将会调低相应百分比，请谨慎操作！
            <br/>
            例如售价10.00元，降价百分比为10%，则调价后，售价为9.00元</span>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setPriceVisible = false">取 消</el-button>
        <el-button type="primary" @click="setPriceVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--批量调整售价弹框 end-->

    <!--修改商品名称弹框 start-->
    <el-dialog
      title="修改商品名称"
      :visible.sync="uploadShopNameVisible"
      width="600px">
      <el-form>
        <el-form-item label="商品名称：" label-width="120px">
          <div>
            <el-input style="width: 350px;" v-model="shopName"></el-input>
            <span class="color_666">
              <i class="color_ff1f02">12</i> /
              <i class="color_333">30</i>
            </span>
            <p style="color: #ff1f02;">请输入商品名称</p>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="uploadShopNameVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadShopNameVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--修改商品名称弹框 end-->

    <!--修改自定义分类弹框 start-->
    <el-dialog
      title="修改自定义分类"
      :visible.sync="setCustomizationVisible"
      width="600px">
      <el-form>
        <el-form-item label="一级分类：" label-width="120px">
          <el-select style="width: 350px;" v-model="cateValue" placeholder="请选择">
            <el-option
              v-for="item in firstCateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类：" label-width="120px">
          <el-select style="width: 350px;" v-model="cateValue" placeholder="请选择">
            <el-option
              v-for="item in firstCateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <div class="settingCustomization_div">
          <span class="icon">未找到自定义分类？</span>
          <a href="#">点击设置分类</a>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setCustomizationVisible = false">取 消</el-button>
        <el-button type="primary" @click="setCustomizationVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--修改自定义分类弹框 end-->

    <!--已售数量弹框 start-->
    <el-dialog
      title="售卖详情"
      :visible.sync="sellDetailVisible"
      width="800px">
      <div class="sellDetail">
        <div class="top">
          <div class="left">
            <div>
              <img src="https://picsum.photos/id/237/200/300" alt="">
            </div>
            <p>六类网线纯铜扁平千兆电脑成品网络线宽带 5 10 20 15 30 50米m超</p>
          </div>
          <div class="right">
            <span>总售量：1500</span>
            <span>总库存：23000</span>
          </div>
        </div>

        <div>
          <el-table
            :data="sellDetailData"
            style="width: 100%">
            <el-table-column
              prop="no"
              label="编号"
              align="center">
            </el-table-column>
            <el-table-column
              prop="specs"
              label="商品规格"
              align="center">
            </el-table-column>
            <el-table-column
              prop="saled"
              align="center"
              label="已售量">

            </el-table-column>
            <el-table-column
              prop="marketPrice"
              align="center"
              label="市场价(元)">
            </el-table-column>
            <el-table-column
              prop="sellPrice"
              align="center"
              label="销售价(元)">
            </el-table-column>
            <el-table-column
              prop="stock"
              align="center"
              label="库存">
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="sellDetailVisible = false">取 消</el-button>
        <el-button type="primary" @click="sellDetailVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--已售数量弹框 end-->

    <!--调价弹框 start-->
    <el-dialog
      title="调价"
      :visible.sync="modifyPriceVisible"
      width="800px">
      <div class="sellDetail">
        <div class="top">
          <div class="left">
            <div>
              <img src="https://picsum.photos/id/237/200/300" alt="">
            </div>
            <p>六类网线纯铜扁平千兆电脑成品网络线宽带 5 10 20 15 30 50米m超</p>
          </div>
        </div>

        <div class="opera">
          <span>
            <label>市场价(元)：</label>
            <el-input style="width: 120px;"></el-input>
          </span>

          <span>
            <label>销售价(元)：</label>
            <el-input style="width: 120px;"></el-input>
          </span>

          <span>
            <label>库存：</label>
            <el-input style="width: 120px;"></el-input>
          </span>

          <span>
            <el-button type="primary">批量设置</el-button>
          </span>
        </div>

        <div>
          <el-table
            :data="sellDetailData"
            style="width: 100%">
            <el-table-column
              prop="no"
              label="编号"
              align="center"
              width="80">
            </el-table-column>
            <el-table-column
              prop="specs"
              label="商品规格"
              align="center"
              width="160">
            </el-table-column>
            <el-table-column
              prop="marketPrice"
              align="center"
              label="市场价(元)">
              <template slot-scope="scope">
                <div class="inputAlign">
                  <el-tooltip class="item" effect="dark" :value="true" content="高于当前价30%" placement="top">
                    <el-input v-model="scope.row.marketPrice"></el-input>
                  </el-tooltip>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="sellPrice"
              align="center"
              label="销售价(元)">
              <template slot-scope="scope">
                <div class="inputAlign">
                  <el-tooltip class="item" effect="dark" :value="true" content="高于当前价30%" placement="top">
                    <el-input v-model="scope.row.sellPrice"></el-input>
                  </el-tooltip>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="stock"
              align="center"
              label="库存">
              <template slot-scope="scope">
                <div class="inputAlign">
                  <el-tooltip class="item" effect="dark" :value="true" content="高于当前价30%" placement="top">
                    <el-input v-model="scope.row.stock"></el-input>
                  </el-tooltip>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyPriceVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifyPriceSure">确 定</el-button>
      </div>
    </el-dialog>
    <!--调价弹框 end-->

    <!--调价确定提示弹框 start-->
    <el-dialog
      title="提示"
      :visible.sync="sureModifyPriceVisible"
      width="600px">
      <div class="commodityShelves">
        <el-form>
          <div class="p_style">
            <p>温馨提示：下架商品后，您也可以手动上架该商品</p>
            <p class="color_dd0000">核价通过后售价将更新，不通过则不更新售价</p>
            <p>确定提交吗？</p>
          </div>

          <el-form-item>
            <div>
              <el-input rows="6" type="textarea" placeholder="请输入调价原因"></el-input>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="sureModifyPriceVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureModifyPrice">确 定</el-button>
      </div>
    </el-dialog>
    <!--调价确定提示弹框 end-->

    <!--商品下架弹框 start-->
    <el-dialog
      title="商品下架"
      :visible.sync="commodityShelvesVisible"
      width="600px">
      <div class="commodityShelves">
        <el-form>
          <div class="p_style">
            <p>温馨提示：下架商品后，您也可以手动上架该商品</p>
          </div>

          <div class="radio_btn">
            <el-radio-group v-model="commodityShelvesReason">
              <el-radio :label="1">暂时下架</el-radio>
              <el-radio :label="2">永久下架</el-radio>
            </el-radio-group>
          </div>

          <div v-if="commodityShelvesReason === 2">
            <div class="checkbox_style">
              <span><el-checkbox>不经营此商品</el-checkbox></span>
              <span><el-checkbox>过季，商品下架</el-checkbox></span>
              <span><el-checkbox>店面暂停营业</el-checkbox></span>
              <span><el-checkbox v-model="commodityShelvesOther">其他</el-checkbox></span>
            </div>

            <el-form-item v-if="commodityShelvesOther">
              <el-input rows="6" type="textarea" placeholder="请输入下架原因（必填）"></el-input>
            </el-form-item>
          </div>

          <div class="style_span" v-if="commodityShelvesReason === 1">
            <span class="marRight_10">请于</span>
            <el-date-picker
              v-model="commodityTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
            <span class="marLeft_10">提醒我上架该商品</span>
          </div>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="commodityShelvesVisible = false">取 消</el-button>
        <el-button type="primary" @click="commodityShelvesVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--商品下架弹框 end-->

    <!--删除弹框 start-->
    <el-dialog
      title="删除"
      :visible.sync="deleteVisible"
      width="600px">
      <div class="commodityShelves">
        <el-form>
          <div class="p_style">
            <p>温馨提示：删除后，您可以在商品回收站还原商品信息</p>
          </div>

          <p class="">请选择删除原因：</p>
          <div style="padding: 20px 20px 0;">
            <div class="checkbox_style">
              <span><el-checkbox>不经营此商品</el-checkbox></span>
              <span><el-checkbox>过季，商品下架</el-checkbox></span>
              <span><el-checkbox>店面暂停营业</el-checkbox></span>
              <span><el-checkbox>生产厂家停产</el-checkbox></span>
              <span><el-checkbox v-model="deleteOther">其他</el-checkbox></span>
            </div>

            <el-form-item v-if="deleteOther">
              <el-input rows="6" type="textarea" placeholder="请输入删除原因（必填）"></el-input>
            </el-form-item>
          </div>

        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--删除弹框 end-->

    <!--上架弹框 start-->
    <el-dialog
      title="提示【已选38个商品】"
      :visible.sync="upperShelfVisible"
      width="500px">
      <p>是否已确定商品售价，并上架商品？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="upperShelfVisible = false">取 消</el-button>
        <el-button type="primary" @click="upperShelfVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--上架弹框 end-->

  </div>
</template>

<script>

    import GoodsList from '../../../api/goods/goodsList';
    import GoodsStatisticeCount from '../../../api/goods/goodsStatisticeCount';

  export default {

    data () {
      return {
        radioValue: '出售中的商品(120)',
        // 搜索条件-商品分类的选项
        shopOptions: [{
          value: 'wristWatch',
          label: '腕表眼镜',
          children: [{
            value: 'zhongbiao',
            label: '钟表',
            children: [{
              value: 'huaibiao',
              label: '怀表'
            }]
          }, {
            value: 'peijian',
            label: '配件',
            children: [{
              value: 'biaohe',
              label: '表盒表带'
            }]
          }]
        }, {
          value: 'xiangbao',
          label: '服饰箱包',
          children: [{
            value: 'fushi',
            label: '服饰配件',
            children: [{
              value: 'xiukou',
              label: '袖扣'
            }, {
              value: 'lingdaitou',
              label: '领带夹'
            }]
          }]
        }, {
          value: 'xiexue',
          label: '精品鞋靴',
          children: [{
            value: 'lvTongXie',
            label: '运动鞋'
          }]
        }],
        customOptions: [{ // 搜索条件-自定义分类的选项
          value: '1',
          label: '母婴用品'
        }, { // 搜索条件-自定义分类的选项
          value: '2',
          label: '珠宝首饰'
        }],
        customValue: '', // 搜索条件-自定义分类的值
        auditOptions: [],
        //auditValue: '', // 搜索条件-审核状态的值

        tableData: [{ // 表格数据
          pic: 'https://picsum.photos/id/237/200/300',
        }],
        multipleSelection: [], // 表格全选参数
        currentPage: 1,
        modifyPriceDetailVisible: false, // 调价审核详情弹框显示
        modifyPriceData: [
          {
            shop_number: '20190411',
            name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
            rules: '红色，XXL',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            state: '通过',
            reason: '---'
          }, {
            shop_number: '20190411',
            name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
            rules: '红色，XXL',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            state: '通过',
            reason: '---'
          }, {
            shop_number: '20190411',
            name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
            rules: '红色，XXL',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            state: '未通过',
            reason: '价格过高'
          }, {
            shop_number: '20190412',
            name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
            rules: '红色，XXL',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            state: '通过',
            reason: '---'
          }, {
            shop_number: '20190412',
            name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
            rules: '红色，XXL',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            state: '通过',
            reason: '---'
          }
        ],
        rowIndex: '-1',
        OrderIndexArr: [], // 存放需要合并的项（调价审核）
        shelfReminderVisible: false, // 商品上架提醒弹框显示
        shelfReminderData: [{
          name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
          time: '2019-01-12'
        }, {
          name: '盐源苹果10KG礼盒装过节送礼亲人朋友家人',
          time: '2019-04-22'
        }],
        settingCustomizationVisible: false, // 批量设置自定义分类弹框显示
        firstCateOptions: [{
          value: 'value1',
          label: '女装'
        }, {
          value: 'value2',
          label: '男装'
        }],
        cateValue: '',
        setStockVisible: false, // 批量调整库存弹框显示
        setPriceVisible: false, // 批量调整价格弹框显示
        uploadShopNameVisible: false, // 修改商品名称弹框显示
        shopName: '', // 商品名称值
        setCustomizationVisible: false, // 修改自定义分类弹框显示
        sellDetailVisible: false, // 售卖详情弹框显示
        sellDetailData: [{ // 售卖详情弹框数据
          no: '1',
          specs: '红色, XXL',
          saled: '20',
          marketPrice: '60.00',
          sellPrice: '60.00',
          stock: '13000',
        }, {
          no: '2',
          specs: '红色, XL',
          saled: '20',
          marketPrice: '60.00',
          sellPrice: '60.00',
          stock: '5000',
        }],
        modifyPriceVisible: false, // 调价弹框数据
        commodityShelvesVisible: false, // 商品下架弹框显示
        commodityTime: '',
        commodityShelvesReason: 1, // 商品暂时下架，永久下架的操作
        commodityShelvesOther: false, // 商品下架-永久下架-其他的操作
        sureModifyPriceVisible: false, // 调价确定提示弹框显示
        deleteVisible: false, // 删除弹框显示
        deleteOther: false, // 删除-其他操作
        upperShelfVisible: false, // 上架弹框显示
        GoodsStatisticeCount: {
            onOffer: 0, //出售中的商品
            warehouse: 0, //仓库中的商品
            soldOut: 0, //强制下架的商品
            awaitAudit: 0 //待核对的商品
        },
        queryCondition: { //查询条件
            type: 0,
            title: '',
            auditState: 99,
            minSellPrice: '', //最小销售价
            maxSellPrice: '', //最大销售价
            minSellCount: '',
            maxSellCount: '',
            isJoinActivity: false //是否参加活动
        },
        page: { //分页参数
            listTotal: 0,
            currentPage: 1,
            currentPageSize: 10
        }
      }
    },
    mounted() {
        this.initGoodsStatisticeCount();
        this.initTableDataByGoods();
        this.getOrderNumber();
    },
    methods: {
        initGoodsStatisticeCount: function(){
            GoodsStatisticeCount.call(this,
                '?clientVersion=1.0.0' +
                '&clientTimespan=' + this.$Tool.formatDate(new Date())
            ).then(res => {
                if(res.data.code == 1){
                    this.GoodsStatisticeCount.onOffer = res.data.data.putaway;
                    this.GoodsStatisticeCount.warehouse = res.data.data.soldout;
                    this.GoodsStatisticeCount.soldOut = res.data.data.sysSlodout;
                    this.GoodsStatisticeCount.awaitAudit = res.data.data.waitCheck;
                }
            })
        },
        initTableDataByGoods: function(){
            GoodsList.call(this, '?title=' + this.queryCondition.title +
                '&status=' + this.queryCondition.auditState +
                '&type=' + this.queryCondition.type +
                '&orderByField=0' +
                '&systemCategory=' +
                '&userCategory=' +
                '&minSellPrice=' + this.queryCondition.minSellPrice +
                '&maxSellPrice=' + this.queryCondition.maxSellPrice +
                '&minSellCount=' + this.queryCondition.minSellCount +
                '&maxSellCount=' + this.queryCondition.maxSellCount +
                '&orderByType=0' +
                '&isJoinActivity=' + this.queryCondition.isJoinActivity +
                '&pageIndex=' + this.page.currentPage +
                '&pageSize=' + this.page.currentPageSize +
                '&clientVersion=1.0.0' +
                '&clientTimespan=' + this.$Tool.formatDate(new Date())
            ).then(res => {
                if(this.auditOptions.length == 0){
                    var statusData = res.data.data.selectData.statusData;
                    for(var i = 0; i < statusData.length; i++){
                        var o = {};
                        o.label = statusData[i].text;
                        o.value = statusData[i].value
                        this.auditOptions.push(o);
                    }
                }
                this.tableData = res.data.data.goodsList.articleList;
                this.page.listTotal = res.data.data.goodsList.totalCount;
            })
        },
        updateQueryType: function(val){
            this.queryCondition.type = val;
            this.queryCondition.currentPage = 1;
            this.initTableDataByGoods();
        },
      /**
       * 表格全选功能
       * @param val
       */
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      /**
       * 分页方法
       * @param val
       */
      handleSizeChange(val) {
        this.page.currentPageSize = val;
        this.initTableDataByGoods();
      },
      handleCurrentChange(val) {
        this.page.currentPage = val;
        this.initTableDataByGoods();
      },

      /**
       * 获取相同编号的数组
       */
      getOrderNumber() {
        let OrderObj = {};
        this.modifyPriceData.forEach( (element, index) => {
          element.rowIndex = index;
          if (OrderObj[element.shop_number]) {
            OrderObj[element.shop_number].push(index);
          } else {
            OrderObj[element.shop_number] = [];
            OrderObj[element.shop_number].push(index);
          }
        } ); // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）

        for ( let k in OrderObj ) {
          if ( OrderObj[k].length > 1 ) {
            this.OrderIndexArr.push(OrderObj[k]);
          }
        }
      },

      /**
       * 合并单元格
       * @param row
       * @param column
       * @param rowIndex
       * @param columnIndex
       * @returns {*}
       */
      modifyPriceMethod ( {row, column, rowIndex, columnIndex} ) {
        if (columnIndex === 0) {
          for (let i = 0; i < this.OrderIndexArr.length; i++) {
            let element = this.OrderIndexArr[i];
            for (let j = 0; j < element.length; j++) {
              let item = element[j];
              if (rowIndex == item) {
                if (j == 0) {
                  return {
                    rowspan: element.length, colspan: 1
                  }
                } else if (j != 0) {
                  return {
                    rowspan: 0, colspan: 0
                  }
                }
              }
            }
          }
        }
      },

      /**
       * 更多操作事件
       * @param command
       */
      handleCommand(command) {
        if ( command === 'cate' ) {
          this.setCate();
        } else if ( command === 'stock' ) {
          this.setStock();
        } else {
          this. setPrice();
        }
      },

      /**
       * 批量设置自定义分类
       */
      setCate() {
        this.settingCustomizationVisible = true;
      },

      /**
       * 批量调整库存
       */
      setStock() {
        this.setStockVisible = true;
      },

      /**
       * 批量调整价格
       */
      setPrice() {
        this.setPriceVisible = true;
      },

      /**
       * 调价确定按钮
       */
      modifyPriceSure() {
        this.modifyPriceVisible = true;
        this.sureModifyPriceVisible = true;
      },

      /**
       * 确定调价
       */
      sureModifyPrice() {
        this.modifyPriceVisible = false;
        this.sureModifyPriceVisible = false;
      },

      /**
       * 上架
       */
      upperShelf() {
        this.upperShelfVisible = true;
      },

      /**
       * 编辑
       */
      edit() {
        this.$router.push({ name: 'GoodsRelease' });
      },

      /**
       * 跳转到商品详情页
       */
      goDetail() {
        this.$router.push({ name: 'GoodsDetail' });
      },

      /**
       * 跳转到商品回收站页
       */
      goRecycleBin() {
        this.$router.push({ name: 'GoodsRecycleBin' });
      },

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/main.less";
</style>
