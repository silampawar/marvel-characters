
import axios from "axios";


import MockAdapter from 'axios-mock-adapter';

const API_URL= 'https://gateway.marvel.com:443/v1/public/characters';

beforeEach(() => {
    jest.clearAllMocks();
  });  

  test("useAxios should call axios and return data", async () => {
   /* await useAxios({ apiUrl: API_URL, params: { ts:"", publicKey:"", hash:"", offset: 0, limit: 40 }});
    expect(useAxios).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalled();*/

    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet(API_URL).reply(200, data);



    //const myFuncComp = renderHook(() => useAxios({ apiUrl: API_URL, params: { ts:"", publicKey:"", hash:"", offset: 0, limit: 40 }}));
   // const myFuncComp = act( () =>renderHook(() => {useAxios({ apiUrl: API_URL, params: { ts:"", publicKey:"", hash:"", offset: 0, limit: 40 }})}));
    
  });