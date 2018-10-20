import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) 
  {

  }

  getUserDetails(username,password)
  {
      return this.http.post('src/environments/test/auth.php', {username,password}).subscribe(
        data=> { console.log(data," is what we got from the server")}
      )
  }
}




