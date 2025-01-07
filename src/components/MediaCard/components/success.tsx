import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from "@mui/material";

import styles from './success.module.scss';

type Props = {
  mediaId: string;
  onDelete: (mediaId: string) => void;
}

const SuccessContent = (props: Props) => {
  const { mediaId, onDelete } = props;

  const handleEdit = () => {
    // here we can consume onEdit prop for example
    // and toggle title to be editable
    // or navigate to the edit page
    console.debug("Edit clicked", mediaId);
  }

  return (
    <div className={styles.successContent}>
      <div className={styles.successContentExtra}>
        <IconButton className={styles.successContentDelete} size="large" onClick={() => onDelete(mediaId)}>
          <DeleteOutlineIcon />
        </IconButton>
        <Button onClick={handleEdit} className={styles.successContentEdit} variant="outlined">Edit</Button>
      </div>
    </div>
  )
};

export default SuccessContent;
