import { Place } from '../types/places';


export const places: Place[] = [
  {
    id: 1,
    src: 'https://picsum.photos/260/200?random=1',
    title: 'Номер первой категории. Стандартный номер с двуспальной кроватью (queen size)',
    description: 'Большой номер с лаконичным и стильным дизайном,  позволяющий комфортно разместиться двоим гостям.',
    isPremium: true,
    housingType: 'Apartment',
    raiting: 4,
    bedrooms: '3 Bedrooms',
    guests: 'Max 4 adults',
    price: 120,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Coffee machine'],
    coordinations:
    {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 3
    }
    ,
    ownerInformation: {
      src: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: 'Pro',
    }
  }, {
    id: 2,
    src: 'https://picsum.photos/260/200?random=2',
    title: 'Номер высшей категории "джуниор сюит". «Семейный» с большой кроватью (King size)',
    description: 'Большая кровать и дополнительный диван позволят с комфортом разместиться семье из четырех или пяти человек. В каждом номере данной категории установлена ванная.',
    isPremium: true,
    housingType: 'Apartment',
    raiting: 5,
    bedrooms: '3 Bedrooms',
    guests: 'Max 6 adults',
    price: 330,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Coffee machine', 'Baby seat', 'Kitchen'],
    coordinations:
    {
      lat: 52.369553943508,
      lng: 4.85309666406198,
      zoom: 3
    }
    ,
    ownerInformation: {
      src: 'img/avatar-vasiliy.jpg',
      name: 'Vasiliy',
      pro: 'Pro',
    }
  }, {
    id: 3,
    src: 'https://picsum.photos/260/200?random=3',
    title: 'Номер высшей категории "Люкс" с большой кроватью (King size)',
    description: 'Теплая цветовая гамма, уникальная комплектация, дизайнерская мебель создают особенную атмосферу в номерах. Стильная и просторная гостиная с мягким диваном, рабочей зоной, кофемашиной и мини-холодильником.',
    isPremium: true,
    housingType: 'Apartment',
    raiting: 4.5,
    bedrooms: '4 Bedrooms',
    guests: 'Max 5 adults',
    price: 990,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Coffee machine', 'Baby seat', 'Kitchen'],
    coordinations:
    {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 3
    }
    ,
    ownerInformation: {
      src: 'img/avatar-peter.jpg',
      name: 'Peter',
      pro: 'Pro',
    }
  }, {
    id: 4,
    src: 'https://picsum.photos/260/200?random=4',
    title: 'Представительский люкс',
    description: 'Роскошный и действительно просторный номер с уникальными дизайном для особенно требовательных гостей.',
    isPremium: true,
    housingType: 'Apartment',
    raiting: 5,
    bedrooms: '4 Bedrooms',
    guests: 'Max 5 adults',
    price: 1100,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Coffee machine', 'Baby seat', 'Kitchen'],
    coordinations:
    {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 3
    }
    ,
    ownerInformation: {
      src: 'img/avatar-andrew.jpg',
      name: 'Andrew',
      pro: 'Pro',
    }
  },
];
