import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

// Configure Google Sheets API
const configureGoogleSheets = () => {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error(
      "Google Sheets API credentials not found in environment variables",
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
    const { firstName, lastName, email, attending } = body;
    if (!firstName || !lastName || !email || !attending) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Get other optional fields
    const guests = body.guests || "1";
    const dietary = body.dietary || "";
    const message = body.message || "";

    // Format date
    const date = new Date().toISOString();

    // Get spreadsheet ID
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID not found in environment variables");
    }

    // Initialize Google Sheets API
    const sheets = configureGoogleSheets();

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:H", // Adjust range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            date,
            firstName,
            lastName,
            email,
            attending,
            guests,
            dietary,
            message,
          ],
        ],
      },
    });

    // Return success response
    return NextResponse.json(
      { success: true, message: "RSVP submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting RSVP:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting RSVP. Please try again later.",
      },
      { status: 500 },
    );
  }
}
