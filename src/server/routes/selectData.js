import monthData from './monthData';
import annualData from './annualData';
import appConfig from '../../../appConfig';

const { baseUrl, base404 } = appConfig;

/**
 * selectData(req, res, next)
 * Map the url param to specific endpoint requests. Redirect otherwise to the homepage.
 */
function selectData(req, res, next) {
  const type = req.params.type;
  const time = req.params.time;

  if (type === 'childrens' || type === 'ya') {
    if (time) {
      return annualData.annualListData(req, res, next);
    }
    return annualData.annualCurrentListData(req, res, next);
  }

  if (type === 'staff-picks') {
    if (time) {
      return monthData.selectMonthData(req, res, next);
    }

    return monthData.currentMonthData(req, res, next);
  }

  return res.redirect(base404);
}

export default {
  selectData,
};
