import React from 'react';
import { Provider as MerchantProvier } from '@/store/provider';
import useRedux, {Provider} from '@/hooks/useRedux';
import models from '@/store';
import '@/styles/base.scss';

const App = (props: any) => {
  const [store, dispatch] = useRedux(models);
  return (
    <Provider store={
      {
        ...store,
        dispatch
      }  
    }
    >
      <MerchantProvier>
        {props.children}
      </MerchantProvier>
    </Provider>
  )
};
export default App;
