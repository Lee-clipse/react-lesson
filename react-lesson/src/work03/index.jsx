import React, { useEffect, useState } from "react";
import { getNoteList, addSingleNote, deleteSingleNote } from "./Utils/utils";
import CreateNoteModal from "./Components/CreateNoteModal";
import ViewNoteModal from "./Components/ViewNoteModal";

const Work0003 = () => {
  const [noteList, setNoteList] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState("");
  const [viewCreateNoteModal, setViewCreateNoteModal] = useState(false);
  const [viewNoteModal, setViewNoteModal] = useState(false);

  useEffect(() => {
    setNoteList(getNoteList());
  }, [viewCreateNoteModal, viewNoteModal]);

  // 단일 노트 조회
  function handleViewNote(id) {
    setViewNoteModal(true);
    setSelectedNoteId(id);
  }

  // 노트 생성
  function createNote(note) {
    setViewCreateNoteModal(false);
    addSingleNote(note);
  }

  // 노트 삭제
  function deleteNote(note) {
    setViewNoteModal(false);
    deleteSingleNote(note.id);
  }

  // 노트 수정
  function modifyNote(note) {
    setViewNoteModal(false);
    deleteSingleNote(note.id);
    addSingleNote(note);
  }

  return (
    <>
      {/* 노트 조회 모달 */}
      {viewNoteModal && (
        <ViewNoteModal
          noteId={selectedNoteId}
          closeModal={() => setViewNoteModal(false)}
          deleteNote={(note) => deleteNote(note)}
          modifyNote={(note) => modifyNote(note)}
        />
      )}

      {/* 노트 생성 모달 */}
      {viewCreateNoteModal && (
        <CreateNoteModal
          closeModal={() => setViewCreateNoteModal(false)}
          createNote={(note) => createNote(note)}
        />
      )}

      <div>
        <div onClick={() => setViewCreateNoteModal(true)}>노트 생성</div>

        <div>
          {noteList.map((note) => {
            return (
              <div onClick={() => handleViewNote(note.id)}>
                <div>{note.title}</div>
                <div>{note.createdAt}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work0003;
