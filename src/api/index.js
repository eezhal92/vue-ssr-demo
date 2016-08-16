import Chance from 'chance'

const chance = new Chance()

export const fetchNotes = () => {
  let notes = [
    { id: chance.hash({length: 12}), title: 'Grab some food', desc: 'Just call go-food', color: '#fff', done: false },
    { id: chance.hash({length: 12}), title: 'Zzz', desc: 'Sleep', color: '#fff', done: false },
    { id: chance.hash({length: 12}), title: 'Meh', desc: 'Dunno wut to do', color: '#77DD77', done: true },
  ]

  return Promise.resolve(notes)
}
