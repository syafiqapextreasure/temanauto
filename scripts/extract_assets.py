"""Extract approved artwork into lossless web assets; no generative substitutions."""
from pathlib import Path
from PIL import Image
import json

ROOT = Path(__file__).resolve().parents[1]
REFERENCES = ROOT.parents[1] / 'outputs' / 'TemanAuto-complete-page-designs'
OUT = ROOT / 'public' / 'assets'
OUT.mkdir(parents=True, exist_ok=True)
records=[]

def crop(name, source, box, note='', alpha=False):
    image=Image.open(REFERENCES/source).convert('RGBA')
    result=image.crop(box)
    if alpha:
        # Only isolate the already-present colored illustration; retain its pale
        # blue backing. This is extraction, not substitution by another icon set.
        px=result.load()
        for y in range(result.height):
            for x in range(result.width):
                r,g,b,a=px[x,y]
                if min(r,g,b)>247: px[x,y]=(r,g,b,0)
    path=OUT/(name+'.webp')
    result.save(path,'WEBP',lossless=True,method=6,exact=True)
    check=Image.open(path).convert('RGBA')
    assert check.tobytes()==result.tobytes(), name+' lossless verification failed'
    records.append(dict(name=name, file=path.name, source=source, box=list(box),
                        width=result.width,height=result.height,bytes=path.stat().st_size,
                        encoding='lossless WebP',decoded_pixels_match=True,note=note))

H='01-Homepage.png'; S='02-Cara-kami-bantu.png'; T='03-Cerita-pelanggan.png'
F='04-Soalan-lazim.png'; B='05-Blog-listing.png'; A='06-Blog-article-detail.png'

# Photos retain approved crop composition and original illustration badges.
crop('home-hero',H,(470,109,985,595),'Approved hero with baked Faham dulu slogan. Do not overlay another slogan.')
crop('service-broker',S,(386,114,796,467),'Original Imej ilustrasi badge retained.')
crop('story-nadia',T,(25,485,439,865),'Original Imej ilustrasi badge retained.')
crop('story-farhan',T,(26,991,396,1180),'Original Imej ilustrasi badge retained.')
crop('story-siti',T,(421,991,794,1180),'Original Imej ilustrasi badge retained.')
crop('faq-helper',F,(20,945,235,1169),'Illustrative person, not actual staff identity.')
crop('blog-feature',B,(27,518,442,820))
crop('blog-rejected',B,(27,951,271,1111),'Original document lettering retained as part of photo.')
crop('blog-budget',B,(288,951,532,1111))
crop('blog-freelancer',B,(549,951,793,1111))
crop('blog-guarantor',B,(27,1293,271,1455))
crop('blog-timeline',B,(288,1293,532,1455))
crop('blog-scam',B,(549,1293,793,1455))
crop('article-hero',A,(29,338,790,609))
crop('article-related-rejected',A,(36,1682,201,1767))
crop('article-related-freelancer',A,(433,1682,598,1767))
crop('avatar-nadia',H,(55,1131,125,1205),'Crop as circle with CSS; portrait is a fictional sample.')
crop('avatar-farhan',H,(540,1131,610,1205),'Crop as circle with CSS; portrait is a fictional sample.')

# The exact illustrated artwork and icon tiles; no generic substitute icon set.
crop('illustration-blog',B,(505,126,797,321),'Includes approved pale-blue backdrop; match surrounding background color.')
crop('illustration-faq',F,(476,131,761,333),'Includes approved pale-blue backdrop; match surrounding background color.')
crop('icon-chat',S,(111,651,181,722),alpha=True)
crop('icon-home-chat',H,(35,821,110,894),alpha=True)
crop('icon-home-car',H,(370,821,444,894),alpha=True)
crop('icon-home-clipboard',H,(697,821,770,894),alpha=True)
crop('icon-car',S,(111,769,181,838),alpha=True)
crop('icon-clipboard',S,(111,882,181,951),alpha=True)
crop('icon-handshake',S,(111,999,181,1068),alpha=True)
crop('icon-document',S,(43,1187,102,1247),alpha=True)
crop('icon-folder',S,(43,1357,102,1417),alpha=True)
crop('icon-wallet',S,(437,1187,498,1247),alpha=True)
crop('icon-check-circle',S,(437,1357,498,1417),alpha=True)
crop('icon-credit-check',A,(29,935,93,999),alpha=True)
crop('icon-coins',A,(29,1027,93,1090),alpha=True)
crop('icon-article-folder',A,(29,1116,93,1180),alpha=True)
crop('icon-calculator',A,(545,1117,589,1176),alpha=True)
crop('icon-book',F,(43,1557,158,1669),'Original pale circle halo included.',alpha=True)
crop('icon-info',A,(47,650,80,682),alpha=True)
crop('icon-source-book',A,(46,1493,77,1524),alpha=True)
crop('icon-trust-check',H,(99,659,130,690),'Blue circle check matches approved trust strip.',alpha=True)
crop('icon-small-check',A,(40,1249,60,1271),alpha=True)
crop('icon-quote',H,(54,1016,96,1050),alpha=True)
crop('icon-search',F,(67,354,92,381),'Circle and handle extracted from approved search field.',alpha=True)
crop('icon-link',A,(660,293,697,326),alpha=True)
crop('icon-whatsapp',A,(704,293,740,326),alpha=True)
crop('icon-share',A,(747,293,783,326),alpha=True)
crop('icon-plus',F,(763,766,781,789),alpha=True)
crop('icon-arrow',H,(239,552,259,575),'White arrow from CTA. Blue background retained for blue-button placement.')

# Clean portions of actual background artwork, with no embedded typography.
crop('background-road-waves',H,(350,1410,1007,1484),'Exact clean lower road-curve strip; use as decorative bottom-positioned layer, not full-section stretching.')
crop('background-story-right',T,(704,191,820,379),'Clean upper-right waves; background-position:right bottom.')
crop('background-cta-right',S,(682,1630,819,1858),'Original clean right-side background wedge; use at right edge.')

logo=Image.open(REFERENCES/'TemanAuto-logo.png').convert('RGBA')
logo.save(OUT/'logo.webp','WEBP',lossless=True,method=6,exact=True)
records.append(dict(name='logo',file='logo.webp',source='TemanAuto-logo.png',
                    width=logo.width,height=logo.height,bytes=(OUT/'logo.webp').stat().st_size,
                    encoding='lossless WebP',decoded_pixels_match=True,note='Original high-resolution transparent symbol. Typeset wordmark separately.'))

audit=dict(asset_count=len(records),assets=records,
    extraction_method='Exact crops from approved raster artwork. Lossless WebP compression with decoded-pixel equality checks.',
    limitations=[
      'Photos and most icons exist only inside low-resolution approved page artwork; lossless extraction cannot create additional native detail.',
      'Hero slogan and illustration badges are baked into source photos and retained intentionally for visual fidelity.',
      'Use CSS rounded clipping and exact aspect ratios to avoid double frames or altered crops.',
      'Photo movement should be subtle: large parallax movement would change approved composition.',
      'The full background layer beneath text is unavailable. Clean strips and edge wedges preserve actual artwork; broader full-bleed reconstruction may need generation or a measured decorative path.',
      'Raster icons include original pale tile backgrounds and can be enlarged modestly but are not vector originals.'
    ])
(ROOT/'docs'/'asset-audit.json').write_text(json.dumps(audit,indent=2),encoding='utf-8')
print(json.dumps(dict(count=len(records),bytes=sum(x['bytes'] for x in records),files=[x['file'] for x in records])))
