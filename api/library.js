function generateDatatableParameter (requestBody) {
  let params = Object.assign({})
  if (requestBody !== undefined) {
    const fixedParams = {
      page     : (requestBody.start / requestBody.length) + 1,
      per_page : requestBody.length,
      sort_by  : requestBody.columns[requestBody.order[0].column].data,
      sort     : requestBody.order[0].dir,
    }
    const mixedParams = Object.assign({}, fixedParams, requestBody.params)
    params = mixedParams
    if (requestBody.params.filter !== undefined) {
      const filter = Object.assign({})
      for (const requestKey in requestBody.params.filter)
        filter[`filter[${requestKey}]`] = requestBody.params.filter[requestKey]
      const resultParams = Object.assign({}, mixedParams, filter)
      delete resultParams.filter
      params = resultParams
    }
  }

  return params
}

function generateDatatableResult (response) {
  let data = {
    iTotalRecords       : 0,
    iTotalDisplayRecords: 0,
    sEcho               : 0,
    sColumns            : '',
    aaData              : [],
  }
  if (response.data.general_response.response_status === true) {
    // generate row number
    for (let i = 0; i < response.data.result.length; i++)
      response.data.result[i].row_number = i + response.data.pagination.from
    data = {
      iTotalRecords       : response.data.pagination.total,
      iTotalDisplayRecords: response.data.pagination.total,
      sEcho               : 0,
      sColumns            : '',
      aaData              : response.data.result,
    }
  }

  return data
}

function generateParameter (requestQuery) {
  let params = Object.assign({})
  for (const parameterKey in requestQuery) {
    if (parameterKey !== 'filter')
      params[parameterKey] = requestQuery[parameterKey]
  }

  const requestFilter = JSON.parse(requestQuery.filter)
  const filter = Object.assign({})
  for (const requestKey in requestFilter)
    filter[`filter[${requestKey}]`] = requestFilter[requestKey]
  const resultParams = Object.assign({}, params, filter)
  params = resultParams

  return params
}

function generatePostData (postData) {
  let data = Object.assign({})
  for (const postKey in postData) {
    if (Array.isArray(postData[postKey]) === true) {
      for (const key in postData[postKey]) {
        for (const childKey in postData[postKey][key])
          data[`${postKey}[${key}][${childKey}]`] = postData[postKey][key][childKey]
      }
    } else
      data[`${postKey}`] = postData[postKey]
  }

  return data
}

module.exports = {
  generateDatatableParameter: generateDatatableParameter,
  generateDatatableResult   : generateDatatableResult,
  generateParameter         : generateParameter,
  generatePostData          : generatePostData,
}
