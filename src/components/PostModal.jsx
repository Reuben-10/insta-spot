import React, { useRef, useState } from 'react'

const PostModal = (props) => {
  const [preview, setPreview] = useState(null)
  const [title, setTitle] = useState('')
  const fileInputRef = useRef(null)

  // Open file picker
  const handleCustomUploadClick = () => fileInputRef.current.click()

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => setPreview(event.target.result)
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (preview && title.trim()) {
      props.onAddCard({ image: preview, title })
      setPreview(null)
      setTitle('')
      fileInputRef.current.value = ''
      props.closePost()
    }
  }

  return (
    <dialog id="postModal" className="modal" open>
      <button
        id="closeModal"
        className="btn btn-light btn-close delete-icon"
        onClick={props.closePost}
        type="button"
      >✕</button>
      <form noValidate className="modal-form" id="newPostForm" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-label">
            <label>Photo:</label>
            <span className="error hidden" id="post-img-error">Field cannot be empty</span>
          </div>
          <input
            type="file"
            name="file"
            id="postImage"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <div
            id="customUpload"
            className="custom-upload"
            onClick={handleCustomUploadClick}
            style={{ cursor: 'pointer' }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="upload-preview"
                style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }}
              />
            ) : (
              <span id="uploadText">Click to upload image</span>
            )}
          </div>
        </div>
        <div className="form-content">
          <div className="form-label">
            <label htmlFor="post-title">Title:</label>
            <span className="error hidden" id="post-title-error">Field cannot be empty</span>
          </div>
          <input
            type="text"
            name="post-title"
            id="post-title"
            placeholder="Enter photo title"
            required
            minLength="2"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">Post</button>
      </form>
    </dialog>
  )
}

export default PostModal