export enum MediaLanguage {
  EN = "en",
  DE = "de",
  FR = "fr",
  ES = "es"
}

export enum MediaStatus {
  Transcribing = "transcribing",
  Ready = "ready",
  Error = "error"
}

export interface Media {
  "name": string,
  "cover": string,
  "languages": MediaLanguage[],
  "id": string,
  "status": MediaStatus,
  "createdAt": string,
  "updatedAt": string
}