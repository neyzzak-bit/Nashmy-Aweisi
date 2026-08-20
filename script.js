// Digital business card — "Add Contact" generates and downloads a .vcf file
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('addContactBtn');

  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Nashmy Aweisi',
    'N:Aweisi;Nashmy;;;',
    'TITLE:Business Dept Manager',
    'ORG:Biaraq Alriyadah Alhadithah',
    'TEL;TYPE=WORK,VOICE:+966596369002',
    'EMAIL;TYPE=WORK:Nashmy.Aweisi@biaraq.sa',
    'URL:https://www.biaraq.sa',
    'END:VCARD'
  ].join('\r\n');

  btn.addEventListener('click', () => {
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Nashmy-Aweisi.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    const span = btn.querySelector('span');
    const original = span.textContent;
    span.textContent = 'Saved ✓';
    btn.classList.add('saved');
    setTimeout(() => {
      span.textContent = original;
      btn.classList.remove('saved');
    }, 1800);
  });
});
