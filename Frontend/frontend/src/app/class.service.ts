import { Injectable } from '@angular/core';
import {Class} from "./class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  protected upcomingClassList: Class[] = [
    {
      "id": 1,
      "name": "Yoga as Therapy",
      "description": "Objectively innovate empowered manufactured products",
      "thumbnail": "assets/Image.png",
    },
    {"id": 3,
      "name": "Pilates Training",
      "description": "containing Lorem Ipsum passagesand more recently with",
      "thumbnail": "assets/Pilates Training.png",
    },
    {"id": 4,
      "name": "Aerobic Training",
      "description": "containing Lorem Ipsum passagesand more recently with",
      "thumbnail": "assets/Aerobic.png",
    }
  ];
  constructor() {}
  getAllClasses() : Class[] {
    return this.upcomingClassList;
    }

  getClassById(id: Number): Class | undefined{
    return this.upcomingClassList.find(sClass => sClass.id === id);
  }
}
