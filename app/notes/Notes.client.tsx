import { fetchNoteById } from "@/lib/api";
import css from './NotesPage.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);
  console.log(note);


  return <div className={css.button}>NoteDetails</div>;
};

export default NoteDetails;