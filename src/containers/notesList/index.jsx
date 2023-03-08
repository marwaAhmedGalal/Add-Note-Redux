import './style.css'

const dummyData = [
  {
    name: "first note",
    id: 1,
  },
  {
    name: "second note",
    id: 2,
  },
  {
    name: "third note",
    id: 3,
  },
];

const NotesList = () => {
  return (
    <div className="notes-list-wrapper">
      <h1>Notes List</h1>
      <ul>
        {dummyData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default NotesList;