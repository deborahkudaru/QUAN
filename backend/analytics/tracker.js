let viewsToday = 0;

function trackView(req, res, next) {
  viewsToday++;
  console.log(`Views today: ${viewsToday}`);
  next();
}

function getViews() {
  return viewsToday;
}

module.exports = { trackView, getViews };
