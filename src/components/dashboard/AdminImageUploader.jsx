import React, { useState } from "react";

const AdminImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "admin_upload_preset"); // 👈 use your preset name

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dqflr6fmv/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // STEP 3: Save this URL to your backend (we'll do this in the next step)
      const saveRes = await fetch("http://localhost:5000/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: data.secure_url }),
      });

      if (saveRes.ok) {
        setMessage("Image uploaded and saved successfully!");
      } else {
        setMessage("Upload worked but failed to save in DB.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setUploading(false);
      setImage(null);
      setPreview(null);
    }
  };

  return (
    <div className="max-w-sm p-4 border rounded">
      <h2 className="mb-2 text-lg font-bold">Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="preview" className="w-full h-auto mt-4 rounded" />}
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default AdminImageUploader;
