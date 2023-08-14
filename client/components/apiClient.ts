
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
  console.log(response.data)
  if(response.data) {
    return {
      kind: 'success',
      next: response.data.next,
      data: response.data.data
    };
  } else {
    return {
      kind: 'failure'
    };
  }
};