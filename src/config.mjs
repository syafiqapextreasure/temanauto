export const site = {
  name: 'TemanAuto', url: 'https://www.temanauto.com', language: 'ms-MY',
  phone: '+60195886216', displayPhone: '019-588 6216', whatsapp: '60195886216',
  description: 'Broker kereta bebas. Fahami pilihan kereta, bajet, dokumen dan proses permohonan apabila loan pernah tidak lepas.',
  updated: '2026-11-06',
};
export const navigation = [
  ['/cara-kami-bantu','Cara kami bantu'], ['/cerita-pelanggan','Cerita pelanggan'],
  ['/soalan-lazim','Soalan lazim'], ['/blog','Blog'],
];
export const whatsappUrl = (message = 'Hai TemanAuto, saya ingin bincangkan pilihan kereta dan proses permohonan. Boleh terangkan langkah serta sebarang caj terlebih dahulu?') => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
