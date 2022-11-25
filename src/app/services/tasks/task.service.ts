import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  apiUrl: string = "http://localhost:3000/tasks";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  createTask(data: Task) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  getTasklist(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  updateTask(id: any, data: any): Observable<any> {
    console.log("updateTask',data: " + JSON.stringify(data));
    return this.http.put(`${this.apiUrl}/${id}`, data, {
      headers: this.headers,
    });
  }

  deleteTask(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  ///catch all exceptions for api calling
}
