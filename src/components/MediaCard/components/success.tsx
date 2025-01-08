import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from "@mui/material";

import styles from './success.module.scss';
import { MediaLanguage } from "src/models/media";
import Flags from "src/components/Flags";

type Props = {
  mediaId: string;
  languages: MediaLanguage[];
  onDelete: (mediaId: string) => void;
}

const SuccessContent = (props: Props) => {
  const { mediaId, onDelete, languages } = props;

  const handleEdit = () => {
    // here we can consume onEdit prop for example
    // and toggle title to be editable
    // or navigate to the edit page
    console.debug("Edit clicked", mediaId);
  }

  return (
    <div className={styles.successContent}>
      <div className={styles.successContentExtra}>
        <div className={styles.successContentDelete}>
          <IconButton color="inherit" size="large" onClick={() => onDelete(mediaId)}>
            <DeleteOutlineIcon color="inherit"/>
          </IconButton>
        </div>
        <Button onClick={handleEdit} className={styles.successContentEdit} variant="outlined">Edit</Button>
      </div>
      <div className={styles.successContentTranslations}>
        <Flags languages={languages} />
      </div>
    </div>
  )
};

export default SuccessContent;
