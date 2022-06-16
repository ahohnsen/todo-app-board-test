const handler = (request,response) => {
    const {headers, body, method, query} = request

    response.status(200).json({headers,body, method,query})
}

export default handler