# Setting Up Google Sheets Integration for RSVP Form

This guide will help you set up the Google Sheets integration for your wedding website's RSVP form.

## Prerequisites

1. A Google account
2. Service account credentials JSON file (already saved as `wedding-466018-ad374378e97f.json`)

## Setup Steps

### 1. Install Dependencies

Make sure you have all the required dependencies installed:

```bash
npm install googleapis
```

### 2. Run the Setup Script

We've created a setup script that will:

- Create a new Google Sheets spreadsheet for your RSVPs
- Share the spreadsheet with your email address
- Generate the necessary environment variables

Run the script with:

```bash
node scripts/setup-sheets.js
```

When prompted, enter your email address to share the spreadsheet with you.

### 3. Verify Environment Variables

The script will create a `.env.local` file with the necessary environment variables:

```
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project-id.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="your-spreadsheet-id"
```

### 4. Test the RSVP Form

Start your development server:

```bash
npm run dev > dev.log 2>&1 &
```

Visit your website and test the RSVP form. Submissions should appear in your Google Sheets spreadsheet.

### 5. Deployment

When deploying your website, make sure to add these environment variables to your deployment platform:

- For Vercel:

  - Go to your project settings
  - Navigate to the "Environment Variables" section
  - Add each variable from your `.env.local` file

- For Netlify:
  - Go to your site settings
  - Navigate to "Build & deploy" > "Environment"
  - Add each variable from your `.env.local` file

## Troubleshooting

### Form Submission Errors

If you encounter errors when submitting the form:

1. Check the browser console for error messages
2. Verify that your environment variables are correctly set
3. Make sure your service account has the necessary permissions

### Google Sheets API Errors

If you see errors related to the Google Sheets API:

1. Verify that the API is enabled in your Google Cloud project
2. Check that your service account has the necessary permissions
3. Ensure your credentials are correctly formatted in the environment variables

## Security Considerations

- Never commit your service account credentials to version control
- Keep your `.env.local` file secure and do not share it
- Consider restricting access to your Google Sheets spreadsheet

## Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)
- [Environment Variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)
