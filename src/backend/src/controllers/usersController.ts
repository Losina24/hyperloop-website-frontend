import db from "../database";
import bcrypt from 'bcrypt';

class UsersController {
    
    private saltRounds = 10;

    public async login (email:string, password:string): Promise<object> {
        
        return new Promise ((resolve:any, reject:any) => {
            
            db.getConnection((err:any, conn:any) => {

                bcrypt.hash(password, this.saltRounds).then(function(hash) {
                    let query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + hash + "'";
                
                    conn.query(query, (error:any, results:any) => {
                        conn.release()
    
                        if (error) {
                            reject({
                                http: 406,
                                status: 'Failed',
                                error: error
                            })
                        }
    
                        if (results.length == 0) {
                            resolve({
                                http: 204,
                                status: 'User or passwors is incorrect',
                            })
                        }
    
                        resolve({
                            http: 200,
                            status: 'Success',
                        })
                    }) 
                });
            })
        })
    }

    public async register (name:string, email:string, password:string): Promise<object> {
        
        return new Promise ((resolve:any, reject:any) => {
            
            db.getConnection((err:any, conn:any) => {

                bcrypt.hash(password, this.saltRounds).then(function(hash) {
                    let query = "INSERT INTO users (email, password, name) VALUES ('"+ email +"', '"+ hash +"', '"+  name +"')";
                
                    conn.query(query, (error:any, results:any) => {
                        conn.release()
    
                        if (error) {
                            reject({
                                http: 406,
                                status: 'Failed',
                                error: error
                            })
                        }
    
                        resolve({
                            http: 200,
                            status: 'Success',
                        })
                    }) 
                });
            })
        })
    }
}

export default new UsersController();