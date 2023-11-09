import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Tag } from '../../App';
import styles from './NoteCard.module.css';

export type SimplifiedNote = {
  id: string;
  title: string;
  tags: Tag[];
};

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
  return (
    <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card}`}>
      <Card.Body></Card.Body>
    </Card>
  );
};

export default NoteCard;
