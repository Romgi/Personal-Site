const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

export function isSafeHref(href: string) {
  if (!href || /[\u0000-\u001F\u007F\s]/.test(href)) {
    return false;
  }

  if (href.startsWith("/")) {
    return !href.startsWith("//");
  }

  try {
    const url = new URL(href);
    return SAFE_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
}

export function safeHref(href: string) {
  if (!isSafeHref(href)) {
    throw new Error(`Unsafe href in site data: ${href}`);
  }

  return href;
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
