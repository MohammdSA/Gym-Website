export interface Class {
  id: number,
  name: string,
  description: string,
  thumbnail: string,
  duration: number,
  intensity: string,
  level: string,
  schedule: {
    "days": string[]
  },
}
