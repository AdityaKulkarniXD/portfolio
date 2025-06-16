"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProfilePictureUploadProps {
  currentImage?: string;
  onImageChange: (imageUrl: string) => void;
  className?: string;
}

export function ProfilePictureUpload({ 
  currentImage, 
  onImageChange, 
  className = "w-32 h-32" 
}: ProfilePictureUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(currentImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewImage(result);
      
      // In a real app, you would upload to a cloud service here
      // For demo purposes, we'll use the base64 data URL
      setTimeout(() => {
        onImageChange(result);
        setIsUploading(false);
        toast.success('Profile picture updated successfully!');
      }, 1000);
    };
    
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('Profile picture removed');
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group">
      <motion.div
        className={`relative ${className} rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        
        {/* Image or placeholder */}
        <div className="absolute inset-2 rounded-full overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-16 h-16 text-blue-500" />
          )}
        </div>

        {/* Upload overlay */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          onClick={triggerFileInput}
        >
          {isUploading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
          ) : (
            <Camera className="w-8 h-8 text-white" />
          )}
        </motion.div>

        {/* Remove button */}
        {previewImage && (
          <motion.button
            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg"
            onClick={handleRemoveImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>

      {/* Upload button */}
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          size="sm"
          onClick={triggerFileInput}
          disabled={isUploading}
          className="rounded-full shadow-lg"
        >
          <Upload className="w-4 h-4 mr-1" />
          {previewImage ? 'Change' : 'Upload'}
        </Button>
      </motion.div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}