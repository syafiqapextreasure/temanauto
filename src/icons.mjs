// Scalable redraws of the existing blue line symbols used in article UI.
const drawings={
 link:'<path d="m10 13 4-4m-6 6-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2 2 1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0" transform="translate(1 0)"/>',
 share:'<circle cx="6" cy="12" r="2.3"/><circle cx="17" cy="6" r="2.3"/><circle cx="17" cy="18" r="2.3"/><path d="m8 11 7-4M8 13l7 4"/>',
 whatsapp:'<path d="M20 11.5a8 8 0 0 1-12 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z"/><path d="m9 7 1 3-1 1c1 2 2 3 4 3l1-1 3 1c0 2-2 3-4 2-3-1-6-4-6-7 0-1 1-2 2-2Z" stroke-width="1.3"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r=".8" fill="currentColor" stroke="none"/>',
 'credit-check':'<path d="M12 21H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10l4 4v6M14 2v5h5M7 10h7M7 14h4M7 18h3m4-1 3 3 5-6"/>',
 coins:'<ellipse cx="8" cy="7" rx="6" ry="3"/><path d="M2 7v10c0 4 12 4 12 0V7M2 12c0 4 12 4 12 0M2 16c0 4 12 4 12 0"/><ellipse cx="17" cy="4" rx="5" ry="2.5"/><path d="M22 4v10c0 1.5-3 3-7 2M14 9c4 2 8 0 8-1m-7 5c4 1 7-1 7-2"/>',
 'article-folder':'<path d="M3 6V4a1 1 0 0 1 1-1h6l3 3h7a1 1 0 0 1 1 1v13H3Z"/><path d="M3 8h18"/>',
 calculator:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v3H8Z M8 13h1m3 0h1m3 0h1M8 17h1m3 0h1m3 0h1"/>',
 'source-book':'<path d="M12 5C8 2 5 2 2 3v16c4-1 6 0 10 2 4-2 6-3 10-2V3c-3-1-6-1-10 2Zm0 0v16"/>',
 'small-check':'<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m7 12 3 3 7-7" stroke="white" stroke-width="2"/>'
};
export function vectorIcon(name,cls=''){
 const d=drawings[name];if(!d)return '';
 const tile=['credit-check','coins','article-folder','calculator'].includes(name);
 return `<svg class="icon vector-icon ${tile?'icon-tile':''} ${cls}" viewBox="${tile?'-5 -5 34 34':'0 0 24 24'}" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
}
