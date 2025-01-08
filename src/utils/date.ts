export const getLastUpdatedAt = (date: string) => {
  const lastUpdatedAt = new Date(date);
  const currentDate = new Date();
  const diff = currentDate.getTime() - lastUpdatedAt.getTime();
  const diffInDays = diff / (1000 * 3600 * 24);

  if (diffInDays === 1) {
    return "yesterday";
  } else if (diffInDays > 1 && diffInDays < 7) {
    return `${Math.floor(diffInDays)} days ago`;
  } else if (diffInDays === 7) {
    return "last week";
  } else if (diffInDays > 7 && diffInDays < 30) {
    return `${Math.floor(diffInDays / 7)} weeks ago`;
  } else if (diffInDays > 28 && diffInDays < 32) {
    return "last month";
  } else if (diffInDays > 31 && diffInDays < 365) {
    return `${Math.floor(diffInDays / 30)} months ago`;
  } else if (diffInDays > 364 && diffInDays < 730) {
    return "last year";
  } else {
    return "more than year ago";
  }
};
