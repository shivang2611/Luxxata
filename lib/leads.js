// Sends an enquiry or popup lead to /api/enquiry, which appends it to the leads sheet.
export async function sendLead(lead) {
  try {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, page: location.pathname }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// Short, unique-enough reference shown to the traveller and stored with the lead.
export const newRef = (code) => 'LX-' + code + '-' + Date.now().toString(36).slice(-5).toUpperCase();
