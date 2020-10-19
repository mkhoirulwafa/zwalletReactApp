import Axios from "axios";
let role = 1230942

export const login = (email, password) => {
    // email.preventDefault();
    // password.preventDefault();
        const data = {
          email: email,
          password: password,
        };
        Axios.post(`http://localhost:8000/api/v1/login`, data)
          .then((res) => {
              localStorage.setItem("TOKEN_KEY", res.data.data.token)
              if(res.data.data.role === 18) role = 1892301
              else if(res.data.data.role === 12) role = 1230942
              localStorage.setItem("as", role)
          })
          .catch((err) => {
            console.log(err.message);
          });
};

export const loginAs = ()=>{
    if(localStorage.getItem("as") === '1892301') return true
    else if(localStorage.getItem("as") === '1230942' ) return false
}


export const logout = ()=>{
    localStorage.removeItem("TOKEN_KEY")
    localStorage.removeItem("as")
}

export const isLogin = () => {
  // localStorage.removeItem('TOKEN_KEY')
  if (localStorage.getItem("TOKEN_KEY")) return true;
  else return false;
};
