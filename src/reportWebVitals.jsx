const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then((webVitals) => {
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    }).catch(err => console.error('Error loading web-vitals', err));
  }
};
export default reportWebVitals;
