/**
 * Google Apps Script web app that appends website leads to the "Amira Meta Leads" sheet.
 *
 * Setup (once):
 *   1. Open the sheet > Extensions > Apps Script, replace Code.gs with this file, save.
 *   2. Project Settings > Script properties > add SECRET = a long random string.
 *   3. Deploy > New deployment > Web app; Execute as: Me; Who has access: Anyone. Copy the /exec URL.
 *   4. In Vercel (and .env.local for local testing) set:
 *        SHEETS_WEBHOOK_URL=<the /exec URL>
 *        SHEETS_WEBHOOK_SECRET=<the same SECRET>
 * After editing this script, use Deploy > Manage deployments > Edit > New version to publish changes.
 */
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  const body = JSON.parse(e.postData.contents || '{}');
  const secret = PropertiesService.getScriptProperties().getProperty('SECRET');
  if (!secret || body.secret !== secret || !body.row) return json({ ok: false, error: 'unauthorised' });

  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    // Columns are matched by header name, so the sheet's columns can be reordered freely.
    let headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0].filter(String);
    const missing = Object.keys(body.row).filter((k) => !headers.includes(k));
    if (missing.length) {
      sheet.getRange(1, headers.length + 1, 1, missing.length).setValues([missing]);
      headers = headers.concat(missing);
    }
    sheet.appendRow(headers.map((h) => body.row[h] ?? ''));
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
