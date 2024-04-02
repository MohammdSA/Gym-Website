import { Injectable } from '@angular/core';
import {Class} from "./class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  url = 'http://127.0.0.1:8000/classes';


  constructor() {}

  async getAllClasses() : Promise<Class[]> {
    const res = await fetch(this.url)
    const data = await res.json()
    data.forEach((e: any) => {
      const oldThumb = e.thumbnail;
      const backUrl = this.url.replace('/classes', '')
      e.thumbnail = `${backUrl}/media/${oldThumb}`
    })
    return await data ?? [];
  }

  async getClassById(id: Number): Promise<Class | undefined> {
    const res = await fetch(`${this.url}/${id}`)
    const data = await res.json()
    const oldThumb = data.thumbnail;
    const backUrl = this.url.replace('/classes', '')
    data.thumbnail = `${backUrl}/media/${oldThumb}`

    return await data ?? {};
  }
}
