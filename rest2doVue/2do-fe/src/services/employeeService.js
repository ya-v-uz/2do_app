import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://192.168.1.126:8090/employees/"

class EmployeeService {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    postEmployees(title, date){
        let data = {
            "name": title,
            "role": date
   }
        axios.post(EMPLOYEE_API_BASE_URL, data).then((response) =>{
            console.log(response);
        })
    }

}

export default new EmployeeService()