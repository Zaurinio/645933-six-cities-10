
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


export type Places = Place[];
