const handler = (request,response) => {
    
    const {fooId,barId} = request.query

    response.status(200).json({fooId, barId})
}

export default handler