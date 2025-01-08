import { useEffect, useState } from "react";
import { Media, MediaLanguage, MediaStatus } from "src/models/media";

const useMediaList = () => {
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState<Media[]>([]);
  const [translation, setTranslation] = useState<MediaLanguage[]>([]);
  const [status, setStatus] = useState<MediaStatus[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<Media[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleFilterUpdate();
    setPage(1);
    // we want to rely on the filters change to update the list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, translation, media.length]);

  const fetchMedia = async () => {
    if (loading || media.length) {
      // persisting the media list and preventing multiple fetches
      return;
    }

    setLoading(true);
    try {
      // used simple fetch, in larger projects consider using axios or similar
      // and create an expandable service for the API calls
      const fetchResponse = await fetch("https://raw.githubusercontent.com/getsubly/test-data/refs/heads/master/cards.json");
      const mediaResponse: Media[] = await fetchResponse.json();
      setMedia(mediaResponse);
      setFilteredMedia(mediaResponse);
    } catch (error) {
      setMedia([]);
      console.error(error);
    }
    setLoading(false);
  }

  const handleFilterUpdate = () => {
    const filteredMedia = media.filter((media) => {
      const matchStatus = status.includes(media.status);
      if (status.length && !matchStatus) {
        return false;
      }

      // we also expect the media to be ready to be displayed if a translation is selected
      const matchTranslation = translation.some((language) => media.languages.includes(language)) && media.status === MediaStatus.Ready;
      return translation.length ? matchTranslation : true;
    });
    setFilteredMedia(filteredMedia);
  }

  const deleteMedia = (mediaId: string) => {
    setMedia((prevMedia) => prevMedia.filter((media) => media.id !== mediaId));
  };

  return {
    deleteMedia,
    fetchMedia,
    loading,
    media,
    translation,
    status,
    setStatus,
    setTranslation,
    filteredMedia,
    page,
    setPage,
  }
}

export default useMediaList;
