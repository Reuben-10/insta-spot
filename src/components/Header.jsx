import React, { useState } from 'react'
import ProfileModal from './ProfileModal'
import PostModal from './PostModal'

const Header = (props) => {
    // State for user profile information
    const [profile, setProfile] = useState({
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nam repellat sint laborum ratione, porro molestias minima ad tempora! Dolorem inventore ipsum corrupti alias sapiente at, atque quidem nemo fuga.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maiores rem velit minus accusantium voluptas officiis totam praesentium eaque ipsum! Sed is tempore doloribus ipsa quasi reiciendis labore, neque dicta!",
        profileImage: "src/assets/images/avatar.png"
    })

    const [profileModal, setProfileModal] = useState(false)
    const [postModal, setPostModal] = useState(false)

    // Handler to update profile state when profile is saved from modal
    const handleProfileSave = (updatedProfile) => setProfile(updatedProfile)

    
    const openProfileModal = () => setProfileModal(true)
    const closeProfileModal = () => setProfileModal(false)
    const openPostModal = () => setPostModal(true)
    const closePostModal = () => setPostModal(false)

    return (
        <>
            <div className="banner" aria-label="User profile banner">
                <div className="avatar-section" role="group" aria-label="User information">
                    {/* User avatar image */}
                    <img
                        className="avatar-img"
                        id="profileImage"
                        src={profile.profileImage || "src/assets/images/avatar.png"}
                        alt={`Profile image of ${profile.name || "User"}`}
                        loading="lazy"
                    />
                    <div className="properties">
                        <div className="details">
                            {/* User name */}
                            <h3 className="name" id="profileName">{profile.name}</h3>
                            {/* User description */}
                            <p className="description" id="profileTitle">{profile.description}</p>
                        </div>
                        {/* Button to open profile edit modal */}
                        <button
                            className="btn btn-light"
                            id="editBtn"
                            type="button"
                            aria-label="Edit profile"
                            onClick={openProfileModal}
                        >
                            <img src="src/assets/icons/edit.svg" alt="edit icon" />
                            Edit Profile
                        </button>
                    </div>
                </div>
                {/* Button to open new post modal */}
                <button
                    type="button"
                    className="btn btn-dark"
                    id="post-btn"
                    aria-label="Create new post"
                    onClick={openPostModal}
                >
                    <img src="src/assets/icons/plus.svg" alt="+" />
                    New Post
                </button>
            </div>

            {/* Render ProfileModal if profileModal state is true */}
            {profileModal && (
                <ProfileModal
                    name=""
                    description=""
                    profileImage={null}
                    onSave={handleProfileSave}
                    closeModal={closeProfileModal}
                />
            )}

            {/* Render PostModal if postModal state is true */}
            {postModal && (
                <PostModal
                    closePost={closePostModal}
                    onAddCard={props.onAddCard}
                />
            )}
        </>
    )
}

export default Header