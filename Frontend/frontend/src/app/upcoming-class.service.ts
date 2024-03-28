import { Injectable } from '@angular/core';
import {UpcomingClass} from "./upcoming-class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  protected upcomingClassList: UpcomingClass[] = [
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
  getAllUpcomingClasses() : UpcomingClass[] {
    return this.upcomingClassList;
  }

  getUpcomingClassById(id: Number): UpcomingClass | undefined{
    return this.upcomingClassList.find(upcomingClass => upcomingClass.id === id);
  }
}
