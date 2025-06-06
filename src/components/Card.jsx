import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Card = (props) => {
    // State to track if the card is liked
    const [isLiked, setIsLiked] = useState(false);
    // State to track if the preview modal is open
    const [isPreviewable, setIsPreviewable] = useState(false);

    const handlePreview = () => setIsPreviewable(true);
    const handleClosePreview = () => setIsPreviewable(false);

    // Toggle the liked state, prevent event bubbling to avoid opening preview
    const handleLike = (e) => {
        e.stopPropagation();
        setIsLiked((prev) => !prev);
    };

    return (
        <>
            {/* Card container, clickable and keyboard accessible */}
            <article
                className="card"
                onClick={handlePreview}
                onKeyDown={(e) => e.key === "Enter" && handlePreview()}
                tabIndex="0"
                role="button"
                aria-label="Card with image and title"
            >
                {/* Image section */}
                <div className="card-img-container">
                    <img
                        className="card-img"
                        src={props.img}
                        alt={props.alt || props.title || "Card image"}
                        loading="lazy"
                    />
                </div>
                {/* Description and like button */}
                <div className="card-description">
                    <p className="card-title">{props.title}</p>
                    {/* Like button, toggles liked state */}
                    <div className="like" onClick={handleLike}>
                        {isLiked ? (
                            // Filled like icon when liked
                            <Icon
                                icon="weui:like-filled"
                                width="32"
                                height="32"
                                style={{ color: "red", marginTop: "-4px" }}
                            />
                        ) : (
                            // Outlined like icon when not liked
                            <Icon
                                icon="weui:like-outlined"
                                width="32"
                                height="32"
                                className="like-icon -z-10"
                            />
                        )}
                        {/* style={{ color: "gray" }} */}
                    </div>
                </div>
            </article>

            {/* Preview modal, shown when isPreviewable is true */}
            {isPreviewable && (<div className='inset-0 bg-black/60 backdrop-blur-[2px] fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
                <dialog
                    className="previewable-modal modal"
                    aria-label="previewable-modal"
                    onClick={handleClosePreview}
                    open
                >
                    {/* Close button for modal */}
                    <button
                        className="delete-icon"
                        type="button"
                        aria-label="Close preview"
                        onClick={handleClosePreview}
                    >
                        ✕
                    </button>
                    {/* Modal content, stops click propagation to avoid closing modal */}
                    <div className="previewable-images" onClick={e => e.stopPropagation()}>
                        <div className="card-img-container">
                            <img
                                src={props.img}
                                alt={props.alt || "Preview image"}
                                className="card-img preview-img"
                            />
                        </div>
                        <p className="previewable-title">{props.title}</p>
                    </div>
                </dialog>
            </div>
            )}
        </>
    );
};

export default Card;