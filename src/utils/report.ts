
export const gtagReportConversion = (url?: string) => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = window.gtag as (...args: any[]) => void
    gtag('event', 'conversion', {
      send_to: 'AW-16663815429/fWxwCOv6rMgZEIXK9ok-',
      value: 1.0,
      currency: 'TRY',
      event_callback: callback,
    });
  }
};
