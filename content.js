// Function to remove sponsored links
function removeSponsoredLinks() {
    const sponsoredSelectors = [
      'div[data-text-ad="1"]', // General selector for text ads
      'div[data-content-ad="1"]', // General selector for content ads
      'div[id^="taw"]', // Container for ads
      'span[class="CnP9N U3A9Ac sShZqd"]' // Another common class for ads
    ];
  
    sponsoredSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  }
  
  removeSponsoredLinks();
  
  const observer = new MutationObserver(removeSponsoredLinks);
  observer.observe(document.body, { childList: true, subtree: true });