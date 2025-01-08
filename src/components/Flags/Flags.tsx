import classNames from "classnames";
import { MediaLanguage } from "src/models/media";

import styles from "./Flags.module.scss";

type Props = {
  languages: MediaLanguage[];
};

const Flags = (props: Props) => {
  const { languages } = props;

  return (
    <div className={styles.flags}>
      {languages.map(language => (
        <div
          key={language}
          data-testid={language}
          className={classNames(styles.flagsFlag, {
            [styles.flagsFlagEn]: language === MediaLanguage.EN,
            [styles.flagsFlagFr]: language === MediaLanguage.FR,
            [styles.flagsFlagDe]: language === MediaLanguage.DE,
            [styles.flagsFlagEs]: language === MediaLanguage.ES,
          })}
        />
      ))}
    </div>
  );
};

export default Flags;
