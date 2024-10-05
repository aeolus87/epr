//Homepage Service

export const homepageService = {
  getHomepageData,
};

async function getHomepageData() {
  try {
    const data = await Homepage.find({});
    return data;
  } catch (error) {
    throw error;
  }
}
