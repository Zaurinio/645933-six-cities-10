
export type OwnerInfomration = {
  src: string;
  name: string;
  pro: string;
}

export type CoordinationDetail = {
  lat: number,
  lng: number,
  zoom: number;
}

export type Place = {
  bedrooms: number
  city: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  }
  description: string
  goods: string[]
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images: string[]
  isFavorite: boolean
  isPremium: boolean
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
};

export type Comment = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};

export type PostingComment = {
  comment: string
  rating: number | null
}


export type Places = Place[];
export type Comments = Comment[];
