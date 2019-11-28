import { ActionContext } from 'vuex';

import { upload, getPendingCrediting, applyPendingCrediting } from '../../services/api'

interface Info {
  title: string,
  key: string,
  filename: string,
  extroInfo?: string,
  pdf?: {
    url: string,
    title: string,
  },
  url: string,
}

interface State {
  crediting: object,
  infos: Info[],
};

const supplementState: State = {
  crediting: {},
  infos: [
    {
      key: 'platform_entry_agreement',
      title: '平台入驻协议',
      filename: '',
      extroInfo: '文档所有信息清晰可见，内容真实有效',
      pdf: {
        url: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/contracts/20180820/Platform_Agreement.pdf',
        title: '下载平台入驻协议',
      },
      url: '',
    },
    {
      key: 'ca_attorney',
      title: 'CA授权委托书',
      filename: '',
      extroInfo: '文档所有信息清晰可见，内容真实有效',
      pdf: {
        url: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/contracts/20180820/Authorized.pdf',
        title: '下载CA 委托授权书',
      },
      url: '',
    },
    {
      key: 'cfca_commitment',
      title: 'CFCA 数字证书使用承诺函',
      filename: '',
      extroInfo: '文档所有信息清晰可见，内容真实有效',
      pdf: {
        url: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/contracts/20180820/CFCA_Commitment.pdf',
        title: '下载数字证书使用承诺函',
      },
      url: '',
    },
    {
      key: 'collection_info',
      title: '企业信息收集表',
      filename: '',
      extroInfo: '文档所有信息清晰可见，内容真实有效',
      pdf: {
        url: 'https://cnbj3-fusion.fds.api.xiaomi.com/scf/contracts/information_form.doc',
        title: '下载企业信息收集表',
      },
      url: '',
    },
    {
      key: 'policy',
      title: '公司章程',
      filename: '',
      url: '',
    },
    {
      key: 'tax_certificate',
      title: '税务登记证或多合一执照',
      filename: '',
      url: '',
    },
    {
      key: 'history',
      title: '公司介绍及历史发展沿革',
      filename: '',
      url: '',
    },
    {
      key: 'opening_permit',
      title: '开户许可证',
      filename: '',
      url: '',
    },
    {
      key: 'institution_certificate',
      title: '机构信用代码证',
      filename: '',
      url: '',
    },
    {
      key: 'verification_report',
      title: '验资报告',
      filename: '',
      url: '',
    },
    {
      key: 'latest_credit_report',
      title: '最新人民银行征信报告',
      filename: '',
      url: '',
    },
    {
      key: 'last_three_month_report_0',
      title: '近三个月财务报告',
      filename: '',
      url: '',
    },
    {
      key: 'last_three_month_report_1',
      title: '',
      filename: '',
      url: '',
    },
    {
      key: 'last_three_month_report_2',
      title: '',
      filename: '',
      url: '',
    },
    {
      key: 'last_three_year_report_0',
      title: '近三年财务审计报告',
      filename: '',
      url: '',
    },
    {
      key: 'last_three_year_report_1',
      title: '',
      filename: '',
      url: '',
    },
    {
      key: 'last_three_year_report_2',
      title: '',
      filename: '',
      url: '',
    },
  ],
}

const actions = {
  async upload({commit}: ActionContext<State, any>, payload: object): Promise<any> {
    const { params, filename, index } = payload as any;
    const res = await upload(params);
    commit('saveUpload', {
      res,
      filename,
      index,
    });
  },
  async getNeedInfo({commit}: ActionContext<State, any>, payload: object): Promise<any> {
    const res = await getPendingCrediting();
    commit('saveNeedInfo', res);
  },
  async submit({commit}: ActionContext<State, any>, payload: object): Promise<any> {
    const res = await applyPendingCrediting(payload)
    return res;
  },
}

const mutations = {
  saveUpload(state: State, payload: object): any {
    const {res, filename, index } = payload as any;
    state.infos[index].url = res.url;
    state.infos[index].filename = filename;
    state.infos[index].url = res.url;
  },
  saveNeedInfo(state: State, payload: object): any {
    state.crediting = payload;
    const { fields } = payload as any;
    let { infos } = state;
    infos = infos.filter((item) => {
      console.log(fields.indexOf(item.key) > -1)
      if (/last_three_month_report/.test(item.key)) {
        return fields.indexOf('last_three_year_report') > -1
      } else if (/last_three_month_report/.test(item.key)) {
        return fields.indexOf('last_three_month_report') > -1
      } else {
        return fields.indexOf(item.key) > -1
      }
    })
    state.infos = infos;
  },
}

export default {
  namespaced: true,
  state: supplementState,
  actions,
  mutations,
}