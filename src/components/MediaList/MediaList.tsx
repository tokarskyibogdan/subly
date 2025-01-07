import useMediaList from "src/hooks/useMediaList";
import { useEffect } from "react";
import MediaCard from "src/components/MediaCard";
import { Media, MediaLanguage, MediaStatus } from "src/models/media";
import { Autocomplete, TextField } from "@mui/material";

import styles from "./MediaList.module.scss";

const MediaList = () => {
  const {
    loading, fetchMedia, media, status, setStatus,
    filteredMedia, setTranslation, translation, deleteMedia
  } = useMediaList();

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
    <div>
      <div className={styles.mediaListFilters}>
        <Autocomplete
          multiple
          className={styles.mediaListFilter}
          options={Object.values(MediaLanguage)}
          onChange={(_event, value) => setTranslation(value)}
          value={translation}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Translation"
              placeholder="Translation"
            />
          )}
        />
        <Autocomplete
          multiple
          className={styles.mediaListFilter}
          options={Object.values(MediaStatus)}
          onChange={(_event, value) => setStatus(value)}
          value={status}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Status"
              placeholder="Status"
            />
          )}
        />
      </div>
      <div className={styles.mediaList}>
        {filteredMedia.map((media: Media) => <MediaCard onDelete={deleteMedia} key={media.id} media={media}/>)}
      </div>
    </div>
  );
}

export default MediaList;