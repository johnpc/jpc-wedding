# John & Emily's Wedding Website

A beautiful, responsive wedding website built with Next.js for John and Emily's wedding celebration on July 11, 2026 at Circ in Ann Arbor, Michigan.

## Features

This wedding website includes all the essential features couples need:

- **Hero Section** - Beautiful landing with couple names and wedding date
- **Our Story** - How we met and proposal story with placeholder images
- **Wedding Details** - Date, time, venue, parking, and dress code information
- **Schedule** - Complete timeline of the wedding day events
- **Photo Gallery** - Collection of couple photos (currently using placeholder images)
- **RSVP Form** - Guest response form with dietary restrictions and special messages
- **Song Request Form** - Allow guests to request their favorite songs for the reception
- **Wedding Registry** - Links to gift registries and honeymoon fund
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling Navigation** - Easy navigation between sections
- **Elegant Styling** - Warm earth tone color scheme with beautiful typography
- **PWA Support** - Progressive Web App features for mobile installation and offline access
- **Custom Icon** - Beautiful wedding-themed icon generated with AI

## Wedding Details

- **Date**: Saturday, July 11, 2026
- **Venue**: Circ, 210 S 1st St, Ann Arbor, MI 48104
- **Ceremony**: 4:00 PM
- **Reception**: 6:00 PM
- **Parking**: Free parking available in the lot across the street

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Custom CSS (no external CSS frameworks)
- **Fonts**: Playfair Display (headings) and Inter (body text) from Google Fonts
- **Images**: Placeholder images from Unsplash (ready to be replaced with real photos)
- **TypeScript**: Full TypeScript support for type safety
- **PWA**: Progressive Web App with service worker for offline functionality
- **Icons**: Custom AI-generated wedding icon in multiple sizes for all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jpc-wedding
```

2. Install dependencies:

```bash
npm install
```

### Development

**Important Note**: Never run `npm run dev` in the foreground as it blocks execution. Always run it in the background with logs piped to a file.

To start the development server in the background:

```bash
# Run development server in background with logs
npm run dev > dev.log 2>&1 &

# To view logs in real-time
tail -f dev.log

# To stop the background process
pkill -f "npm run dev"
# or find the process ID and kill it
ps aux | grep "npm run dev"
kill <process-id>
```

Alternative development commands:

```bash
# Using yarn
yarn dev > dev.log 2>&1 &

# Using pnpm
pnpm dev > dev.log 2>&1 &

# Using bun
bun dev > dev.log 2>&1 &
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main wedding website page
│   ├── globals.css         # Global styles and CSS variables
│   ├── sw-register.js      # Service worker registration
│   └── favicon.ico         # Website favicon
public/
├── icons/                  # Various icon sizes for different devices
│   ├── icon-16.png
│   ├── icon-32.png
│   └── ...
├── manifest.json           # PWA manifest file
├── sw.js                   # Service worker for offline functionality
├── browserconfig.xml       # Configuration for Microsoft tiles
├── robots.txt              # SEO configuration
└── favicon.ico             # Favicon for browsers
```

### PWA Features

The website includes Progressive Web App (PWA) functionality:

1. **Installable**: Users can add the website to their home screen on mobile devices
2. **App-like Experience**: Full-screen mode without browser UI when installed
3. **Custom Icon**: Beautiful wedding-themed icon on the home screen
4. **No Aggressive Caching**: Service worker updated to prevent caching issues that could block updates

**Note**: Caching has been removed to ensure users always receive the latest updates. If users report not seeing new features, direct them to `/clear-cache.html` to clear their browser cache.

### Customization

#### Replacing Placeholder Images

The website currently uses placeholder images from Unsplash. To add your real photos:

1. Add your images to the `public/` directory
2. Update the image sources in `src/app/page.tsx`:
   - Hero background image
   - About section couple photos
   - Gallery images

#### Updating Content

Key areas to customize in `src/app/page.tsx`:

- **Names**: Update "John & Emily" throughout the file
- **Wedding Date**: Currently set to July 11, 2026
- **Venue Information**: Update Circ venue details if needed
- **Our Story**: Replace placeholder text with your real story
- **Timeline**: Adjust wedding day schedule as needed
- **Registry Links**: Add real registry URLs
- **Contact Information**: Update social links in footer

#### Styling

The website uses CSS custom properties (variables) defined in `globals.css`:

```css
:root {
  --color-primary: #8b5a3c; /* Main brown color */
  --color-secondary: #d4b5a0; /* Light brown */
  --color-accent: #f5e6d3; /* Cream background */
  --color-text: #2c1810; /* Dark text */
  --color-text-light: #6b5b73; /* Light text */
}
```

Change these values to match your preferred color scheme.

### Building for Production

```bash
npm run build
```

### Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Alternative deployment options:

- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any static hosting service

## RSVP Form Integration

The RSVP form is integrated with Google Sheets to store responses. This allows you to:

1. Collect guest responses in real-time
2. Track attendance, dietary restrictions, and special messages
3. Export data for wedding planning purposes

### Setting Up the RSVP Form

To set up the Google Sheets integration:

1. Create a Google Cloud project and enable the Google Sheets API
2. Create a service account and download the credentials JSON file
3. Save the credentials file as `wedding-466018-ad374378e97f.json` in the project root
4. Run the setup script: `node scripts/setup-sheets.js`
5. Follow the instructions in `RSVP-SETUP.md` for detailed setup steps

For more information, see [RSVP-SETUP.md](./RSVP-SETUP.md).

## Song Request Form Integration

The song request form allows guests to submit their favorite songs for the reception, with all requests automatically saved to a separate Google Sheets spreadsheet. This enables you to:

1. Collect song requests from guests in real-time
2. Share the list with your DJ or band
3. Create the perfect wedding playlist based on guest preferences
4. Track special requests for specific moments (first dance, parent dance, etc.)

### Setting Up the Song Request Form

To set up the Google Sheets integration for song requests:

1. Use the same Google Cloud project and service account from RSVP setup
2. Run the setup script: `node scripts/setup-song-requests.js`
3. Add the `GOOGLE_SHEETS_SONG_REQUEST_SPREADSHEET_ID` environment variable
4. Follow the instructions in `SONG-REQUEST-SETUP.md` for detailed setup steps

For more information, see [SONG-REQUEST-SETUP.md](./SONG-REQUEST-SETUP.md).

## Troubleshooting

### Users Not Seeing Updates

If users report not seeing new features or updates:

1. **Direct them to the cache clearing page**: `/clear-cache.html`
2. **Manual browser refresh**: Instruct them to use hard refresh:
   - **Chrome/Edge**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - **Firefox**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - **Safari**: Cmd+Option+R
3. **Clear browser data**: Have them clear browsing data/cache in browser settings

### Development Cache Issues

During development, if you're not seeing changes:

```bash
# Clear Next.js cache
rm -rf .next

# Restart development server
npm run dev > dev.log 2>&1 &
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal wedding website. If you're using this as a template for your own wedding:

1. Fork the repository
2. Update all personal information
3. Replace placeholder images with your photos
4. Customize colors and styling to match your preferences

## License

This project is for personal use. Feel free to use it as a template for your own wedding website.

## Support

For questions about Next.js, visit:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)
