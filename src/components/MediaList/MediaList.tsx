import useMediaList from "src/hooks/useMediaList";
import { useEffect } from "react";
import MediaCard from "src/components/MediaCard";
import { Media, MediaLanguage, MediaStatus } from "src/models/media";
import { Autocomplete, Box, Pagination, TextField } from "@mui/material";

import styles from "./MediaList.module.scss";
import usePaginated from "src/hooks/usePaginated";

const pageSize = 10;

const MediaList = () => {
  const { loading, fetchMedia, media, status, setStatus, page, setPage, filteredMedia, setTranslation, translation, deleteMedia } =
    useMediaList();
  const { pageNumbers, itemsToDisplay } = usePaginated(filteredMedia, pageSize, page);

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
          renderInput={params => <TextField {...params} label="Translation" placeholder="Translation" />}
        />
        <Autocomplete
          multiple
          className={styles.mediaListFilter}
          options={Object.values(MediaStatus)}
          onChange={(_event, value) => setStatus(value)}
          value={status}
          renderInput={params => <TextField {...params} label="Status" placeholder="Status" />}
        />
      </div>
      <div className={styles.mediaList}>
        {itemsToDisplay.map((media: Media) => (
          <MediaCard onDelete={deleteMedia} key={media.id} media={media} />
        ))}
      </div>
      {!!filteredMedia.length && pageNumbers > 1 && (
        <Box py={2}>
          <Pagination onChange={(_e, page) => setPage(page)} page={page} count={pageNumbers} color="primary" />
        </Box>
      )}
    </div>
  );
};

export default MediaList;
