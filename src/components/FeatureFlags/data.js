const dummyApiResponse = {
  showLightAndDarkMode: true,
  showStarRating: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showScrollIndicator: true,
  showQrCode: true,
};

function featureFlagServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured! Please try again later");
  });
}

export default featureFlagServiceCall;
