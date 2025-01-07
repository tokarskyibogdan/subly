import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "./error.module.scss";

type Props = {
  mediaId: string;
  onDelete: (mediaId: string) => void;
}

const ErrorContent = (props: Props) => {
  const { mediaId, onDelete } = props;

  const handleReport = () => {
    console.debug("Report issue", mediaId);
  }

  return (
    <div className={styles.errorContent}>
      <Box display="flex" gap={1}>
        <ErrorOutlineIcon color="error" fontSize="small" />
        <Typography fontSize={14}>An error occurred processing your file. Delete file to try again, and report issue if problem persists.</Typography>
      </Box>
      <Box display="flex" gap={0.5} justifyContent="flex-end" width="100%">
        <Button className={styles.errorContentBtn} variant="outlined" size="small" onClick={() => onDelete(mediaId)}>Delete file</Button>
        <Button variant="contained" size="small" onClick={handleReport}>Report issue</Button>
      </Box>
    </div>
  )
};

export default ErrorContent;
