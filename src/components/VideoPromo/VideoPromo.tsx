import styles from "./VideoPromo.module.scss";

export type VideoPromoProps = {
  youtubeId: string;
  title?: string;
};

export default function VideoPromo({ youtubeId, title = "YouTube video" }: VideoPromoProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?controls=0&rel=0&playsinline=1&fs=0&disablekb=1&iv_load_policy=3&modestbranding=1&showinfo=0`;

  return (
    <div className={styles.videoPromo}>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.video}
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
