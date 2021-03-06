import Link from "next/link";
import { NFTFile } from "../../types";
import VideoPlayer from "../VideoPlayer";
import styles from "./Asset.module.scss";

const Asset: React.FC<{
    description: string;
    imageUrl: string;
    name: string;
    slug: string;
    reserve: string;
    artist?: string;
    onSale?: boolean;
    file?: NFTFile;
}> = ({ imageUrl, name, slug, reserve, artist, onSale, file }) => (
    <Link href={`/asset/${slug}`}>
        <a>
            <div className={styles.asset}>
                <div className={styles.imageContainer}>
                    {file && file.type === "video" && file.link && (
                        <VideoPlayer playbackId={file.link} display />
                    )}
                    {!(file && file.type === "video" && file.link) && (
                        <img src={imageUrl} alt={name} />
                    )}
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h2>{artist}</h2>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.footer}>
                        {onSale && (
                            <div>
                                <button>Bid Now</button>
                            </div>
                        )}

                        {!onSale && (
                            <div className={styles.notAvail}>
                                <h3>Price</h3>
                                <h2>---</h2>
                            </div>
                        )}

                        {reserve && (
                            <div>
                                <h4>Reserve price:</h4> <h3>{reserve}</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </a>
    </Link>
);

export default Asset;
