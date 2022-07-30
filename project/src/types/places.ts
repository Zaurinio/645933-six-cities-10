
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
  id: number;
  src: string;
  title: string;
  description: string;
  isPremium: boolean;
  housingType: string;
  raiting: number;
  bedrooms: string;
  guests: string;
  price: number;
  facilities: string[];
  coordinations: CoordinationDetail;
  ownerInformation: OwnerInfomration;
};
