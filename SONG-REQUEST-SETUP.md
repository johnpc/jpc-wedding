# Song Request Setup Guide

This guide will help you set up the song request feature for your wedding website. The song request form allows guests to submit their favorite songs for the reception, and all requests are automatically saved to a Google Sheets spreadsheet.

## Prerequisites

Before setting up song requests, make sure you have:

1. **Google Cloud Project**: You need the same Google Cloud project used for RSVP setup
2. **Service Account**: The same service account credentials file (`wedding-466018-ad374378e97f.json`)
3. **Environment Variables**: Basic Google Sheets API credentials already configured

If you haven't set up the RSVP form yet, please follow the instructions in `RSVP-SETUP.md` first.

## Quick Setup

### Step 1: Run the Setup Script

From the project root directory, run:

```bash
node scripts/setup-song-requests.js
```

This script will:
- Create a new Google Sheets spreadsheet titled "Wedding Song Requests"
- Set up the appropriate column headers
- Add the spreadsheet ID to your `.env.local` file
- Display the necessary environment variables

### Step 2: Verify Environment Variables

Make sure your `.env.local` file contains these variables:

```env
# Google Sheets API Credentials (shared with RSVP)
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# RSVP Spreadsheet (existing)
GOOGLE_SHEETS_SPREADSHEET_ID=your-rsvp-spreadsheet-id

# Song Request Spreadsheet (new)
GOOGLE_SHEETS_SONG_REQUEST_SPREADSHEET_ID=your-song-request-spreadsheet-id
```

### Step 3: Test the Feature

1. Start your development server:
   ```bash
   npm run dev > dev.log 2>&1 &
   ```

2. Navigate to your website and scroll to the "Song Requests" section

3. Fill out and submit a test song request

4. Check your Google Sheets spreadsheet to verify the data was saved

## Spreadsheet Structure

The song request spreadsheet contains the following columns:

| Column | Description | Required |
|--------|-------------|----------|
| Timestamp | When the request was submitted | Auto-generated |
| Name | Guest's name | Yes |
| Song Title | Name of the requested song | Yes |
| Artist | Artist or band name | Yes |
| Why This Song? | Why this song is special | No |

## Managing Song Requests

### Viewing Requests

1. Open your Google Sheets spreadsheet
2. All song requests will appear in chronological order
3. You can sort, filter, and organize the data as needed

### Sharing with Your DJ/Band

1. Share the spreadsheet with your DJ or band leader
2. They can access the list in real-time as requests come in
3. Consider creating a separate "Approved" or "Playlist" sheet for final selections

### Exporting Data

You can export the song request data in various formats:
- **CSV**: For importing into music software
- **PDF**: For printing a physical list
- **Excel**: For advanced sorting and filtering

## Customization Options

### Form Fields

You can modify the song request form by editing `src/app/components/SongRequestForm.tsx`:

- Add new fields (e.g., "Email", "Genre", "Special Occasion")
- Modify validation rules
- Change placeholder text
- Adjust form layout

### Spreadsheet Headers

If you modify the form fields, update the API endpoint in `src/app/api/submit-song-request/route.ts` to match the new structure and adjust the spreadsheet range accordingly.

### Styling

The song request form uses the same CSS classes as the RSVP form, so it will automatically match your website's design. You can customize the styling in `src/app/globals.css`.

## Troubleshooting

### Common Issues

1. **"Spreadsheet ID not found" error**
   - Make sure `GOOGLE_SHEETS_SONG_REQUEST_SPREADSHEET_ID` is in your `.env.local` file
   - Verify the spreadsheet ID is correct

2. **"Permission denied" error**
   - Check that your service account has access to the spreadsheet
   - Verify the Google Sheets API is enabled in your Google Cloud project

3. **Form submission fails**
   - Check the browser console for error messages
   - Verify all required fields are filled out
   - Test your internet connection

### Testing the API Directly

You can test the song request API endpoint directly:

```bash
curl -X POST http://localhost:3000/api/submit-song-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "songTitle": "Test Song",
    "artist": "Test Artist",
    "message": "This is a test request"
  }'
```

### Logs and Debugging

Check the server logs for detailed error messages:

```bash
# View development logs
tail -f dev.log

# Check for API errors
grep "Error submitting song request" dev.log
```

## Security Considerations

1. **Environment Variables**: Never commit your `.env.local` file to version control
2. **Spreadsheet Access**: Only share the spreadsheet with trusted individuals
3. **Rate Limiting**: Consider implementing rate limiting for the API endpoint in production
4. **Data Validation**: The form includes basic validation, but additional server-side validation may be beneficial

## Production Deployment

When deploying to production:

1. Add all environment variables to your hosting platform
2. Test the song request form in the production environment
3. Monitor the API endpoint for errors
4. Set up alerts for failed submissions

## Support

If you encounter issues:

1. Check this documentation first
2. Review the browser console for client-side errors
3. Check server logs for API errors
4. Verify your Google Cloud project configuration
5. Test with a simple curl request to isolate the issue

The song request feature is now ready to help you create the perfect wedding playlist! 🎵
