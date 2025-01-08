import { Media, MediaStatus } from "src/models/media";
import { getLastUpdatedAt } from "src/utils/date";

import TranscribingContent from "./components/transcribing";
import ErrorContent from "./components/error";
import SuccessContent from "./components/success";

import styles from "./MediaCard.module.scss";

type MediaCardProps = {
  media: Media;
  onDelete: (mediaId: string) => void;
};

const MediaCard = (props: MediaCardProps) => {
  const { media, onDelete } = props;
  const { name, cover, languages, id, status, updatedAt } = media;
  const inlineStyles = status === MediaStatus.Error ? {} : { backgroundImage: `url("${cover}")` };

  const renderStatus = () => {
    switch (status) {
      case MediaStatus.Error:
        return "Error in processing";
      case MediaStatus.Transcribing:
        return "Transcribing";
      default:
        return `Edited ${getLastUpdatedAt(updatedAt)}`;
    }
  };

  const renderContent = () => {
    switch (status) {
      case MediaStatus.Error:
        return <ErrorContent onDelete={onDelete} mediaId={id} />;
      case MediaStatus.Transcribing:
        return <TranscribingContent />;
      default:
        return <SuccessContent languages={languages} onDelete={onDelete} mediaId={id} />;
    }
  };

  return (
    <div className={styles.mediaCard} key={id}>
      <div className={styles.mediaCardImage} style={inlineStyles}>
        {renderContent()}
      </div>
      <div className={styles.mediaCardMeta}>
        <div className={styles.mediaCardName}>{name}</div>
        <div className={styles.mediaCardStatus}>{renderStatus()}</div>
      </div>
    </div>
  );
};

export default MediaCard;
