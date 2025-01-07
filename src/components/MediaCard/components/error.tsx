import { Box, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "./error.module.scss";

type Props = {
  mediaId: string;
  onDelete: (mediaId: string) => void;
}

const ErrorContent = (props: Props) => {
  const { mediaId, onDelete } = props;

  const handleReport = () => {
    // handle trigger report modal
  }

  return (
    <div className={styles.errorContent}>
      <Box display="flex" gap={0.5}>
        <ErrorOutlineIcon color="error" fontSize="small" />
        <span>An error occurred processing your file. Delete file to try again, and report issue if problem persists.</span>
      </Box>
      <div className={styles.errorContentActions}>
        <Button className={styles.errorContentBtn} variant="outlined" size="small" onClick={() => onDelete(mediaId)}>Delete file</Button>
        <Button variant="contained" size="small" onClick={handleReport}>Report issue</Button>
      </div>
    </div>
  )
};

export default ErrorContent;
