import Image from "next/image"
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import "./style.scss"

function Item(props) {
    return (
        <div className="nft-item-wrapper">
            <div className="nft-image-wrapper">
                <Image
                    src={props.image}
                    alt="NFT thumbnail"
                    width={400}
                    height={400}
                    loading="lazy"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className="nft-actions">
                <Link href={`/nft/${props.id}`} className="view-nft-btn">
                    <FiEye />
                </Link>
                <span className="edit-nft-btn" onClick={props.updateNFT}>
                    <FiEdit />
                </span>
                <span className="delete-nft-btn" onClick={props.deleteNFT}>
                    <FiTrash2 />
                </span>
            </div>
            <div className="nft-inner-info">
                <h2>{props.name}</h2>
                <div className="details">
                    <div className="author">
                        <p className="name">🤖 {props.authorName}</p>
                    </div>
                    <div className="price">
                        <small className="text-muted">Current Bid</small>
                        <p className="current-bid">
                            ⭐{props.price} UZS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item