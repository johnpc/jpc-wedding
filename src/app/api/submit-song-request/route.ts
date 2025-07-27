import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

// Configure Google Sheets API
const configureGoogleSheets = () => {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error(
      "Google Sheets API credentials not found in environment variables"
    );
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields
    const { name, songTitle, artist } = body;
    if (!name || !songTitle || !artist) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, song title, and artist are required)" },
        { status: 400 }
      );
    }

    // Get optional message field
    const message = body.message || "";

    // Format date
    const date = new Date().toISOString();

    // Get spreadsheet ID for song requests
    const spreadsheetId = process.env.GOOGLE_SHEETS_SONG_REQUEST_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Song request spreadsheet ID not found in environment variables");
    }

    // Initialize Google Sheets API
    const sheets = configureGoogleSheets();

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E", // Updated range for 5 columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            date,
            name,
            songTitle,
            artist,
            message,
          ],
        ],
      },
    });

    // Return success response
    return NextResponse.json(
      { success: true, message: "Song request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting song request:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting song request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
