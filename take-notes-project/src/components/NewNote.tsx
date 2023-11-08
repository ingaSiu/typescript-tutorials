import { NoteData, Tag } from '../App';

import NoteForm from './NoteForm';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm onSubmit={onSubmit} availableTags={availableTags} onAddTag={onAddTag} />
    </>
  );
};

export default NewNote;
