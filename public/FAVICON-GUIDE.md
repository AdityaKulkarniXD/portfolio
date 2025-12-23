# How to Change Your Favicon

## Quick Method

Simply replace the `favicon.svg` file in this `public` directory with your own icon.

## Detailed Steps

### Option 1: Using an SVG Icon (Recommended)

1. Create or obtain your icon as an SVG file
2. Replace `/public/favicon.svg` with your SVG
3. The site will automatically use your new icon

### Option 2: Using ICO or PNG

1. Create a 32x32 or 64x64 pixel icon in .ico or .png format
2. Name it `favicon.ico`
3. Place it in the `/public` directory
4. The configuration in `app/layout.tsx` will automatically use it

### Option 3: Adding Multiple Sizes

For best compatibility across devices, provide multiple sizes:

1. Place these files in `/public`:
   - `favicon.ico` (32x32)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180 for iOS)

2. Update `app/layout.tsx` metadata:

```typescript
icons: {
  icon: [
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon.ico' },
  ],
  apple: '/apple-touch-icon.png',
},
```

## Tools to Create Favicons

- **Figma/Adobe Illustrator**: Design custom icons
- **Favicon.io**: Generate favicons from text, images, or emojis
- **RealFaviconGenerator**: Create favicons for all platforms
- **Canva**: Simple online icon creation

## Current Setup

The current favicon is a simple blue square with white "AK" text (your initials). This is a placeholder that you should replace with your personal brand icon.
