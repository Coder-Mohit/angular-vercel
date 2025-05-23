import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
  url = "http://localhost:3000/users";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
  
  deleteUser(userId: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${userId}`);
  }

  getSelectedUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${userId}`);
  }
  
  updateUser(userData:User):Observable<User> {    
    return this.http.put<User>(`${this.url}/${userData.id}`,userData);
  }
}
