"use client";

import { useState, useEffect } from 'react';

export function useProfilePicture() {
  const [profileImage, setProfileImage] = useState<string>('');

  // Load saved profile image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Save profile image to localStorage whenever it changes
  const updateProfileImage = (imageUrl: string) => {
    setProfileImage(imageUrl);
    if (imageUrl) {
      localStorage.setItem('profileImage', imageUrl);
    } else {
      localStorage.removeItem('profileImage');
    }
  };

  return {
    profileImage,
    updateProfileImage,
  };
}