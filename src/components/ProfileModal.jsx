import React, { useState } from 'react'

const ProfileModal = (props) => {
  // Combine all fields into one state object
  const [form, setForm] = useState({
    name: props.name || '',
    description: props.description || '',
    profileImage: props.profileImage || null
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // Handle image file change and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) =>
        setForm(prev => ({ ...prev, profileImage: event.target.result }))
      reader.readAsDataURL(file)
    }
  }

  // Handle save: call a prop function to update parent/profile
  const handleSave = (e) => {
    e.preventDefault()
    props.onSave(form)
    props.closeModal()
  }

  return (
    <dialog className="modal" id="editModal" aria-label="modal-section" open>
      <button className="btn btn-close btn-light delete-icon" id="cancelBtn" type="button" onClick={props.closeModal}>✕</button>
      <form noValidate className="modal-form" id="editForm" onSubmit={handleSave}>
        {/* The profile name */}
        <div className="name-edit form-content">
          <div className="form-label">
            <label htmlFor="editName">Name:</label>
            <span className="error hidden" id="name-error">Field cannot be empty</span>
          </div>
          <input
            type="text"
            name="name"
            id="editName"
            placeholder="Enter your name"
            required
            minLength="2"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* The description */}
        <div className="form-content description-edit">
          <div className="form-label">
            <label htmlFor="editDesc">Description:</label>
            <span className="error hidden" id="description-error">Field cannot be empty</span>
          </div>
          <input
            type="text"
            name="description"
            id="editDesc"
            placeholder="Enter your description"
            required
            minLength="2"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        {/* For image upload */}
        <div className="form-content avatar-upload">
          <label>Profile Image:</label>
          <input type="file" name="file" id="editImage" onChange={handleImageChange} />
          {form.profileImage && (
            <img
              src={form.profileImage}
              alt="Profile Preview"
              style={{ width: 80, height: 80, borderRadius: '50%', marginTop: 8 }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-dark" id="saveBtn">Save</button>
      </form>
    </dialog>
  )
}

export default ProfileModal



// --------------------------------------------------------------------------------


// import React, { useState } from 'react'

// const ProfileModal = (props) => {
//   // Initialize state from props or use default values
//   const [name, setName] = useState(props.name || '')
//   const [description, setDescription] = useState(props.description || '')
//   const [profileImage, setProfileImage] = useState(props.profileImage || null)

//   // Handle image file change and preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => setProfileImage(event.target.result)
//       reader.readAsDataURL(file)
//     }
//   }

//   // Handle save: call a prop function to update parent/profile
//   const handleSave = (e) => {
//     e.preventDefault()
//     props.onSave({
//       name,
//       description,
//       profileImage // send the data URL or file as needed
//     })
//     props.closeModal()
//   }

//   return (
//     <dialog className="modal" id="editModal" aria-label="modal-section" open>
//       <button className="btn btn-close btn-light" id="cancelBtn" type="button" onClick={props.closeModal}>X</button>
//       <form noValidate className="modal-form" id="editForm" onSubmit={handleSave}>
//         {/* The profile name */}
//         <div className="name-edit form-content">
//           <div className="form-label">
//             <label htmlFor="editName">Name:</label>
//             <span className="error hidden" id="name-error">Field cannot be empty</span>
//           </div>
//           <input
//             type="text"
//             name="profile-name"
//             id="editName"
//             placeholder="Enter your name"
//             required
//             minLength="2"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>

//         {/* The description */}
//         <div className="form-content description-edit">
//           <div className="form-label">
//             <label htmlFor="editDesc">Description:</label>
//             <span className="error hidden" id="description-error">Field cannot be empty</span>
//           </div>
//           <input
//             type="text"
//             name="text"
//             id="editDesc"
//             placeholder="Enter your description"
//             required
//             minLength="2"
//             value={description}
//             onChange={e => setDescription(e.target.value)}
//           />
//         </div>

//         {/* For image upload */}
//         <div className="form-content avatar-upload">
//           <label>Profile Image:</label>
//           <input type="file" name="file" id="editImage" onChange={handleImageChange} className='' />
//           {profileImage && (
//             <img
//               src={profileImage}
//               alt="Profile Preview"
//               style={{ width: 80, height: 80, borderRadius: '50%', marginTop: 8 }}
//             />
//           )}
//         </div>
//         <button type="submit" className="btn btn-dark" id="saveBtn">Save</button>
//       </form>
//     </dialog>
//   )
// }

// export default ProfileModal