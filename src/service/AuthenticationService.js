import axios from 'axios'

const backendUrl="http://54.161.201.128:5001/";

class AuthenticationService{

    validateUser(username,password){

        return new Promise(function(resolve, reject) {
            axios.get(backendUrl+'authentication/validate/'+username+'/'+password)
            .then(function(response){
                console.log(response);
                resolve(response.data);
            })
            .catch(function(error){
                console.error(error);
                reject("Error, "+error)
            });
        });
    }

}

export default new AuthenticationService();

