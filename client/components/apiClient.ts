
type ResponseKind = 'success' | 'failure';
type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:3001';
export const fiboCal = async (
  options:[],
): Promise<NetworkResponse> => {

  const response = await axios.post(baseUrl+'/api/fibo',options)
  if(response.data) {
    return {
      kind: 'success',
      body: response.data.next
    };
  } else {
    return {
      kind: 'failure'
    };
  }
};