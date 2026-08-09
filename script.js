// ---- Mobile nav ----
function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
}

// ---- FAQ accordion ----
function toggleFaq(btn){
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if(!isOpen){ item.classList.add('open'); }
}

// ---- Stage flow diagram ----
const stageInfo = {
  1: {t:"Sediment Filter", d:"Strips out dirt, sand, and rust before water reaches anything more delicate downstream."},
  2: {t:"Carbon Filter #1", d:"Reduces chlorine and the chemicals that cause bad taste and odour."},
  3: {t:"Carbon Filter #2", d:"A second pass that protects the RO membrane and extends its life."},
  4: {t:"RO Membrane", d:"The core stage — removes up to 95–99% of dissolved contaminants: lead, arsenic, nitrates, many salts and metals."},
  5: {t:"Post-Carbon Filter", d:"Polishes the water right before the faucet, sharpening the final taste."},
  6: {t:"Remineralization or UV", d:"Either adds back beneficial minerals for taste, or uses UV light to inactivate microorganisms — depending on the system."},
  7: {t:"Alkaline / UV Stage", d:"The 7-stage system's extra step: raises pH and adds minerals, or adds UV protection — best matched to your specific water, not just 'more is better'."}
};
function showDetail(n){
  document.querySelectorAll('.fnode').forEach(el=>el.classList.remove('open'));
  document.querySelector('.fnode[data-stage="'+n+'"]').classList.add('open');
  const info = stageInfo[n];
  document.getElementById('flowDetail').innerHTML = '<b>Stage '+n+' — '+info.t+':</b>&nbsp;'+info.d;
}
function setStages(n){
  const track = document.getElementById('flowTrack');
  if(!track) return;
  document.getElementById('btn6').classList.toggle('active', n===6);
  document.getElementById('btn7').classList.toggle('active', n===7);
  track.classList.toggle('show7', n===7);
  document.getElementById('flowDetail').innerHTML = '<b>Tap a stage above</b>&nbsp;— we\'ll explain what it removes and why it\'s in the lineup.';
  document.querySelectorAll('.fnode').forEach(el=>el.classList.remove('open'));
}

// ---- Quote form ----
// NOTE: replace this with your real business email (or swap in a form backend like
// Formspree / Netlify Forms) so leads land somewhere you actually check.
const LEAD_EMAIL = "pureflow.systemss@gmail.com";

function submitQuoteForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const interest = document.getElementById('interest').value;
  const notes = document.getElementById('notes').value.trim();

  const subject = "New quote request — " + name;
  const body =
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Interested in: " + interest + "\n" +
    "Notes: " + (notes || "—");

  const mailtoUrl = "mailto:" + LEAD_EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.location.href = mailtoUrl;

  const note = document.getElementById('quoteFormNote');
  if(note){
    note.textContent = "Opening your email app with the details filled in — just hit send and we'll be in touch shortly.";
  }
}
