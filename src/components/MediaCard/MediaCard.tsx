import { Media } from "src/models/media";

import styles from "./MediaCard.module.scss";

type MediaCardProps = {
  media: Media;
}

const MediaCard = (props: MediaCardProps) => {
  const { media } = props;
  const { name, cover, languages, id, status, createdAt, updatedAt } = media;

  return (
    <div className={styles.mediaCard}>
      <div className={styles.mediaCardImage} style={{ backgroundImage: `url("${cover}")` }} />
      <div className={styles.mediaCardMeta}>
        <div className={styles.mediaCardName}>{name}</div>
        <div className={styles.mediaCardStatus}>{status}</div>
      </div>
    </div>
  );
}

export default MediaCard;