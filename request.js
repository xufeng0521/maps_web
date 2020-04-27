import axios from 'js/axios.min'


// 创建 axios 实例
axios.defaults.headers = {
    'Content-Type': 'application/json'
};

const service = axios.create({
    timeout: 5000 // 请求超时时间
});


// request interceptor  请求拦截器,如果有token则在请求上加上token
service.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.token = localStorage.getItem('Authorization');
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    });

// response interceptor 返回拦截器
service.interceptors.response.use(
    response => {
        //如果返回401,则清除token,跳转登录
        if (response.data.code === 401) {
            localStorage.removeItem('Authorization');
            return this.$router.push('/login');
        }
        return response
    },
    error => {
        console.log('error' + error) // for debug
        return Promise.reject(error)
    });

export default service