<template>
  <div class="addDiscount_box">
    <div class="title_box">
      <ul>
        <li class="active">添加特价促销</li>
      </ul>
      <div class="ribbon"></div>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name" label-width="100px">
        <el-input style="width: 400px;" v-model="ruleForm.name" :disabled="pageType === 'detail' ? true : false"></el-input>
        <span class="add_font"> 0/20 </span>
      </el-form-item>

      <el-form-item label="活动时间" required label-width="100px">
        <div class="add_line">
          <span>
            <el-form-item prop="date1" >
              <el-date-picker
                v-model="ruleForm.date1"
                :disabled="pageType === 'detail' ? true : false"
                type="date"
                value-format="yyyy-MM-dd"
                :picker-options="startMonthOption" @change="selectStartMonth"
                placeholder="请选择开始时间">
              </el-date-picker>
            </el-form-item>
          </span>
          <span class="add_span"> 至 </span>
          <span>
            <el-form-item prop="date2">
              <el-date-picker
                v-model="ruleForm.date2"
                :disabled="pageType === 'detail' ? true : false"
                type="date"
                value-format="yyyy-MM-dd"
                :picker-options="endMonthOption" @change="selectEndMonth"
                placeholder="请选择结束时间">
              </el-date-picker>
            </el-form-item>
          </span>
          <span class="add_span">共</span>
          <el-input style="width: 100px;" v-model="ruleForm.dayNum" disabled></el-input>
          <span class="add_span">天</span>
          <i>（活动时间7-30天，从开始日00:00:00生效，结束日23:59:59失效）</i>
        </div>
      </el-form-item>

      <el-form-item label="活动范围" label-width="100px">
        <div>
          <el-button type="primary" @click="shopDataVisible = true" :disabled="pageType === 'detail' ? true : false">+ 添加商品</el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="add_top" v-if="pageType !== 'detail'">
          <el-button type="danger" size="small">批量移除</el-button>
        </div>

        <!--添加/编辑的表格 start-->
        <div class="table table1" v-if="pageType !== 'detail'">
          <el-table
            ref="multipleTableSelected"
            :data="selectGoods"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChangeSelected">
            <el-table-column
              type="selection"
              align="center"
              width="55">
            </el-table-column>

            <el-table-column
              label="商品图片"
              fixed
              align="center">
              <template slot-scope="scope">
                <viewer :images="[scope.row.imgUrl]">
                  <img class="vue-lazyload pic" v-lazy="scope.row.pic" alt="" title="点击查看大图">
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
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="规格属性">
              <template slot-scope="scope">
                <ul>
                  <li v-for="item in scope.row.article_goods">{{item.id}}</li>
                </ul>
              </template>
            </el-table-column>

            <el-table-column
              prop="price"
              align="center"
              label="商品原价(元)">
            </el-table-column>

            <el-table-column
              align="center"
              label="活动价格(元)">
              <template slot-scope="scope">
                <el-input style="width: 120px;" v-model="scope.row.activePrice"></el-input>
              </template>
            </el-table-column>

            <el-table-column
              prop="activePrice"
              align="center"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="text">移除</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
        <!--添加/编辑的表格 end-->

        <!--详情的表格 start-->
        <div class="table table1" v-if="pageType === 'detail'">
          <el-table
            ref="multipleTableSelected"
            :data="selectGoods"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChangeSelected">
            <el-table-column
              prop="sort"
              label="序号"
              align="center"
              width="55">
            </el-table-column>

            <el-table-column
              label="商品图片"
              fixed
              align="center">
              <template slot-scope="scope">
                <viewer :images="scope.row.pic">
                  <img class="vue-lazyload pic" v-lazy="scope.row.pic" alt="" title="点击查看大图">
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
                    <a href="javascript: void(0);" @click="goDetail">2015年度潮流红色鞋款是见覅的违法阿法阿法阿1000</a>
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="rules"
              align="center"
              label="规格属性">
            </el-table-column>

            <el-table-column
              prop="price"
              align="center"
              label="商品原价(元)">
            </el-table-column>

            <el-table-column
              align="center"
              label="活动价格(元)">
              <template slot-scope="scope">
                <div>{{scope.row.activePrice}}</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--详情的表格 end-->

        <!--页码开始-->
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        <!--页码结束-->
      </el-form-item>

      <el-form-item label-width="80px" style="margin-top: 60px;">
        <el-button type="primary" v-if="pageType !== 'detail'" @click="submitForm('ruleForm')">确 定</el-button>
        <el-button @click="calcle" v-if="pageType !== 'detail'">返 回</el-button>
        <el-button @click="goBack" v-if="pageType === 'detail'">返 回</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="选择商品"
      :visible.sync="shopDataVisible"
      width="60%">
      <div>
        <div class="dialog_span">
          <span>
            <el-cascader
              :options="shopOptions"
              v-model="selectedShopOptions"
              :props="shopProps"
              :show-all-levels="false">
            </el-cascader>
          </span>

          <span>
            <el-input placeholder="请输入商品名称" v-model="goodsName"></el-input>
          </span>

          <span>
            <el-button type="primary" @click="searchGoods">搜索商品</el-button>
          </span>

          <span>
            <el-button type="primary" @click="saveSelectGoods">确定</el-button>
          </span>
        </div>

        <!--表格 start-->
        <div class="table">
          <el-table
            ref="multipleTable"
            :data="shopGoodsList"
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
                <viewer :images="[scope.row.imgUrl]">
                  <img class="vue-lazyload pic" v-lazy="scope.row.imgUrl" alt="" title="点击查看大图">
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
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="原价(元)">
              <template slot-scope="scope">
                <div v-if="scope.row.minPrice === scope.row.maxPrice">￥{{scope.row.sellPrice}}</div>
                <div v-else>￥{{scope.row.minPrice}} - {{scope.row.maxPrice}}</div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="库存(件)">
              <template slot-scope="scope">
                <div>100</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--表格 end-->

        <!--页码开始-->
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange1"
            @current-change="handleCurrentChange1"
            :current-page="shopGoodsPageIndex"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="shopGoodsPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
        </div>
        <!--页码结束-->

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="shopDataVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectGoods">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="sureDialogVisible"
      width="500px">
      <div>
        <p>活动将在开始时间自动发布，发布后将不能修改，确认添加？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sureDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="cancleDialogVisible"
      width="500px">
      <div>
        <p>你已编辑了活动信息，确认放弃？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goBack">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import getSpecialofferDetail from '../../../../../src/api/ShopActivity/getSpecialofferDetail.js'
  import goodsBriefInfoByPage from '../../../../../src/api/ShopActivity/goodsBriefInfoByPage.js'
  import goodsClassList from '../../../../../src/api/goods/goodsClassList'

  export default {
    mounted () {
      if (this.pageType !== 'detail'){
        this.goodsBriefInfoByPage();
        this.changePage = false;
        this.goodsClassList();
      }
    },
    data () {
      return {
        pageType: this.$route.query.type,
        sureDialogVisible: false, // 点击确定的提示框
        cancleDialogVisible: false, // 点击取消的提示框
        ruleForm: {
          name: '',
          date1: '',
          date2: '',
          dayNum: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'string', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
        tableData: [{ // 表格数据
          sort: '1',
          pic: 'https://picsum.photos/id/237/200/300',
          price: '200.00',
          rules: '杏色',
          activePrice: '135.00',
        }],
        multipleSelection: [], // 表格全选参数
        multipleAll: [],  //上面选中商品 集合
        currentPage: 1,
        shopDataVisible: false,
        shopOptions: [], //搜索条件 商家自定义分类
        shopProps: {
          value: 'id',
          label: 'title',
          children: 'childCategory'
        },//分类级联  属性设置
        goodsName: '', //商品搜索 名称
        selectedShopOptions: [], //商家选择的分类
        shopGoodsList: [],//选择商品列表
        totalCount: 0,//记录有多少商品
        multipleSelectionSelected: [], //已选择商品  多选按钮
        changePage: false,
        shopGoodsPageSize: 5,
        shopGoodsPageIndex: 1,
        selectGoods: [],//商家选择的商品
        indexList: [],
        renderingFlag: false, //监听重新渲染
        manualChange: false,  //记录是否是手动触发  置空
        startMonthOption: {
          disabledDate(time) {
            // 一天是24*60*60*1000 = 86400000 = 8.64e7
            return time.getTime() < Date.now();
          }
        },
        endMonthOption: {
          disabledDate(time) {
            return time.getTime() < Date.now() + (86400000 * 6) || time.getTime() > Date.now() + (86400000 * 30);
          }
        },
      }
    },
    watch: {
      renderingFlag(newValue, oldValue) {
        if (newValue) {
          this.changePage = false;
          // console.log('2222', newValue);
          this.rendering();
          this.renderingFlag = false;
        }
      },
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.sureDialogVisible = true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      calcle() {
        this.cancleDialogVisible = true;
      },

      goBack() {
        this.$router.go( -1 );
      },

      /**
       * 表格全选功能
       * @param val
       */
      handleSelectionChange(val) {
        let _flag = false;
        if (this.changePage) {
          this.multipleSelection = val;
          //手动触发
          this.manualChange = true;
          this.renderingFlag = true;
        } else {
          if (val.length === 0 && this.manualChange) {
            //手动触发后的空数组赋值  取消
            // console.log(val,this.manualChange,'2222',this.multipleSelection);
            this.manualChange = false;
            _flag = true;
          }else {
            // console.log(val,this.manualChange,'33333');
            let _multipleAll = JSON.parse(JSON.stringify(this.multipleAll));
            this.multipleSelection.map(item => {
              let _index = -1;
              _multipleAll.map((it, index) => {
                if (item.articleId === it.articleId) {
                  _index = index;
                }
              });
              if (_index > -1) {
                _multipleAll.splice(_index, 1);
              }
            });
            val.map(item => {
              let _flag = true;
              _multipleAll.map(ii=>{
                if (item.articleId === ii.articleId) {
                  _flag = false;
                }
              });
              if (_flag){
                _multipleAll.push(item);
              }
            });
            this.multipleAll = _multipleAll;
          }
        }
        this.changePage = false;
        // console.log(this.multipleAll, '------------multipleAll-------------');
        this.multipleSelection = val;
        if (_flag){
          let _indexList = new Array();
          this.multipleAll.map(selectGood => {
            this.shopGoodsList.map((room, index) => {
              if (selectGood.articleId === room.articleId) {
                _indexList.push(index);
              }
            })
          });
          //确定 触发回显
          this.toggleSelection(_indexList);
        }
      },
      /**
       * 下面已选商品  多选
       */
      handleSelectionChangeSelected(val) {
        this.multipleSelectionSelected = val;
      },
      /**
       * 分页方法
       * @param val
       */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSizeChange1(val) {
        this.shopGoodsPageSize = val;
        this.shopGoodsPageIndex = 1;
        this.goodsBriefInfoByPage();
      },
      handleCurrentChange1(val) {
        this.shopGoodsPageIndex = val;
        this.goodsBriefInfoByPage();
      },
      /**
       * 跳转到商品详情页
       */
      goDetail() {
        this.$router.push({ name: 'GoodsDetail' });
      },
      selectStartMonth() {
        this.endMonthOption = {
          disabledDate: (time) => {
            if (this.ruleForm.date1 === '' || this.ruleForm.date1 === null) {
              return time.getTime() < Date.now() + (86400000 * 5) || time.getTime() > Date.now() + (86400000 * 29);
            } else {
              return time.getTime() < new Date(this.ruleForm.date1).getTime() + (86400000 * 5) || time.getTime() > new Date(this.ruleForm.date1).getTime() + (86400000 * 29);
            }
          }
        };
        this.calculatingTime();
      },
      selectEndMonth() {
        this.startMonthOption = {
          disabledDate: (time) => {
            if (this.ruleForm.date2 === '' || this.ruleForm.date2 === null) {
              return time.getTime() < Date.now() - 8.64e7;
            } else {
              return time.getTime() > new Date(this.ruleForm.date2).getTime() - (86400000 * 6) || time.getTime() < Date.now() - 8.64e7 || time.getTime() < new Date(this.ruleForm.date2).getTime() - (86400000 * 30);
            }
          }
        };
        this.calculatingTime();
      },
      calculatingTime() {
        let day = '';
        if (this.ruleForm.date1 !== '' && this.ruleForm.date2 !== '' && this.ruleForm.date1 !== null && this.ruleForm.date2 !== null) {
          day = (new Date(this.ruleForm.date2).getTime() - new Date(this.ruleForm.date1).getTime()) / 86400000 + 1;
        }
        this.ruleForm.dayNum = day;
      },
      //获取商品
      goodsBriefInfoByPage() {
        //重新渲染  不改变选中
        this.changePage = true;
        let _path = `?clientVersion=1.0.0&clientTimespan=2019-05-16 11:13:00&pageIndex=${this.shopGoodsPageIndex}&pageSize=${this.shopGoodsPageSize}`;
        if (this.goodsName !== '' && this.goodsName !== null) {
          _path += `&articleName=${this.goodsName}`;
        }
        if (this.selectedShopOptions !== null && this.selectedShopOptions.length > 0) {
          let _index = this.selectedShopOptions.length - 1;
          _path += `&categroyId=${this.selectedShopOptions[_index]}`;
        }
        goodsBriefInfoByPage.call(this, _path).then(res => {
          if (res.data.code === 1) {
            //成功
            if (res.data.data != null) {
              this.shopGoodsList = res.data.data.list;
              this.totalCount = res.data.data.totalCount;
              if (this.multipleSelection.length === 0 && this.changePage){
                //分页  手动调取
                this.handleSelectionChange([]);
              }
            }
          } else {
            //失败
            this.$message.error(res.data.desc);
          }
        })
      },
      //获取分类
      goodsClassList() {
        goodsClassList.call(this, '?clientVersion=1.0.0&clientTimespan=2019-05-16 11:13:00').then(res => {
          if (res.data.code === 1) {
            //成功
            let _classList = res.data.data;
            if (_classList != null) {
              this.shopOptions = _classList;
            }
          } else {
            //失败
            this.$message.error(res.data.desc);
          }
        })
      },
      searchGoods(){
        this.shopGoodsPageIndex = 1;
        this.goodsBriefInfoByPage();
      },
      //请求接口后渲染
      rendering() {
        //渲染
        let _list = this.shopGoodsList;
        let _indexList = new Array();
        this.multipleAll.map(it => {
          _list.map((item, index) => {
            if (item.articleId === it.articleId) {
              _indexList.push(index);
            }
          })
        });
        // console.log(_indexList, '---_indexList---');
        this.toggleSelection(_indexList);
      },
      saveSelectGoods() {
        this.shopDataVisible = false;
        let _selectGoods = JSON.parse(JSON.stringify(this.selectGoods));
        //删除没勾选的
        _selectGoods.map((item,index)=>{
          let flag = false;
          this.multipleAll.map((it,i) =>{
            if (item.articleId === it.articleId) {
              //有  不需要删除
              flag = true;
            }
          });
          if (!flag) {
            //删除没勾选的
            _selectGoods.splice(index,1);
          }
        });
        //添加 勾选的 没在选中的
        this.multipleAll.map((item,index)=>{
          let flag = false;
          _selectGoods.map((it,i) =>{
            if (item.articleId === it.articleId) {
              //有  不需要删除
              flag = true;
            }
          });
          if (!flag) {
            //添加没包含的
            _selectGoods.push(item);
          }
        });
        this.selectGoods = _selectGoods;
      },
      toAddGoods() {
        this.shopDataVisible = true;
        this.multipleAll = JSON.parse(JSON.stringify(this.selectGoods));
        // let rows = JSON.parse(JSON.stringify(this.indexList));
        let _indexList = new Array();
        this.selectGoods.map(selectGood => {
          this.shopGoodsList.map((room, index) => {
            if (selectGood.articleId === room.articleId) {
              _indexList.push(index);
            }
          })
        });
        //确定 触发回显
        this.$nextTick( ()=> {
          this.toggleSelection(_indexList);
        })
        //
      },
      //回显勾选
      toggleSelection(rows) {
        // console.log(rows, '-rows-');
        if (rows) {
          if (this.multipleSelection.length > 0) {
            this.$refs.multipleTable.clearSelection();
          }
          rows.forEach(index => {
            // console.log(this.shopGoodsList[index],'111',this.$refs.multipleTable);
            this.$refs.multipleTable.toggleRowSelection(this.shopGoodsList[index]);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //删除选择的商品
      delGoods(id){
        this.$confirm('确定删除该商品？', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.selectGoods.map((good,index) =>{
            if (good.articleId === id) {
              this.selectGoods.splice(index ,1);
            }
          })
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
      },
      delBatchGoods() {
        this.$confirm('确定删除已选择商品？', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.multipleSelectionSelected.map(item =>{
            this.selectGoods.map((good,index) =>{
              if (good.articleId === item.articleId) {
                this.selectGoods.splice(index ,1);
              }
            })
          })
        }).catch(() => {

        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
