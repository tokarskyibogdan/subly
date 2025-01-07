import useMediaList from "src/hooks/useMediaList";
import { useEffect } from "react";
import MediaCard from "src/components/MediaCard";
import { Media } from "src/models/media";

import styles from "./MediaList.module.scss";

const MediaList = () => {
  const { loading, fetchMedia, media } = useMediaList();

  useEffect(() => {
    fetchMedia();
    // we are aiming to fetch the media only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!media) {
    return <div>No media found</div>;
  }

  return (
    <div className={styles.mediaList}>
      {media.map((media: Media) => <MediaCard key={media.id} media={media}/>)}
    </div>
  );
}

export default MediaList;