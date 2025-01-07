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
  }, [status, translation, media.length]);

  const fetchMedia = async () => {
    if (loading || media.length) {
      // persisting the media list and preventing multiple fetches
      return;
    }

    setLoading(true);
    try {
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

      const matchTranslation = translation.some((language) => media.languages.includes(language));
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
