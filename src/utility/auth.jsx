import axios from "axios";

export const doLogin = (body) => {
    // const { email, pass } = this.state;
    // const body = { email, pass };
    return axios.post("http://localhost:8080/auth", body)
        // .then(result => {
        //     console.log(result.data);
        //     localStorage.setItem("user-info", JSON.stringify(result.data.data));
        //     this.setState({
        //         isSuccess: true
        //     })
        // })
        // .catch(error => {
        //     console.log(error.response.data);
        //     this.setState({
        //         isError: true,
        //         errorMsg: `${error.response.data.err.msg}`
        //     })
        // })
}