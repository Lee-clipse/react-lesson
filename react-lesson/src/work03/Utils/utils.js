export function getNoteList() {
  const noteList = localStorage.getItem("noteList");
  if (noteList === null) {
    localStorage.setItem("noteList", "[]");
    return;
  }
  return JSON.parse(localStorage.getItem("noteList"));
}

export function addSingleNote(note) {
  const noteList = getNoteList();
  const newNoteList = [...noteList, note];
  localStorage.setItem("noteList", JSON.stringify(newNoteList));
}

export function deleteSingleNote(id) {
  const noteList = getNoteList();
  const newNoteList = noteList.filter((note) => note.id !== id);
  localStorage.setItem("noteList", JSON.stringify(newNoteList));
}
