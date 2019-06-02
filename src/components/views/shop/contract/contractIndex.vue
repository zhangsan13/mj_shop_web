<template>
  <div class="warp_bg">

    <div class="contract_top">
      <div class="time">您与满集平台的合约日期：<span class="star_end">{{startTime}}至{{endTime}}</span>    合约到期日：<span class="day">10天</span></div>
      <div class="total">
        <p>本和预期已缴纳：保证金{{deposit}}元</p>
        <span>平台使用年费：{{platformFee}}元</span>
        <el-button type="primary" size="mini" @click="dialogFormVisible = true">收费标准</el-button>
      </div>
      <div class="contractBtn" @click="dialogVisible = true">合约内容 <i class="iconfont icon-gth"></i> </div>
      <el-divider></el-divider>
      <div class="sure">
        <p>请确定店铺的【经营范围】是否需要变更，确认无误，即可续签合同 。</p>
        <div class="bottom">
          <el-button type="primary" size="mini">已确定【经营范围】，续签合同</el-button>
          <div class="time"></div>
        </div>
      </div>
    </div>

    <el-dialog title="收费标准" :visible.sync="dialogFormVisible">
      <div>
        <table width="829" border="0" cellpadding="0" cellspacing="0" style='border-collapse:collapse;'>
          <col width="32" class="xl67" style='mso-width-source:userset;mso-width-alt:1024;' />
          <col width="98" class="xl67" style='mso-width-source:userset;mso-width-alt:3136;' />
          <col width="74" class="xl67" style='mso-width-source:userset;mso-width-alt:2368;' />
          <col width="132" class="xl67" style='mso-width-source:userset;mso-width-alt:4224;' />
          <col width="80" class="xl67" style='mso-width-source:userset;mso-width-alt:2560;' />
          <col width="90" class="xl67" style='mso-width-source:userset;mso-width-alt:2880;' />
          <col width="74" class="xl67" style='mso-width-source:userset;mso-width-alt:2368;' />
          <col width="89" class="xl67" style='mso-width-source:userset;mso-width-alt:2848;' />
          <col width="160" class="xl67" style='mso-width-source:userset;mso-width-alt:5120;' />
          <col width="72" span="16375" class="xl67" style='mso-width-source:userset;mso-width-alt:2304;' />
          <tr height="28" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
            <td class="xl68" height="28" width="829" colspan="9" style='height:21.00pt;width:621.75pt;border-right:none;border-bottom:none;'></td>
          </tr>
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;'>
            <td class="xl69" height="76" colspan="9" rowspan="3" style='height:57.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>购物类商家入驻收费标准</td>
          </tr>
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="37.33" style='height:28.00pt;mso-height-source:userset;mso-height-alt:560;'>
            <td class="xl70" height="78.67" rowspan="2" style='height:59.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>序号</td>
            <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>一级类别</td>
            <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>二级类别序号</td>
            <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>二级类别</td>
            <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>旗舰店(商品数量200个以上)</td>
            <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>专卖店/普通店<br />（商品数量200个以下）</td>
            <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>技术服务费</td>
          </tr>
          <tr height="41.33" class="xl67" style='height:31.00pt;mso-height-source:userset;mso-height-alt:620;'>
            <td class="xl71" x:str>保证金<br />（元/店）</td>
            <td class="xl71" x:str>平台使用年费（元/店）</td>
            <td class="xl71" x:str>保证金 （元/店）</td>
            <td class="xl71" x:str>平台使用年（元/店）</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="362.67" rowspan="16" style='height:272.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>食品茶酒</td>
            <td class="xl72" x:num>1</td>
            <td class="xl72" x:str>休闲零食</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>2</td>
            <td class="xl72" x:str>糕点饼干</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>3</td>
            <td class="xl72" x:str>糖果/巧克力</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>4</td>
            <td class="xl72" x:str>冲调</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>5</td>
            <td class="xl73" x:str>饮品果汁</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>6</td>
            <td class="xl72" x:str>咖啡及可可</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>7</td>
            <td class="xl72" x:str>方便食品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>8</td>
            <td class="xl72" x:str>米面杂粮</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>9</td>
            <td class="xl72" x:str>食用油</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>10</td>
            <td class="xl72" x:str>调味佐餐</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>11</td>
            <td class="xl72" x:str>干货</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>12</td>
            <td class="xl72" x:str>茶叶</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>13</td>
            <td class="xl72" x:str>啤酒/白酒</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>14</td>
            <td class="xl72" x:str>葡萄酒</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>15</td>
            <td class="xl72" x:str>洋酒</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>16</td>
            <td class="xl72" x:str>套装礼盒</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl70" height="158.67" rowspan="7" style='height:119.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2</td>
            <td class="xl70" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>农特产品</td>
            <td class="xl72" x:num>17</td>
            <td class="xl70" x:str>水果特产</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>0</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>0</td>
            <td class="xl74" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="1.e-002">1%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>18</td>
            <td class="xl70" x:str>食品特产</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>19</td>
            <td class="xl70" x:str>小吃零食</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>20</td>
            <td class="xl70" x:str>粮食种子</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>21</td>
            <td class="xl70" x:str>花果种苗</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>22</td>
            <td class="xl70" x:str>民族服饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>23</td>
            <td class="xl70" x:str>手工艺品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl70" height="272" rowspan="12" style='height:204.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>3</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>母婴用品</td>
            <td class="xl72" x:num>24</td>
            <td class="xl72" x:str>奶粉</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>25</td>
            <td class="xl72" x:str>婴儿食品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>26</td>
            <td class="xl72" x:str>喂养用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>27</td>
            <td class="xl72" x:str>护理用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>28</td>
            <td class="xl72" x:str>清洗护肤</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>29</td>
            <td class="xl72" x:str>婴幼儿尿裤</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>30</td>
            <td class="xl72" x:str>妈妈用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>31</td>
            <td class="xl72" x:str>孕妇装</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>32</td>
            <td class="xl72" x:str>婴儿服鞋</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>33</td>
            <td class="xl72" x:str>童车推车</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>34</td>
            <td class="xl72" x:str>安全座椅</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>35</td>
            <td class="xl72" x:str>婴儿寝具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl70" height="136" rowspan="6" style='height:102.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>3</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>母婴用品</td>
            <td class="xl72" x:num>36</td>
            <td class="xl72" x:str>儿童家具</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>37</td>
            <td class="xl72" x:str>育儿装饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>38</td>
            <td class="xl72" x:str>外出用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>39</td>
            <td class="xl72" x:str>学校用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>40</td>
            <td class="xl72" x:str>安全防护</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>41</td>
            <td class="xl72" x:str>纪念品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="340" rowspan="15" style='height:255.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>4</td>
            <td class="xl72" rowspan="15" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>儿童玩具</td>
            <td class="xl72" x:num>42</td>
            <td class="xl72" x:str>婴幼玩具</td>
            <td class="xl72" rowspan="15" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="15" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="15" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="15" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="15" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>43</td>
            <td class="xl71" x:str>毛绒玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>44</td>
            <td class="xl71" x:str>娃娃</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>45</td>
            <td class="xl72" x:str>创意玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>46</td>
            <td class="xl72" x:str>遥控玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>47</td>
            <td class="xl72" x:str>模型玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>48</td>
            <td class="xl72" x:str>游戏</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>49</td>
            <td class="xl72" x:str>益智玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>50</td>
            <td class="xl72" x:str>拼图</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>51</td>
            <td class="xl72" x:str>音乐玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>52</td>
            <td class="xl72" x:str>制作手绘</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>53</td>
            <td class="xl72" x:str>动漫玩具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>54</td>
            <td class="xl72" x:str>运动户外</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>55</td>
            <td class="xl72" x:str>角色游戏</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>56</td>
            <td class="xl72" x:str>聚会节日</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="158.67" rowspan="7" style='height:119.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>5</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>个护美妆</td>
            <td class="xl72" x:num>57</td>
            <td class="xl72" x:str>面部护肤</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>58</td>
            <td class="xl72" x:str>美发护发</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>59</td>
            <td class="xl72" x:str>彩妆</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>60</td>
            <td class="xl72" x:str>身体护理</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>61</td>
            <td class="xl72" x:str>男士护理</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>62</td>
            <td class="xl72" x:str>香水</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>63</td>
            <td class="xl72" x:str>工具和配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="113.33" rowspan="5" style='height:85.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>6</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>腕表眼镜</td>
            <td class="xl72" x:num>64</td>
            <td class="xl72" x:str>钟表</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>65</td>
            <td class="xl72" x:str>配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>66</td>
            <td class="xl72" x:str>眼镜</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>67</td>
            <td class="xl72" x:str>烟具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>68</td>
            <td class="xl72" x:str>时钟</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="113.33" rowspan="5" style='height:85.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>7</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>服饰箱包</td>
            <td class="xl72" x:num>69</td>
            <td class="xl72" x:str>女装</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>70</td>
            <td class="xl72" x:str>男装</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>71</td>
            <td class="xl72" x:str>皮具箱包</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>72</td>
            <td class="xl72" x:str>儿童服饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>73</td>
            <td class="xl72" x:str>服饰配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="22.67" style='height:17.00pt;' x:num>8</td>
            <td class="xl72" x:str>精品鞋靴</td>
            <td class="xl72" x:num>74</td>
            <td class="xl72" x:str>女鞋</td>
            <td class="xl72" x:num>2000</td>
            <td class="xl72" x:num>1000</td>
            <td class="xl72" x:num>1000</td>
            <td class="xl72" x:num>500</td>
            <td class="xl74" x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="90.67" rowspan="4" style='height:68.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>8</td>
            <td class="xl72" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>精品鞋靴</td>
            <td class="xl72" x:num>75</td>
            <td class="xl72" x:str>男鞋</td>
            <td class="xl72" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>76</td>
            <td class="xl72" x:str>女童鞋</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>77</td>
            <td class="xl72" x:str>男童鞋</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>78</td>
            <td class="xl72" x:str>鞋靴配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="158.67" rowspan="7" style='height:119.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>9</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>珠宝首饰</td>
            <td class="xl72" x:num>79</td>
            <td class="xl72" x:str>珠宝首饰</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>80</td>
            <td class="xl72" x:str>头饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>81</td>
            <td class="xl72" x:str>耳饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>82</td>
            <td class="xl72" x:str>首饰部件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>83</td>
            <td class="xl72" x:str>领带饰品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>84</td>
            <td class="xl72" x:str>装饰品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>85</td>
            <td class="xl72" x:str>首饰收纳</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="589.33" rowspan="26" style='height:442.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>10</td>
            <td class="xl72" rowspan="26" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>运动户外</td>
            <td class="xl72" x:num>86</td>
            <td class="xl72" x:str>运动服饰</td>
            <td class="xl72" rowspan="26" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="26" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="26" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="26" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="26" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>87</td>
            <td class="xl72" x:str>运动包</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>88</td>
            <td class="xl72" x:str>电子设备</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>89</td>
            <td class="xl72" x:str>训练健身</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>90</td>
            <td class="xl72" x:str>徒步露营</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>91</td>
            <td class="xl72" x:str>跑步</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>92</td>
            <td class="xl72" x:str>骑行运动</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>93</td>
            <td class="xl72" x:str>羽毛球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>94</td>
            <td class="xl72" x:str>乒乓球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>95</td>
            <td class="xl72" x:str>篮球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>96</td>
            <td class="xl72" x:str>钓鱼</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>97</td>
            <td class="xl72" x:str>轮滑/滑板</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>98</td>
            <td class="xl72" x:str>足球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>99</td>
            <td class="xl72" x:str>网球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>100</td>
            <td class="xl72" x:str>排球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>101</td>
            <td class="xl72" x:str>冰雪运动</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>102</td>
            <td class="xl72" x:str>登山攀岩</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>103</td>
            <td class="xl72" x:str>水上运动</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>104</td>
            <td class="xl72" x:str>棒球</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>105</td>
            <td class="xl72" x:str>高尔夫</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>106</td>
            <td class="xl72" x:str>舞蹈</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>107</td>
            <td class="xl72" x:str>瑜伽</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>108</td>
            <td class="xl72" x:str>拳击</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>109</td>
            <td class="xl72" x:str>武术</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>110</td>
            <td class="xl72" x:str>趣味运动</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>111</td>
            <td class="xl72" x:str>运动迷用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="45.33" rowspan="2" style='height:34.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>11</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>数码产品</td>
            <td class="xl72" x:num>112</td>
            <td class="xl72" x:str>手机配件</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>113</td>
            <td class="xl72" x:str>智能设备</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="453.33" rowspan="20" style='height:340.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>11</td>
            <td class="xl72" rowspan="20" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>数码产品</td>
            <td class="xl72" x:num>114</td>
            <td class="xl72" x:str>上网卡</td>
            <td class="xl72" rowspan="20" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="20" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="20" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="20" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="20" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>115</td>
            <td class="xl72" x:str>电脑产品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>116</td>
            <td class="xl72" x:str>笔记本</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>117</td>
            <td class="xl72" x:str>台式机</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>118</td>
            <td class="xl72" x:str>电脑组件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>119</td>
            <td class="xl72" x:str>网络设备</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>120</td>
            <td class="xl72" x:str>数码相机</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>121</td>
            <td class="xl72" x:str>镜头</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>122</td>
            <td class="xl72" x:str>摄影配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>123</td>
            <td class="xl72" x:str>水下摄影</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>124</td>
            <td class="xl72" x:str>望远镜</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>125</td>
            <td class="xl72" x:str>无人机</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>126</td>
            <td class="xl72" x:str>监控摄像</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>127</td>
            <td class="xl72" x:str>数码影音</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>128</td>
            <td class="xl72" x:str>数码配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>129</td>
            <td class="xl72" x:str>外设产品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>130</td>
            <td class="xl72" x:str>存储</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>131</td>
            <td class="xl72" x:str>网络K歌</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>132</td>
            <td class="xl72" x:str>其他配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>133</td>
            <td class="xl72" x:str>耳机音箱</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="68" rowspan="3" style='height:51.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>12</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>家用电器</td>
            <td class="xl72" x:num>134</td>
            <td class="xl72" x:str>护理电器</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>135</td>
            <td class="xl72" x:str>厨房电器</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>136</td>
            <td class="xl72" x:str>居家电器</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="362.67" rowspan="16" style='height:272.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>13</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>家具家居</td>
            <td class="xl72" x:num>137</td>
            <td class="xl72" x:str>床上用品</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="16" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>138</td>
            <td class="xl72" x:str>家居装饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>139</td>
            <td class="xl72" x:str>家居整理</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>140</td>
            <td class="xl72" x:str>缝洗晒熨</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>141</td>
            <td class="xl72" x:str>锅具壶具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>142</td>
            <td class="xl72" x:str>餐具厨具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>143</td>
            <td class="xl75" x:str>水具茶具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>144</td>
            <td class="xl72" x:str>烘焙用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>145</td>
            <td class="xl72" x:str>咖啡用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>146</td>
            <td class="xl72" x:str>保鲜用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>147</td>
            <td class="xl72" x:str>烧烤用具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>148</td>
            <td class="xl72" x:str>厨房清洁</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>149</td>
            <td class="xl72" x:str>酒具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>150</td>
            <td class="xl72" x:str>浴室用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>151</td>
            <td class="xl72" x:str>家居家具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>152</td>
            <td class="xl72" x:str>家居灯饰</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="22.67" style='height:17.00pt;' x:num>13</td>
            <td class="xl72" x:str>家具家居</td>
            <td class="xl72" x:num>153</td>
            <td class="xl72" x:str>雨具防护</td>
            <td class="xl72" x:num>2000</td>
            <td class="xl72" x:num>1000</td>
            <td class="xl72" x:num>1000</td>
            <td class="xl72" x:num>500</td>
            <td class="xl74" x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="317.33" rowspan="14" style='height:238.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>14</td>
            <td class="xl72" rowspan="14" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>办公用品</td>
            <td class="xl72" x:num>154</td>
            <td class="xl72" x:str>办公设备</td>
            <td class="xl72" rowspan="14" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="14" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="14" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="14" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="14" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>155</td>
            <td class="xl72" x:str>办公耗材</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>156</td>
            <td class="xl72" x:str>办公用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>157</td>
            <td class="xl72" x:str>书写工具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>158</td>
            <td class="xl72" x:str>展示用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>159</td>
            <td class="xl72" x:str>家具灯具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>160</td>
            <td class="xl72" x:str>办公清洁</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>161</td>
            <td class="xl72" x:str>办公包装</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>162</td>
            <td class="xl72" x:str>日历台历</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>163</td>
            <td class="xl72" x:str>邮寄用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>164</td>
            <td class="xl72" x:str>财务用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>165</td>
            <td class="xl72" x:str>教具文具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>166</td>
            <td class="xl72" x:str>电子教育</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>167</td>
            <td class="xl72" x:str>纸品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="544" rowspan="24" style='height:408.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>15</td>
            <td class="xl72" rowspan="24" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>图书音像</td>
            <td class="xl72" x:num>168</td>
            <td class="xl72" x:str>少儿</td>
            <td class="xl72" rowspan="24" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="24" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="24" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="24" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="24" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>169</td>
            <td class="xl72" x:str>中小学教辅</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>170</td>
            <td class="xl72" x:str>大中专教材</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>171</td>
            <td class="xl72" x:str>考试辅导</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>172</td>
            <td class="xl72" x:str>外语学习</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>173</td>
            <td class="xl72" x:str>文学</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>174</td>
            <td class="xl72" x:str>小说</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>175</td>
            <td class="xl72" x:str>历史</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>176</td>
            <td class="xl72" x:str>社会科学</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>177</td>
            <td class="xl72" x:str>艺术摄影</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>178</td>
            <td class="xl72" x:str>经济管理</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>179</td>
            <td class="xl72" x:str>宗教哲学</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>180</td>
            <td class="xl72" x:str>传记</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>181</td>
            <td class="xl72" x:str>科学与自然</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>182</td>
            <td class="xl72" x:str>成功励志</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>183</td>
            <td class="xl72" x:str>国学</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>184</td>
            <td class="xl72" x:str>军事政治</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>185</td>
            <td class="xl72" x:str>心理学</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>186</td>
            <td class="xl72" x:str>法律</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>187</td>
            <td class="xl72" x:str>青春动漫</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>188</td>
            <td class="xl72" x:str>IT互联网</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>189</td>
            <td class="xl72" x:str>医学</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>190</td>
            <td class="xl72" x:str>烹饪美食</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>191</td>
            <td class="xl72" x:str>科技</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="272" rowspan="12" style='height:204.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>15</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>图书音像</td>
            <td class="xl72" x:num>192</td>
            <td class="xl72" x:str>养生保健</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>193</td>
            <td class="xl72" x:str>婚恋家庭</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>194</td>
            <td class="xl72" x:str>时尚娱乐</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>195</td>
            <td class="xl72" x:str>家居休闲</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>196</td>
            <td class="xl72" x:str>体育</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>197</td>
            <td class="xl72" x:str>期刊杂志</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>198</td>
            <td class="xl72" x:str>旅游地图</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>199</td>
            <td class="xl72" x:str>工具辞典</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>200</td>
            <td class="xl72" x:str>书画</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>201</td>
            <td class="xl72" x:str>教育音像</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>202</td>
            <td class="xl72" x:str>乐器</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>203</td>
            <td class="xl72" x:str>影视</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="136" rowspan="6" style='height:102.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>16</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>游戏软件</td>
            <td class="xl72" x:num>204</td>
            <td class="xl72" x:str>Xbox</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>205</td>
            <td class="xl72" x:str>PlayStation</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>206</td>
            <td class="xl72" x:str>电脑游戏</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>207</td>
            <td class="xl72" x:str>个人软件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>208</td>
            <td class="xl72" x:str>教学软件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>209</td>
            <td class="xl72" x:str>企业软件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="158.67" rowspan="7" style='height:119.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>17</td>
            <td class="xl70" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>建材建陶<span style='mso-spacerun:yes;'>&nbsp;</span></td>
            <td class="xl72" x:num>210</td>
            <td class="xl72" x:str>园艺劳保</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>211</td>
            <td class="xl72" x:str>灯饰照明</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>212</td>
            <td class="xl72" x:str>厨房卫浴</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>213</td>
            <td class="xl72" x:str>五金工具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>214</td>
            <td class="xl72" x:str>电工电料</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>215</td>
            <td class="xl72" x:str>墙地面材料</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>216</td>
            <td class="xl72" x:str>装饰材料</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="204" rowspan="9" style='height:153.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>18</td>
            <td class="xl72" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>汽摩配饰</td>
            <td class="xl72" x:num>217</td>
            <td class="xl72" x:str>汽车内饰</td>
            <td class="xl72" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>218</td>
            <td class="xl72" x:str>个人用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>219</td>
            <td class="xl72" x:str>车用电子</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>220</td>
            <td class="xl72" x:str>汽车配件</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>221</td>
            <td class="xl72" x:str>运输贮存</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>222</td>
            <td class="xl72" x:str>油品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>223</td>
            <td class="xl72" x:str>轮胎</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>224</td>
            <td class="xl72" x:str>汽车美容</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>225</td>
            <td class="xl72" x:str>摩托用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="113.33" rowspan="5" style='height:85.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>19</td>
            <td class="xl70" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>宠物用品</td>
            <td class="xl72" x:num>226</td>
            <td class="xl72" x:str>猫用品</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>227</td>
            <td class="xl72" x:str>狗用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>228</td>
            <td class="xl72" x:str>鸟类用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>229</td>
            <td class="xl72" x:str>水族用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>230</td>
            <td class="xl72" x:str>小宠用具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="68" rowspan="3" style='height:51.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>19</td>
            <td class="xl70" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>宠物用品</td>
            <td class="xl72" x:num>231</td>
            <td class="xl72" x:str>动物用品</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>232</td>
            <td class="xl72" x:str>昆虫用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>233</td>
            <td class="xl72" x:str>马用品</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="45.33" rowspan="2" style='height:34.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>20</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>婚庆礼仪</td>
            <td class="xl72" x:num>234</td>
            <td class="xl72" x:str>婚庆礼品</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>235</td>
            <td class="xl72" x:str>婚纱礼服</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" height="272" rowspan="12" style='height:204.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>21</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>计生情趣</td>
            <td class="xl72" x:num>236</td>
            <td class="xl76" x:str>避孕套</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>2000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>1000</td>
            <td class="xl72" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num>500</td>
            <td class="xl74" rowspan="12" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:num="2.9999999999999999e-002">3%</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>237</td>
            <td class="xl76" x:str>验孕测孕</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>238</td>
            <td class="xl76" x:str>润滑液</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>239</td>
            <td class="xl76" x:str>男用延时</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>240</td>
            <td class="xl76" x:str>飞机杯</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>241</td>
            <td class="xl76" x:str>倒模</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>242</td>
            <td class="xl76" x:str>仿真娃娃</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>243</td>
            <td class="xl76" x:str>仿真阳具</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>244</td>
            <td class="xl76" x:str>震动棒</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>245</td>
            <td class="xl76" x:str>跳蛋</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>246</td>
            <td class="xl76" x:str>情趣内衣</td>
          </tr>
          <tr height="22.67" style='height:17.00pt;mso-height-source:userset;mso-height-alt:340;'>
            <td class="xl72" x:num>247</td>
            <td class="xl76" x:str>其他情趣用品</td>
          </tr>
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;'>
            <td class="xl77" height="377.33" colspan="9" rowspan="14" style='height:283.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str><span style='mso-spacerun:yes;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>购物类商家入驻收费及退还规则<br /><br />1、平台使用费在商家入驻时一次性收取。<br />2、商家店铺年销售达到800单成交量或年销售额达到30万元(以先达到为准)，返还所缴平台使用年费的100%（农特产品除外）<br />3、商家店铺年销售达到500单成交量或年销售额达到20万元(以先达到为准)，返还所缴平台使用年费的50%（农特产品除外）<br />4、商家店铺年销售低于500单成交量或年销售额不足20万元(以先达到为准)，不返还平台使用年费（农特产品除外）<br />5、2017年10月20日起，商家数量根据系统自动判别，二级类别（重庆地区）商家签约数量达到30家（含）以上后，开始收取商家保证金和平台使用费；二级类别（其他省域）签约商家数量达到20家（含）以上后，开始收取保证金和平台使用费<br />6、一个店同时经营多个二级类别，若应收费类别占店铺经营总类别的60%（大于）以上，则收取商家保证金和平台使用费；反之则不收取商家保证金和平台使用费<br />7、保证金和平台使用费的减免优惠，需总裁特批后方可执行<br />8、技术服务费（佣金）按3%收取，农特产品按1%收取，技术服务费不得降低，也不得申请<br />9、结算周期为T+7，7天无条件退货者为T+15；提现周期为结算后次日（工作日）到银行卡<br />10、商家在平台上没有经营一年时间，不返还保证金及平台使用费<br />11、合同到期后，由商家提出申请， 经公司审批同意后，五个工作日内返还到商家指定账户。（如商家愿意留作次年的平台使用费，则不返还）<br /></td>
          </tr>
          <tr height="32" style='height:24.00pt;mso-height-source:userset;mso-height-alt:480;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="30.67" style='height:23.00pt;mso-height-source:userset;mso-height-alt:460;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="25.33" style='height:19.00pt;mso-height-source:userset;mso-height-alt:380;' />
          <tr height="36" style='height:27.00pt;mso-height-source:userset;mso-height-alt:540;' />
          <![if supportMisalignedColumns]>
          <tr width="0" style='display:none;'>
            <td width="32" style='width:24;'></td>
            <td width="98" style='width:74;'></td>
            <td width="74" style='width:56;'></td>
            <td width="132" style='width:99;'></td>
            <td width="80" style='width:60;'></td>
            <td width="90" style='width:68;'></td>
            <td width="74" style='width:56;'></td>
            <td width="89" style='width:67;'></td>
            <td width="160" style='width:120;'></td>
            <td width="72" style='width:54;'></td>
          </tr>
          <![endif]>
        </table>
      </div>
    </el-dialog>

    <!--表格开始-->
    <div class="contract_table">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%; text-align: center">
          <el-table-column
            prop="_id"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="signUpTime"
            label="签约时间">
          </el-table-column>
          <el-table-column
            prop="_source.published"
            label="合约时间">
          </el-table-column>
          <el-table-column
            prop="deposit"
            label="合约保证金">
          </el-table-column>
          <el-table-column
            prop="platformFee"
            label="合约平台使用年费">
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!--表格结束-->

    <!--页码开始-->
    <div class="Page_number">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[ 5, 10, 20, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total">
      </el-pagination>
    </div>
    <!--页码结束-->

    <!--合约内容开始-->
    <el-dialog
      title="合约内容"
      :visible.sync="dialogVisible"
      width="80%">
      <span class="contract_contents" v-html='contractAgreement'>
          <!--<p>本协议由缔约双方在自愿、平等、公平及诚实信用原则的基础上，根据《中华人民共和国合同法》等相关法律、法规的规定，经友好协商缔结。</p>
          <p>本协议由协议正文、附件及依据本协议公示于满集网(manjiwang.com)开放平台（以下简称“满集网商城平台”）的各项规则、流程所组成，协议附件及规则与本协议具有同等法律效力，如规则与本协议约定不一致的，以公布生效日期或签署日期在后的文件为准执行。</p>
          <p>本协议各条的标题仅为方便阅读而设，无意成为本协议的一部分，也不影响本协议的含义或解释。</p>
          <p>第一条 相关定义及解释</p>
          <p>1.1 满集网：重庆满集网络科技有限公司及其旗下子公司、分公司、分支机构或相关关联公司统称为“满集网”，本协议中提及的应由甲方或“满集网”行使的权利和履行的义务，由“满集网”内部负责相应区域及业务范围的公司分别履行。本协议由重庆满集网络科技有限公司代表“满集网”与乙方签署。</p>
          <p>1.2 “满集网manjiwang.com”网站：指由“满集网”提供技术支持和服务的域名为“manjiwang.com”的网站及其相关的二级域名网站，包括但不限于移动端的“满集商家”和“满集网”应用软件以及PC端网站。</p>
          <p>1.3  满集网商城平台：指运行于“满集网 manjiwang.com”网站的满集网商城开放平台，是“满集网manjiwang.com”网站上为用户和商家提供信息发布、交流，第三方经营者开设店铺经营，以及其他技术服务的电子商务交易服务平台。满集网平台也指此含义。</p>
          <p>1.4“满集网 manjiwang.com”网站用户：指所有在“满集网manjiwang.com”网站上注册成为会员的法人、自然人及其他组织，本协议中统称为“用户”（本文或称买家），除非另有说明，否则“用户”均指此含义。</p>
          <p>1.5 商家注册及入驻：商家注册指将成为“满集网商城平台”第三方经营者的商家（本文或称“卖家”），依据“满集网商城平台”入驻流程和要求完成在线信息提交，经“满集网”审核同意后，商家可以使用其自行设定的满集网商城平台用户名和密码登陆“满集网商城平台”，以开立店铺开展经营；商家入驻，亦称“店铺入驻”指第三方经营者完成商家注册，通过资质审核且满足本协议第四条店铺服务开通条件后成为“满集网商城平台”第三方经营者的过程；本协议中的商家指本协议缔约方中的“乙方”。</p>
          <p>1.6满集网商城平台用户名：亦称“店铺用户名”，是指商家完成商家注册后获取的与自设密码共同使用以登陆“满集网商城平台”商家管理系统，使用“满集网商城平台”店铺服务的登陆账户，每一个满集网商城平台用户名对应一个店铺。商家应妥善保管店铺用户名及密码信息，不得擅自转让或授权他人使用。</p>
          <p>1.7  店铺：商家在完成商家注册及商家入驻流程后，为进行合法经营，依据协议约定和满集网商城平台规则由乙方申请，“满集网”审核通过的具有独立且唯一性ID（英文IDentity的缩写，意为“身份标识号码”）、特定名称（可依据相关平台规则进行调整）的网络化虚拟商铺，乙方可依据经营需要，开设一个或多个店铺。乙方通过满集网商城平台用户名可以实现对该店铺的管理，包括但不仅限于商品信息上传、修改、删除处理，交易跟踪、取消等。</p>
          <p>1.8  满集网商城平台规则：指标示在“满集网商城平台”之上的，与商家经营有关的任何规范性文件，包括但不限于商家手册、满集网公告、商家帮助中心、各种规则、电子协议、信息等。</p>
          <p>1.9  保证金：商家向“满集网”缴纳的用以保证本协议履行及对商品和服务质量进行担保的金额，“满集网”可以依照本协议的相关约定对其进行处置。</p>
          <p>1.10  平台使用费：商家使用“满集网商城平台”各项服务时按照本协议约定缴纳的固定技术服务费用。具体缴纳标准见平台公示的规则。</p>
          <p>1.11  技术服务费：商家根据经营类目在达成每一单交易时按比例向“满集网”缴纳的技术服务费用，具体缴纳标准及方式见平台公示的标准。
          第二条 服务内容及乙方店铺经营方式</p>
          <p>2.1  甲方依照本协议第四条约定为乙方开通店铺服务后，乙方可使用“满集网商城平台”发布商品信息，与愿意购买乙方商品的甲方用户进行在线交流，订立买卖合同，并向通过“满集网商城平台”购买其商品的用户提供售后服务，同时可参与“满集网商城平台”相关活动及使用“满集网商城平台”同意提供的其他有偿服务。</p>
          <p>2.2  除上述服务内容外，乙方可使用本协议附件列明的其他甲方提供的有偿服务，具体服务内容以满集网平台公示或双方约定为准。</p>
          <p>2.3  乙方店铺经营方式：乙方店铺内商品，均以乙方自身名义进行商品信息上传、展示、咨询答复、商品销售、发票开具、物流配送服务及售后服务提供等；乙方销售及服务出现争议、纠纷，或经国家商品销售、质量监督、发票开具、物流配送服务及售后服务管理或权威监测部门判定或确认的争议、纠纷，或受到国家相关机关、机构调查处理时，均由乙方以销售者身份自行处理。“满集网”原则上不参与乙方店铺的经营，也不直接介入乙方与用户或他人之间的争议和纠纷，依据本协议和/或平台公示的规则等相关约定除外。
          第三条 入驻条件及证明文件提交</p>
          <p>3.1  入驻条件</p>
          <p>乙方申请成为“满集网商城平台”入驻商家，在“满集网商城平台”开展经营活动须满足以下条件：</p>
          <p>1）乙方已依照中华人民共和国法律注册并领取合法有效的营业执照及其他经营许可；</p>
          <p>2）乙方申请经营的商品来源合法，资质齐全；</p>
          <p>3）乙方申请经营的商品质量合格，符合国家及行业相关规定；</p>
          <p>4）乙方同意本协议及满集网商城平台相关规则。</p>
          <p>3.2  证明文件提交</p>
          <p>3.2.1  乙方须根据满集网商城平台相关规则及要求向甲方或甲方指定合作方提交证明文件或其他相关证明，包括但不限于营业执照、税务登记证、组织机构代码证、授权委托书、商标注册证、质检报告、报关单、检验检疫证书、产品来源地证明、经营许可证、特殊产品经营经可证、卫生许可证等。</p>
          <p>3.2.2  乙方保证向甲方提供的上述证明文件或说明文件或其他相关证明发生任何变更或更新时，及时通知甲方，若上述文件变更或更新导致乙方不符合本协议所规定入驻条件的，甲方有权单方全部或部分限制乙方经营，直至终止本协议。</p>
          <p>3.2.3  乙方对其提交的证明文件或其他相应证明的真实性、合法性、准确性、有效性承担全部法律责任，若因乙方提交虚假、过期文件或未及时更新或通知证明文件导致纠纷或被相关国家机关处罚的，由乙方独立承担全部法律责任，如因此造成满集网（包括“满集网”合作方、代理人或职员）损失的，乙方应对甲方的全部损失予以赔偿。</p>
          <p>第四条 店铺服务开通及停止</p>
          <p>4.1  对于乙方拟开展经营的特定店铺，甲方在乙方提出开店申请并满足以下全部条件后7个工作日内为乙方开通服务，甲方将在服务正式开通前一个工作日以在平台留存的通讯邮件方式或短信通知乙方。</p>
          <p>1) 乙方已按照满集网平台规则约定的金额足额缴纳保证金；</p>
          <p>2) 乙方已按照本协议及满集网商城平台相关规则提交证明文件或其他相关证明并已通过甲方审核；</p>
          <p>3) 乙方已注册成为满集网商城平台用户且本协议已签署生效；</p>
          <p>4) 乙方已按照满集网商城平台相关规则约定足额缴纳特定店铺相应服务期的平台使用费。</p>-->

      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--合约内容结束-->

  </div>
</template>

<script>

  import GetContractInfo from '../../../../api/ShopContract/GetContractInfo'
  import search from '../../../../api/test'
  export default {

    data(){
      return {

        articleCategory: '',
        order: '',
        searchContent: '',
        pageNum: 1,
        size: 5,
        dialogFormVisible: false,

        dialogVisible: false,//合约内容弹窗是否显示
        tableData: [],//表格数据
        total: 0,
        currentPage4: 1, //当前页码
        startTime:'',
        endTime:'',
        deposit:'',
        platformFee:'',
        contractAgreement:'',//合约内容
      }
    },

    methods:{

      getlist(){
        search.call(this,{
          articleCategory: this.articleCategory,
          order: this.order,
          queryStr: this.searchContent,
          pageNum: this.pageNum,
          size: this.size,
        })
          .then(
            (res) => {
              console.log(res,'搜索数据');
              if(res.data.Code ===1 ){

                this.tableData = res.data.Data.hits;
                this.total = res.data.Data.total;
                console.log(this.total,'总条数');
              } else {

              }

            }
          )
      },


      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.size = val;
        this.getlist();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum = val;
        this.getlist();
      },
      dateFormat(time) {
        var date=new Date(time);
        var year=date.getFullYear();
        var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1
        var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate()
        var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours()
        var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()
        var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds()
        // 拼接
        return year+"年"+month+"月"+day+"日"
      }
    },

    created() {
      this.getlist();
      this.time = new Date().toLocaleString();
      GetContractInfo.call(this,`?input.clientTimespan=${this.time}`).then(res=>{
        if(res.data.code === 1){
           var data = res.data.data
           this.startTime = this.dateFormat(data.startTime)
           this.endTime = this.dateFormat(data.endTime)
           this.platformFee = data.platformFee
           this.deposit = data.deposit
           this.tableData = data.contractHistory
           this.contractAgreement = data.contractAgreement
           this.total = data.contractHistory.length
        }
      })
    }
  }
</script>

<style lang="less" scoped>

  .warp_bg{
    .contract_top{
      background: #fff;
      padding: 20px;
      position: relative;
      .time{
        font-size: 18px;
        font-weight: bold;
        .star_end{
          color: #01a2fc;
        }
        .day{
          color: #ff0101;
        }
      }
      .total{
        font-size: 16px;
        margin-top: 10px;
        p{
          float: left;
          margin-right: 80px;
        }
        span{
          margin-right: 20px;
        }
      }
      .total:after{
        content: '';
        clear: both;
        display: block;
      }
      .contractBtn{
        cursor: pointer;
        position: absolute;
        top: 30px;
        right: 20px;
        color: #00a2ff;
      }
    }
    .sure{
      margin-top: 20px;
      p{
        margin: 10px 0;
      }
      .bottom{
        display: flex;
        .time{
          flex: 1;
          font-weight: normal;
          font-size: 15px;
          vertical-align: middle;
          color: #ff0000;
          margin-left: 20px;
        }
      }
    }
  }

  .contract_table{
    margin-top: 10px;
  }

  .Page_number{
    padding: 20px;
    text-align: right;
    background: #fff;
  }

  .contract_contents{
    p{
      text-indent: 10px;
    }
  }



  tr {
    mso-height-source: auto;
    mso-ruby-visibility: none;
  }

  col {
    mso-width-source: auto;
    mso-ruby-visibility: none;
  }

  br {
    mso-data-placement: same-cell;
  }

  .style0 {
    mso-number-format: "General";
    text-align: general;
    vertical-align: middle;
    white-space: nowrap;
    mso-rotate: 0;
    mso-pattern: auto;
    mso-background-source: auto;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    border: none;
    mso-protection: locked visible;
    mso-style-name: "常规";
    mso-style-id: 0;
  }

  .style16 {
    mso-style-name: "货币[0]";
    mso-style-id: 7;
  }

  .style17 {
    mso-pattern: auto none;
    background: #EBF1DE;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "20% - 强调文字颜色 3";
  }

  .style18 {
    mso-pattern: auto none;
    background: #FFCC99;
    color: #3F3F76;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    border: .5pt solid #7F7F7F;
    mso-style-name: "输入";
  }

  .style19 {
    mso-style-name: "货币";
    mso-style-id: 4;
  }

  .style20 {
    mso-style-name: "千位分隔[0]";
    mso-style-id: 6;
  }

  .style21 {
    mso-pattern: auto none;
    background: #D8E4BC;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "40% - 强调文字颜色 3";
  }

  .style22 {
    mso-pattern: auto none;
    background: #FFC7CE;
    color: #9C0006;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "差";
  }

  .style23 {
    mso-style-name: "千位分隔";
    mso-style-id: 3;
  }

  .style24 {
    mso-pattern: auto none;
    background: #C4D79B;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "60% - 强调文字颜色 3";
  }

  .style25 {
    color: #0000FF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: underline;
    text-underline-style: single;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "超链接";
    mso-style-id: 8;
  }

  .style26 {
    mso-number-format: "0%";
    mso-style-name: "百分比";
    mso-style-id: 5;
  }

  .style27 {
    color: #800080;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: underline;
    text-underline-style: single;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "已访问的超链接";
    mso-style-id: 9;
  }

  .style28 {
    mso-pattern: auto none;
    background: #FFFFCC;
    border: .5pt solid #B2B2B2;
    mso-style-name: "注释";
  }

  .style29 {
    mso-pattern: auto none;
    background: #DA9694;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "60% - 强调文字颜色 2";
  }

  .style30 {
    color: #1F497D;
    font-size: 11.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    mso-style-name: "标题 4";
  }

  .style31 {
    color: #FF0000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "警告文本";
  }

  .style32 {
    color: #1F497D;
    font-size: 18.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    mso-style-name: "标题";
  }

  .style33 {
    color: #7F7F7F;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: italic;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "解释性文本";
  }

  .style34 {
    color: #1F497D;
    font-size: 15.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1.0pt solid #4F81BD;
    mso-style-name: "标题 1";
  }

  .style35 {
    color: #1F497D;
    font-size: 13.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1.0pt solid #4F81BD;
    mso-style-name: "标题 2";
  }

  .style36 {
    mso-pattern: auto none;
    background: #95B3D7;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "60% - 强调文字颜色 1";
  }

  .style37 {
    color: #1F497D;
    font-size: 11.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1.0pt solid #A7BFDE;
    mso-style-name: "标题 3";
  }

  .style38 {
    mso-pattern: auto none;
    background: #B1A0C7;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "60% - 强调文字颜色 4";
  }

  .style39 {
    mso-pattern: auto none;
    background: #F2F2F2;
    color: #3F3F3F;
    font-size: 11.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    border: .5pt solid #3F3F3F;
    mso-style-name: "输出";
  }

  .style40 {
    mso-pattern: auto none;
    background: #F2F2F2;
    color: #FA7D00;
    font-size: 11.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    border: .5pt solid #7F7F7F;
    mso-style-name: "计算";
  }

  .style41 {
    mso-pattern: auto none;
    background: #A5A5A5;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    border: 2.0pt double #3F3F3F;
    mso-style-name: "检查单元格";
  }

  .style42 {
    mso-pattern: auto none;
    background: #FDE9D9;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "20% - 强调文字颜色 6";
  }

  .style43 {
    mso-pattern: auto none;
    background: #C0504D;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "强调文字颜色 2";
  }

  .style44 {
    color: #FA7D00;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 2.0pt double #FF8001;
    mso-style-name: "链接单元格";
  }

  .style45 {
    color: #000000;
    font-size: 11.0pt;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    border-left: none;
    border-top: .5pt solid #4F81BD;
    border-right: none;
    border-bottom: 2.0pt double #4F81BD;
    mso-style-name: "汇总";
  }

  .style46 {
    mso-pattern: auto none;
    background: #C6EFCE;
    color: #006100;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "好";
  }

  .style47 {
    mso-pattern: auto none;
    background: #FFEB9C;
    color: #9C6500;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "适中";
  }

  .style48 {
    mso-pattern: auto none;
    background: #DAEEF3;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "20% - 强调文字颜色 5";
  }

  .style49 {
    mso-pattern: auto none;
    background: #4F81BD;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "强调文字颜色 1";
  }

  .style50 {
    mso-pattern: auto none;
    background: #DCE6F1;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "20% - 强调文字颜色 1";
  }

  .style51 {
    mso-pattern: auto none;
    background: #B8CCE4;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "40% - 强调文字颜色 1";
  }

  .style52 {
    mso-pattern: auto none;
    background: #F2DCDB;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "20% - 强调文字颜色 2";
  }

  .style53 {
    mso-pattern: auto none;
    background: #E6B8B7;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "40% - 强调文字颜色 2";
  }

  .style54 {
    mso-pattern: auto none;
    background: #9BBB59;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "强调文字颜色 3";
  }

  .style55 {
    mso-pattern: auto none;
    background: #8064A2;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "强调文字颜色 4";
  }

  .style56 {
    mso-pattern: auto none;
    background: #E4DFEC;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "20% - 强调文字颜色 4";
  }

  .style57 {
    mso-pattern: auto none;
    background: #CCC0DA;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "40% - 强调文字颜色 4";
  }

  .style58 {
    mso-pattern: auto none;
    background: #4BACC6;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "强调文字颜色 5";
  }

  .style59 {
    mso-pattern: auto none;
    background: #B7DEE8;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "40% - 强调文字颜色 5";
  }

  .style60 {
    mso-pattern: auto none;
    background: #92CDDC;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "60% - 强调文字颜色 5";
  }

  .style61 {
    mso-pattern: auto none;
    background: #F79646;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "强调文字颜色 6";
  }

  .style62 {
    mso-pattern: auto none;
    background: #FCD5B4;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "40% - 强调文字颜色 6";
  }

  .style63 {
    mso-pattern: auto none;
    background: #FABF8F;
    color: #FFFFFF;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 0;
    mso-style-name: "60% - 强调文字颜色 6";
  }

  td {
    mso-style-parent: style0;
    padding-top: 1px;
    padding-right: 1px;
    padding-left: 1px;
    mso-ignore: padding;
    mso-number-format: "General";
    text-align: general;
    vertical-align: middle;
    white-space: nowrap;
    mso-rotate: 0;
    mso-pattern: auto;
    mso-background-source: auto;
    color: #000000;
    font-size: 11.0pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 宋体;
    mso-generic-font-family: auto;
    mso-font-charset: 134;
    border: none;
    mso-protection: locked visible;
  }

  .xl65 {
    mso-style-parent: style0;
    text-align: left;
    white-space: normal;
    mso-font-charset: 134;
  }

  .xl66 {
    mso-style-parent: style0;
    text-align: right;
    mso-font-charset: 134;
  }

  .xl67 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    mso-font-charset: 134;
  }

  .xl68 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    mso-font-charset: 134;
  }

  .xl69 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 16.0pt;
    font-weight: 700;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl70 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl71 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl72 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl73 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl74 {
    mso-style-parent: style0;
    mso-number-format: "0%";
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl75 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl76 {
    mso-style-parent: style0;
    text-align: center;
    white-space: normal;
    font-size: 10.0pt;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }

  .xl77 {
    mso-style-parent: style0;
    text-align: left;
    white-space: normal;
    mso-font-charset: 134;
    border: .5pt solid windowtext;
  }
</style>
