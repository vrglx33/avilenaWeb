import {mutation, queryGql} from "../graphQL/graphQL.service";

const auth = {
  register: async (user:any) => {
    const query = `
                    signup( email: "${user.email}", 
                            phone: "${user.phone}", 
                            address: "${user.address}", 
                            username: "${user.name}"){
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
                login( email: "${user.email}", 
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
    return localStorage.getItem("user");
  }
};

export default auth;
