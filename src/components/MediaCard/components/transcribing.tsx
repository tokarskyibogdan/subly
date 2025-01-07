import { LinearProgress, Box, Typography } from "@mui/material";

const TranscribingContent = () => (
  <Box
    bgcolor="rgba(255,255,255,.6)"
    height={200}
    flex={1}
    px={2}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    gap={3}
  >
    <Typography variant="caption" fontSize={16}>Transcribing subtitles</Typography>
    <Box sx={{ width: '100%' }}>
      <LinearProgress/>
    </Box>
  </Box>
);

export default TranscribingContent;
