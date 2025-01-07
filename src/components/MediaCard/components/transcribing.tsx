import { LinearProgress, Box } from "@mui/material";

type Props = {
  image: string;
}

const TranscribingContent = (props: Props) => {
  return (
    <div className="h-full">
      <div>Transcribing subtitles</div>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    </div>
  )
};

export default TranscribingContent;
