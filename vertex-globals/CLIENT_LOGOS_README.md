# Client Logos Setup Guide

## How to Add Real Client Logos

### 1. **Image Requirements**

- **Format**: PNG or SVG (recommended)
- **Dimensions**: 120x60 pixels (2:1 aspect ratio)
- **Background**: Transparent or white
- **File size**: Keep under 50KB for optimal performance

### 2. **File Naming Convention**

Place your client logo images in the `/public/images/` folder with these names:

```
/public/images/
├── client1.png    (Replace with actual client logo)
├── client2.png    (Replace with actual client logo)
├── client3.png    (Replace with actual client logo)
├── client4.png    (Replace with actual client logo)
└── client5.png    (Replace with actual client logo)
```

### 3. **Current Fallback System**

- If images don't exist, the system automatically shows styled placeholders
- Placeholders display "CLIENT 1", "CLIENT 2", etc.
- Placeholders have a gradient background using your brand colors

### 4. **Animation Features**

- ✅ **Smooth horizontal scrolling** from right to left
- ✅ **Seamless infinite loop** (duplicates logos for continuity)
- ✅ **Pause on hover** - animation stops when hovering over logos
- ✅ **Responsive design** - adjusts speed and spacing on mobile
- ✅ **Logo hover effects** - grayscale to color, scale up on hover

### 5. **Customization Options**

#### **Change Animation Speed**

In `/src/scss/homepage.scss`, modify the animation duration:

```scss
.logo-scroll-track {
  animation: scroll-logos 30s linear infinite; // Change 30s to desired speed
}
```

#### **Adjust Logo Spacing**

```scss
.logo-scroll-track {
  gap: 60px; // Increase/decrease gap between logos
}
```

#### **Modify Logo Sizes**

```scss
.logo-item img {
  width: 120px; // Adjust logo width
  height: 60px; // Adjust logo height
}
```

### 6. **Best Practices**

- Use **SVG logos** when possible for crisp scaling
- Ensure **consistent dimensions** across all logos
- Test on **mobile devices** to ensure readability
- Keep **file sizes small** for fast loading

### 7. **Troubleshooting**

- **Logos not showing**: Check file paths and naming
- **Animation not working**: Ensure CSS is compiled properly
- **Placeholders showing**: Verify image files exist in correct location

---

**Note**: The current system supports up to 5 client logos. If you need more, update the `clientLogos` array in `/src/app/components/home/Clients.tsx`.
