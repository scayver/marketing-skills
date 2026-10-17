function draftMeta(page) {
  const sentences = (page.extracted.paragraphs || [])
    .map(item => String(item).replace(/\s+/g, ' ').trim())
    .filter(item => item.length >= 40)
  const sentence = sentences[0] || page.extracted.h1.find(item => item.length > 20) || page.extracted.title
  const base = String(sentence || 'Learn what this page offers.').replace(/\s+/g, ' ').trim()
  const trimmed = base.length > 155 ? `${base.slice(0, 150).replace(/\s+\S*$/, '')}.` : base
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`
}

function prepareFinding(finding, pages) {
  const page = pages.find(item => finding.pages.includes(item.finalUrl)) || pages[0]
  if (!page) throw new Error('The scanned page is no longer available.')

  if (finding.prepare === 'meta') {
    return {
      kind: 'meta',
      pageUrl: page.finalUrl,
      before: page.extracted.description || '',
      after: draftMeta(page),
      note: 'Quill drafted this from visible page text. Approving it stores your decision. It does not publish to the website.',
    }
  }

  if (finding.prepare === 'noindex') {
    return {
      kind: 'noindex',
      pageUrl: page.finalUrl,
      before: page.extracted.robots,
      after: '',
      note: 'Rank prepared the removal of the noindex directive. Approving it stores your decision. It does not edit the live page.',
    }
  }

  if (finding.prepare === 'alt') {
    const images = page.extracted.images
      .filter(image => !image.hasAlt || !image.alt.trim())
      .map(image => ({
        src: image.src,
        before: image.alt || '',
        after: page.extracted.h1[0] ? `Photo related to ${page.extracted.h1[0]}.` : 'Describe this image before you publish.',
      }))
    return {
      kind: 'alt',
      pageUrl: page.finalUrl,
      images,
      note: 'Studio drafted alt text from the page H1. Treat it as a draft until you confirm what the image shows. Approving it does not upload a file.',
    }
  }

  throw new Error('This finding does not have a preview yet. It needs a CMS or code change outside this workspace.')
}

module.exports = { draftMeta, prepareFinding }
