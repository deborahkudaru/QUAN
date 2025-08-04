import React, { useState, useEffect } from "react";

function AdminImageUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  // Load all images on mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("http://localhost:5000/images");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error("Failed to fetch images:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image || !category) {
      setMessage("❌ Please select a category and an image");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "admin_upload_preset");

    try {
      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/dqflr6fmv/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudData = await cloudRes.json();

      if (!cloudData.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      // Save to backend
      const saveRes = await fetch("http://localhost:5000/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: cloudData.secure_url,
          fileName: image.name,
          category,
        }),
      });

      if (!saveRes.ok) throw new Error("Failed to save to backend");

      setMessage("✅ Image uploaded and saved!");
      setUploadedUrl(cloudData.secure_url);
      setImage(null);
      setPreview(null);
      setCategory("");
      fetchImages(); // refresh list
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload or save failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this image?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/images/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete image");

      setMessage("🗑️ Image deleted successfully");
      fetchImages(); // refresh list
    } catch (err) {
      console.error(err);
      setMessage("❌ Delete failed");
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>

      <label>
        Select Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">-- Select Category --</option>
          <option value="birthday">Birthday</option>
          <option value="wedding">Wedding</option>
          <option value="graduation">Graduation</option>
          <option value="fashion">Fashion</option>
          <option value="others">Others</option>
        </select>
      </label>

      <br />

      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Preview" width={200} />}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {message && <p>{message}</p>}

      {uploadedUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <a href={uploadedUrl} target="_blank" rel="noreferrer">
            {uploadedUrl}
          </a>
          <img src={uploadedUrl} alt="Uploaded" width={200} />
        </div>
      )}

      <hr />

      <h3>Uploaded Images</h3>
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {images.map((img) => (
            <div key={img._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
              <img src={img.url} alt={img.fileName} width={150} />
              <p><strong>Category:</strong> {img.category}</p>
              <p><strong>Name:</strong> {img.fileName}</p>
              <button onClick={() => handleDelete(img._id)}>🗑️ Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminImageUploader;
