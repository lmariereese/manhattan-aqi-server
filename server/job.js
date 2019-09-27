const Axios = require('axios')

async function addNewReport(dataFunc) {
  let data = await dataFunc()
  // console.log('INSIDE ADD NEW REPORT: ', data);
  // console.log('INSIDE ADD NEW REPORT: ', JSON.parse(data));

  try {
    console.log('INSIDE ADD NEW REPORT DATAAA: ', data)
    let pollution = data.pollution
    console.log('POLLUTION: ', pollution)
    await Axios.post('/api/pollution', data)
  } catch (err) {
    console.error('addNewReport error', err)
  }
}

module.exports = addNewReport
