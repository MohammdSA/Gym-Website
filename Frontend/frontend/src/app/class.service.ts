import { Injectable } from '@angular/core';
import {Class} from "./class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  protected ClassList: Class[] = [
    {
      "id": 1,
      "name": "Yoga as Therapy",
      "description": "Objectively innovate empowered manufactured products",
      "thumbnail": "assets/Image.png",
      "duration": 45,
      "intensity": "high",
      "level": "Advanced",
      "schedule": {
        "days": [
          'Monday', ' Wednesday'
        ]
      },
    },
    {"id": 3,
      "name": "Pilates Training",
      "description": "containing Lorem Ipsum passagesand more recently with",
      "thumbnail": "assets/Pilates Training.png",
      "duration": 45,
      "intensity": "high",
      "level": "Advanced",
      "schedule": {
        "days": [
          'Monday', ' Friday'
        ]
      },
    },
    {"id": 4,
      "name": "Aerobic Training",
      "description": "containing Lorem Ipsum passagesand more recently with",
      "thumbnail": "assets/Aerobic.png",
      "duration": 45,
      "intensity": "high",
      "level": "Advanced",
      "schedule": {
        "days": [
          'Monday', ' Wednesday', ' Friday'
        ]
      },
    }
  ];
  constructor() {}
  getAllClasses() : Class[] {
    return this.ClassList;
    }

  getClassById(id: Number): Class | undefined{
    return this.ClassList.find(Class => Class.id === id);
  }
}
