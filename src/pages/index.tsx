import React from 'react';
import { Link } from 'router';
import Page from './components/page';
import ProductCard from './intro/products/components/productCard';
import Tabs from '@/components/tab/tabs';
import TabPanel from '@/components/tab/tabPanel';
import Button from '@/components/button';
import Icon from '@/components/icon';
import Contact from './components/contact/index';
import Swiper from '@/components/swiper/index';
import './index.scss';

const Index = () => {
  const features = [
    {
      title: '在线开通',
      desc: '合作企业仅需登录平台，填写上传企业信息，即可提交审核。',
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565056373049/-2005175349.png'
    },
    {
      title: '快捷授信',
      desc: '依托小米集团大数据资源，线上授信，快捷方便。',
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565056372453/1356481925.png'
    },
    {
      title: '操作安全',
      desc: '与中国金融认证中心（CFCA）强强联合，实现银行级硬件数字证书鉴权。',
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565056372163/-867896376.png	'
    },
    {
      title: '获贷迅速',
      desc: '1分钟在线申请，实时提交，最快24小时审核放款。',
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565056372269/-1715730970.png'
    }
  ]
  const securities = [
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564555778348/2138537627.png',
      title: 'CA举证保障',
      desc: '客户在平台的所有敏感操作均需要使用中国金融认证中心CFCA颁发的数字证书进行身份认证和意愿认证，确保客户数据完整性及不可篡改性。'
    },
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564555778353/-1667438424.png',
      title: '电子化合同签署',
      desc: '平台在对客户做主体身份核验和操作鉴权后，采用持牌CA机构颁发的数字证书对合同进行签章，签署后合同存管在第三方服务机构，从而保证了电子合同的法律效力。'
    },
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564555778387/1796162942.png',
      title: '证据链举证',
      desc: '业务流程中的客户数据、行为数据、业务参数和合同摘要信息都通过小米金融区块链及加密技术做存证，存证信息覆盖完整的业务流程，且不可篡改。'
    }   
  ]

  const products = [
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565660495866/-1316228523.png',
      title: '应收账款保理',
      desc: '小米供应链金融为与小米集团有稳定贸易合作的供应商及小米网、小米有品等有稳定合作的小米生态链企业提供基于应收账款的融资服务。',
      tips: [{
        icon: 'tip-icon-7',
        text: '改善财务报表'
      }, {
        icon: 'tip-icon-9',
        text: '低利率'
      }, {
        icon: 'tip-icon-6',
        text: '线上申请'
      }],
      url: '/intro-product/accountreceive'
    },
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565660495894/1213722136.png',
      title: '债权转让',
      desc: '债权转让凭证是在功能上类似电子票据，但优于票据的结算和融资工具，可以在平台上拆分流转或融资。',
      tips: [{
        icon: 'tip-icon-15',
        text: '转让零成本'
      }, {
        icon: 'tip-icon-12',
        text: '负债可出表'
      }, {
        icon: 'tip-icon-5',
        text: '融资成本低'
      }],
      url: '/intro-product/debttransfer'
    },
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565660495811/1294252090.png',
      title: '全链融资',
      desc: '通过小米集团供应链赋能初创企业，为创造好产品的初创企业提供生产、加工、营销等企业经营所需资金的金融产品。',
      tips: [{
        icon: 'tip-icon-3',
        text: '订单即可融资'
      }, {
        icon: 'tip-icon-14',
        text: '流程简单便捷'
      }, {
        icon: 'tip-icon-13',
        text: '银行授信零占用'
      }],
      url: '/intro-product/fullchain'
    },
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565660495826/-144681731.png',
      title: '融资租赁',
      desc: '⼩⽶供应链金融对有需要采购设备的企业提供直租或回租的融资租赁服务。',
      tips: [{
        icon: 'tip-icon-2',
        text: '税务优化'
      }, {
        icon: 'tip-icon-5',
        text: '解决中长期融资需求'
      },, {
        icon: 'tip-icon-11',
        text: '盘活固定资产'
      }],
      url: '/intro-product/financinglease'
    },
    {
      img: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565660495811/1803339235.png',
      title: '米店融',
      desc: '小米供应链金融为解决新零售门店日常订货资金需求，推出的资金解决方案。',
      tips: [{
        icon: 'tip-icon-8',
        text: '线上申请'
      }, {
        icon: 'tip-icon-1',
        text: '按日计息'
      }, {
        icon: 'tip-icon-11',
        text: '随借随还'
      }, {
        icon: 'tip-icon-4',
        text: '无需抵押'
      }],
      url: '/intro-product/mihome'
    },
  ]

  return (
    <Page className="page-index">
      <div className="swiper">
        <Swiper rect={true} autoRun={true}>
          <div className="swiper-item" style={{backgroundImage:'url(https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565679425365/301572840.png)'}}>
            <div className="swiper-item-detail">
              <h2>小米集团供应商</h2>
              <p className="swiper-item-detail-desc">小米供应链金融针对小米供应商推出应收账款保理产品，方便供应商提前结账、为小米供应商提供基于应收账款转让的融资服务。</p>
              <div className="split"></div>
              <p className="swiper-item-detail-tips">提前结账<span>|</span>加速资金周转<span>|</span>财务出表</p>
              <Link to="/intro-product/accountreceive"><Button type="border-white" radius style={{marginTop: 21}}>查看详情</Button></Link>
            </div>
          </div>
          <div className="swiper-item" style={{backgroundImage:'url(https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565679425423/1784458401.png)'}}>
            <div className="swiper-item-detail">
              <h2>小米终端零售商</h2>
              <p>小米供应链金融针对小米终端零售商推出新零售产品，方便零售商向小米采购货物，以最小的成本获得最大的资金储备。</p>
              <div className="split"></div>
              <p className="swiper-item-detail-tips">低利率，无抵押<span>|</span>直接充值至采购账户<span>|</span>按需融资，随借随还</p>
              <Link to="/intro-product/mihome"><Button type="border-white" radius style={{marginTop: 21}}>查看详情</Button></Link>
            </div>
          </div>
          <div className="swiper-item" style={{backgroundImage:'url(https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1565679425707/-1176989287.png)'}}>
            <div className="swiper-item-detail">
              <h2>大型核心企业</h2>
              <p>小米供应链金融为大型核心企业提供了一套应收账款电子债权凭证系统，债权凭证可以在平台上进行拆分流转或者融资。</p>
              <div className="split"></div>
              <p className="swiper-item-detail-tips"> 自由拆分<span>|</span>操作、融资便利<span>|</span>支付、融资成本较低</p>
              <Link to="/intro-product/debttransfer"><Button type="border-white" radius={true} style={{marginTop: 21}}>查看详情</Button></Link>
            </div>
          </div>
        </Swiper>
      </div>
      <div className="product-features">
        <div className="product-features-container">
          <ul>
            {
              features.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.img} />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <ProductCard 
        title="产品服务" 
        titleEn="product-service" 
        subTitle="甄选企业金融产品，专业科技金融服务" 
        align="left" 
        style={{background: '#fff'}}
      >
        <div className="product-service">
          <Tabs>
            {
              products.map((product, index) => (
                <TabPanel title={product.title} key={index}>
                  <div className="product-detail">
                    <div className="product-detail-left">
                      <img src={product.img} />
                    </div>
                    <div className="product-detail-right">
                      <h3>{product.title}</h3>
                      <p>{product.desc}</p>
                      <ul className="tips">
                        {
                          product.tips.map((item, index) => (
                            <li key={index}>
                              <i className={item.icon}></i>
                              <span>{item.text}</span>
                            </li>
                          ))
                        }
                      </ul>
                      <div className="bottom">
                        <a href="apply.html#/companycenter/service-center">
                          <Link to={product.url}>
                            <Button style={{width:'180px'}} radius>
                              <span>查看详情</span>
                              <Icon type="arrow" />
                            </Button>
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))
            }
          </Tabs>
        </div>
      </ProductCard>
      <ProductCard 
        title="安全保障" 
        titleEn="system-security" 
        subTitle="科技助力金融服务，为企业保驾护航" 
        align="left" 
      >
        <ul className="securities">
          {
            securities.map((item, index) => {
              return(
                <li key={index}>
                  <img src={item.img} />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              )
            })
          }
        </ul>
      </ProductCard>
      <ProductCard 
        title="业务流程" 
        titleEn="business-process" 
        subTitle="全程银行级安全保护，避免信息泄露" 
        style={{background: '#fff'}}
        align="left" 
      >
        <div className="process">
          <div className="process-left">
            <h4>简单四步<br/>让您的企业轻松融资</h4>
          </div>
          <div className="process-right">
            <ul className="product-financing-process">
              <li>
                <img src="https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564646896299/-973562938.png"/>
                <i>01</i>
                <p>实名认证</p>
              </li>
              <li>
                <img src="https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564646896310/1813626413.png"/>
                <i>02</i>
                <p>开通产品</p>
              </li>
              <li>
                <img src="https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564646896328/1716760006.png"/>
                <i>03</i>
                <p>在线申请</p>
              </li>
              <li>
                <img src="https://cnbj3-fusion.fds.api.xiaomi.com/scf/static_resources/1564646896350/-2115208251.png"/>
                <i>04</i>
                <p>自动放款</p>
              </li>
            </ul>
          </div>
        </div>
      </ProductCard>
      <Contact />
    </Page>
  );
};
export default Index;
