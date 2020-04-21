import {mutation, queryGql} from "../graphQL/graphQL.service";

const auth = {
  register: async (user:any) => {
    const query = `
                    signup( email: "${user.mail}", 
                            phone: "${user.phone}", 
                            address: "${user.address}", 
                            username: "${user.name}",
                            password: "${user.password}"
                            ){
                      authorization
                      user{
                          username
                          id
                      }
                    }
                  `;
    return mutation(query);
  },
  login: (user:any) => {
    const query = `
                login( email: "${user.mail}", 
                       password: "${user.password}"){
                  authorization
                  user {
                      username
                      id
                  }
                }
              `;
    return queryGql(query)
  },
  isLoggedInUser: () => {
    return localStorage.getItem("avilena_at");
  }
};

export default auth;
