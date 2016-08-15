export const fetchNotes = () => {
  let notes = [
    { id: 1, title: 'Grab some food', desc: 'Just call go-food' },
    { id: 2, title: 'Zzz', desc: 'Sleep' },
    { id: 3, title: 'Meh', desc: 'Dunno wut to do' },
  ]

  return new Promise((res, rej) => {
    setTimeout(() => res(notes), 5000)
  })
}
