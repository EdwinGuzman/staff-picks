import monthData from './monthData';
import annualData from './annualData';
import appConfig from "../../../appConfig";

const { baseUrl } = appConfig;

/* selectData
 * Map the url param to specific endpoint requests. Redirect otherwise to the homepage.
 */
function selectData(req, res, next) {
  const type = req.params.type;
  const time = req.params.time;

  if (type === 'childrens' || type === 'ya') {
    if (time) {
      // TODO: Need to find function specific to calling annual data set.
    } else {
      return annualData.annualCurrentData(type, req, res, next);
    }
  }

  if (type === 'staff-picks') {
    if (time) {
      return monthData.selectMonthData(req, res, next);
    } else {
      return monthData.currentMonthData(req, res, next);
    }
  }

  return res.redirect(baseUrl);
}

export default {
  selectData,
};
