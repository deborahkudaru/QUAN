import React, { useState, useEffect } from "react";

import {
  Upload,
  FileImage,
  Trash2,
  Eye,
  X,
  Plus,
  FolderOpen,
  Calendar,
  User,
  Heart,
  GraduationCap,
  Shirt,
  MoreHorizontal,
  AlertTriangle,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function AdminImageUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImageModal, setSelectedImageModal] = useState(null);
  const [filter, setFilter] = useState("all");
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(null);

  // Card styling consistent with your design
  const cardClass =
    "bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300";

  // Load all images on mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("https://quan-backend-d2we.onrender.com/images");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error("Failed to fetch images:", err);
      toast.error("Failed to load images");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }

      // Check file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }

      setImage(file);
      setPreview(URL.createObjectURL(file));
      toast.success("Image selected successfully");
    }
  };

  const handleUpload = async () => {
    if (!image || !category) {
      toast.error("Please select both category and image");
      return;
    }

    setUploading(true);
    const uploadPromise = new Promise(async (resolve, reject) => {
      try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "admin_upload_preset");

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
        const saveRes = await fetch("https://quan-backend-d2we.onrender.com/images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: cloudData.secure_url,
            fileName: image.name,
            category,
          }),
        });

        if (!saveRes.ok) throw new Error("Failed to save to backend");

        setUploadedUrl(cloudData.secure_url);
        setImage(null);
        setPreview(null);
        setCategory("");
        fetchImages();
        resolve("Image uploaded successfully!");
      } catch (err) {
        console.error(err);
        reject("Upload failed. Please try again.");
      } finally {
        setUploading(false);
      }
    });

    toast.promise(uploadPromise, {
      loading: "Uploading image...",
      success: "Image uploaded successfully!",
      error: "Upload failed. Please try again.",
    });
  };

  const handleDeleteConfirm = (id, fileName, url) => {
    setDeleteConfirmModal({ id, fileName, url });
  };

  const handleDelete = async () => {
    if (!deleteConfirmModal) return;

    const { id, fileName } = deleteConfirmModal;

    const deletePromise = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`https://quan-backend-d2we.onrender.com/images/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) throw new Error("Failed to delete image");

        fetchImages();
        resolve(`${fileName} deleted successfully`);
      } catch (err) {
        console.error(err);
        reject("Delete failed. Please try again.");
      }
    });

    toast.promise(deletePromise, {
      loading: "Deleting image...",
      success: (message) => message,
      error: "Delete failed. Please try again.",
    });

    setDeleteConfirmModal(null);
    if (selectedImageModal && selectedImageModal._id === id) {
      setSelectedImageModal(null);
    }
  };

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "beauty-portraits":
      return <User className="w-4 h-4 text-pink-500" />;
      case "weddings-events":
      return <Heart className="w-4 h-4 text-red-500" />;
      case "graduation":
      return <GraduationCap className="w-4 h-4 text-yellow-500" />;
      case "fashion":
      return <Shirt className="w-4 h-4 text-blue-500" />;
      case "corporates":
      return <FolderOpen className="w-4 h-4 text-green-500" />;
      case "videos":
      return <FileImage className="w-4 h-4 text-purple-500" />;
      case "commercials":
      return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      case "birthday":
      return <Calendar className="w-4 h-4 text-purple-500" />;
      default:
      return <MoreHorizontal className="w-4 h-4 text-gray-400" />;
    }
  };

  const getCategoryStats = () => {
    const stats = images.reduce((acc, img) => {
      acc[img.category] = (acc[img.category] || 0) + 1;
      return acc;
    }, {});
    return stats;
  };

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);
  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen p-6 space-y-6 font-playFair bg-gray-50">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="p-6 bg-white border border-gray-100 shadow-md rounded-xl">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Image Management
        </h1>
        <p className="text-gray-600">Upload and manage your image gallery</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Images</p>
              <h3 className="text-xl font-bold text-black">{images.length}</h3>
            </div>
            <FileImage className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <h3 className="text-xl font-bold text-black">
                {Object.keys(categoryStats).length}
              </h3>
            </div>
            <FolderOpen className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Weddings</p>
              <h3 className="text-xl font-bold text-black">
                {categoryStats.wedding || 0}
              </h3>
            </div>
            <Heart className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Birthdays</p>
              <h3 className="text-xl font-bold text-black">
                {categoryStats.birthday || 0}
              </h3>
            </div>
            <Calendar className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className={cardClass}>
        <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-700">
          <Upload className="w-5 h-5" />
          Upload New Image
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Select Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Select Category --</option>
                <option value="fashion">Fashion</option>
                <option value="beauty-portraits">Beauty/Portraits</option>
                <option value="weddings-events">Weddings/Events</option>
                <option value="corporates">Corporates</option>
                <option value="videos">Music Videos/Shorts</option>
                <option value="commercials">Commercials</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Choose Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center px-6 py-3 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-400"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Choose Image File
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Maximum file size: 5MB
              </p>
            </div>

            <button
              onClick={handleUpload}
              disabled={uploading || !image || !category}
              className="flex items-center justify-center w-full gap-2 px-4 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {uploading ? (
                <>
                  <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Upload Image
                </>
              )}
            </button>
          </div>

          {preview && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Preview
              </label>
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="object-cover w-full h-48 border border-gray-200 rounded-lg"
                />
                <button
                  onClick={() => {
                    setPreview(null);
                    setImage(null);
                  }}
                  className="absolute p-1 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category breakdown */}
      <div className="p-4 bg-white shadow-md rounded-xl">
        <h3 className="mb-4 font-semibold text-gray-700 text-md">
          Images by Category
        </h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          {Object.entries(categoryStats).map(([cat, count]) => (
            <div
              key={cat}
              className="flex items-center justify-between p-2 rounded-lg bg-gray-50"
            >
              <div className="flex items-center gap-2">
                {getCategoryIcon(cat)}
                <span className="text-sm capitalize">{cat}</span>
              </div>
              <span className="text-sm font-semibold">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <div className="p-4 bg-white shadow-md rounded-xl">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All ({images.length})
          </button>
          {Object.entries(categoryStats).map(([cat, count]) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {getCategoryIcon(cat)}
              <span className="capitalize">
                {cat} ({count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Images Grid */}
      <div className={cardClass}>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Uploaded Images ({filteredImages.length})
        </h3>

        {filteredImages.length === 0 ? (
          <div className="py-12 text-center">
            <FileImage className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500">No images found.</p>
            <p className="text-sm text-gray-400">
              Upload your first image to get started.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((img) => (
              <div
                key={img._id}
                className="p-3 transition-shadow border border-gray-200 rounded-lg bg-gray-50 hover:shadow-md"
              >
                <div className="relative group">
                  <img
                    src={img.url}
                    alt={img.fileName}
                    className="object-cover w-full h-32 rounded-lg cursor-pointer"
                    onClick={() => setSelectedImageModal(img)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-200 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-50">
                    <div className="flex gap-2 transition-opacity opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => setSelectedImageModal(img)}
                        className="p-2 text-gray-700 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteConfirm(img._id, img.fileName, img.url)
                        }
                        className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(img.category)}
                    <span className="text-xs text-gray-600 capitalize">
                      {img.category}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {img.fileName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-md bg-white shadow-2xl rounded-xl">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete Image
                  </h3>
                  <p className="text-sm text-gray-500">
                    This action cannot be undone
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src={deleteConfirmModal.url}
                  alt={deleteConfirmModal.fileName}
                  className="object-cover w-full h-32 mb-3 border border-gray-200 rounded-lg"
                />
                <p className="text-sm text-gray-700">
                  Are you sure you want to delete{" "}
                  <span className="font-medium">
                    "{deleteConfirmModal.fileName}"
                  </span>
                  ?
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirmModal(null)}
                  className="flex-1 px-4 py-2 text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between flex-shrink-0 p-4 border-b">
              <h3 className="pr-4 text-lg font-semibold truncate">
                {selectedImageModal.fileName}
              </h3>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="flex-shrink-0 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-1 min-h-0">
              {/* Image Section */}
              <div className="flex items-center justify-center flex-1 p-4 bg-gray-50">
                <img
                  src={selectedImageModal.url}
                  alt={selectedImageModal.fileName}
                  className="object-contain max-w-full max-h-full rounded-lg shadow-lg"
                />
              </div>

              {/* Sidebar */}
              <div className="flex flex-col justify-between p-4 bg-white border-l w-80">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      {getCategoryIcon(selectedImageModal.category)}
                      <span className="text-sm text-gray-600 capitalize">
                        {selectedImageModal.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      File Name
                    </label>
                    <p className="mt-1 text-sm text-gray-600 break-all">
                      {selectedImageModal.fileName}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Image URL
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={selectedImageModal.url}
                        readOnly
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-gray-50"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(selectedImageModal.url);
                          toast.success("URL copied to clipboard!");
                        }}
                        className="w-full px-3 py-2 mt-2 text-sm text-blue-600 transition-colors border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100"
                      >
                        Copy URL
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 space-y-2 border-t">
                  <button
                    onClick={() => {
                      handleDeleteConfirm(
                        selectedImageModal._id,
                        selectedImageModal.fileName,
                        selectedImageModal.url
                      );
                    }}
                    className="flex items-center justify-center w-full gap-2 px-4 py-3 text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Image
                  </button>

                  <button
                    onClick={() => setSelectedImageModal(null)}
                    className="w-full px-4 py-2 text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminImageUploader;
