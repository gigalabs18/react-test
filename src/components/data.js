export default {
 users: [
  { name: 'Flora', lastName: 'Glen', city: 'Paris', zip: '11111' },
  { name: 'Annabel', lastName: 'Medrona', city: 'Lyon', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'Nice', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'Rome', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'Milan', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'Venice', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'New York', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'Miami', zip: '11111' },
  { name: 'Flora', lastName: 'Glen', city: 'LosAngeles', zip: '11111' },
 ],
 continents: [
  {
    name: 'Europe',
    children: [
      {
        name: 'Italy',
        children: [
          { name: 'Rome' },
          { name: 'Milan' },
          { name: 'Venice' },
        ]
      },
      {
        name: 'France',
        children: [
          { name: 'Paris' },
          { name: 'Lyon' },
          { name: 'Nice' },
        ]
      }
    ]
  },
  {
    name: 'North America',
    children: [
      {
        name: 'USA',
        children: [
          { name: 'New York' },
          { name: 'Miami' },
          { name: 'LosAngeles' },
        ]
      }
    ]
  }
 ] 
}