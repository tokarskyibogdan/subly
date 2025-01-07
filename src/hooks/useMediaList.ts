import { useEffect, useState } from "react";
import { Media, MediaLanguage, MediaStatus } from "src/models/media";

const useMediaList = () => {
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState<Media[]>([]);
  const [translation, setTranslation] = useState<MediaLanguage[]>([]);
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<MediaStatus[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<Media[]>([]);

  useEffect(() => {
    handleFilterUpdate();
  }, [search, status, translation]);

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
    } catch (error) {
      setMedia([]);
      console.error(error);
    }
    setLoading(false);
  }

  const handleFilterUpdate = () => {
    const loverCaseSearch = search.toLowerCase();
    const filteredMedia = media.filter((media) => {
      const matchName = media.name.toLowerCase().includes(loverCaseSearch);
      if (search && !matchName) {
        return false;
      }

      const matchStatus = status.includes(media.status);
      if (status.length && !matchStatus) {
        return false;
      }

      const matchTranslation = translation.some((language) => media.languages.includes(language));
      if (translation.length && !matchTranslation) {
        return false;
      }

      return true;
    });
    setFilteredMedia(filteredMedia);
  }

  return {
    fetchMedia,
    loading,
    media,
    translation,
    search,
    setSearch,
    status,
    setStatus,
    setTranslation,
    filteredMedia,
  }
}

export default useMediaList;
